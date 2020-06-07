import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Layout from "../components/layout";
import Table from "../components/table";
import Info from "../components/info";
import SEO from "../components/seo";
import Card from "../components/card";
import cardBack from "../../static/1m.jpg";
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded';
import RefreshRounded from '@material-ui/icons/RefreshRounded';
import paypalButton from "../images/paypal_button.png";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/typo_theme";


function IndexPage(props) {
  const [shuffledTimes, setShuffle] = useState(0);
  const initialVariables = {
    numCards: 10,
    cardAction: 1,
    messageAction: 1,
    finishCardAction: false,
    finishMessageAction: false,
    cards: null,
    movedCardNodes: [],
    cardsBlocked: false,
    reloading: false,
    referenceWidht: window.innerWidth,
    lastViewStyle: null, // To know when the use changes from a vertical view to an horizontal view
    marginVertical: 0,
  }
  let variables = initialVariables;

  // This is used to pre-cache all the images used in the images, so when they are flipped the image 'behind' appear quickly
  // TODO: This can be done better, preload just thoes that has been moved, and for vertical view, preload while the second of flipping the card
  function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
  }
  let imageList = new Array()
  for (let i = 1; i <= variables.numCards; i++) {
    imageList.push(i.toString() + '.jpg');
    imageList.push(i.toString() + 'm.jpg');
  }
  preloadImages(imageList);

  const shuffle = (a) => {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }

  const _restartVariables = () => {
    variables = initialVariables;
  }

  // Moves the cards to their original position and then shuffle the deck
  const onClickShuffle = () => {
    let timeToWait = 0;
    variables.cardsBlocked = true;
    if ((variables.cardAction > 1) || (variables.messageAction > 1)) {
      let cardNode;
      // Take the transion time for the farthest card at right
      timeToWait = Math.max(...variables.movedCardNodes.map(elem => (parseFloat(elem.dataset.cardTransition))));
      for (cardNode of variables.movedCardNodes) {
        cardNode.style.left = '0px';
      }
    }
    // We wait for the farthest card to arrive to the original position
    setTimeout(() => {
      if ((variables.cardAction > 1) || (variables.messageAction > 1)) {
        let cardNode;
        // Restart the values for those moved cards
        for (cardNode of variables.movedCardNodes) {
          cardNode.style.zIndex = 0;
          cardNode.style.transition = null;
          cardNode.dataset.cardState = null;
          cardNode.dataset.cardTransition = null;
          cardNode.firstElementChild.firstElementChild.src = cardBack;
        }
      }
      _restartVariables();
      setShuffle(shuffledTimes + 1);
      variables.cardsBlocked = false;
    }, timeToWait * 1000);
  }

  // This function moves the card to one of the three possitions in the grid
  const moveCard = (cardNode, actionType, destination) => {
    const position = destination.getBoundingClientRect()
    console.log(position);
    const timeTransition = variables[actionType] * 1.4;
    cardNode.style.transition = `left ${timeTransition}s , box-shadow ${timeTransition / 2}s`;
    // I don't know yet why I get the left bigger than it should be, I'm removing a EM to adjust it a little.
    cardNode.style.left = position.left - 18 + 'px';
    cardNode.classList.add("card-transition-shadow")
    cardNode.dataset.cardState = 'moved';
    cardNode.dataset.cardTransition = timeTransition;
    cardNode.style.zIndex = variables[actionType];
    setTimeout(() => {
      cardNode.classList.remove("card-transition-shadow");
    }, (timeTransition / 2) * 1000);
    // I'm going to remember the nodes I've mode, so later I can put them back to the original position
    variables.movedCardNodes.push(cardNode);
    setTimeout(() => {
      cardNode.style.zIndex = 0;
    }, timeTransition * 1000)
  }

  const flipCard = (card) => {
    // const cardOriginalWidth = card.offsetWidth;
    card.firstElementChild.style.width = 0;
    card.firstElementChild.children[1].style.opacity = 1;
    card.firstElementChild.classList.add('card-transition-flip');
    setTimeout(() => {
      card.firstElementChild.classList.remove('card-transition-flip');
      card.firstElementChild.firstElementChild.src = card.id;
      card.firstElementChild.style.width = '100%';
      card.firstElementChild.children[1].style.opacity = 0;
    }, 0.4 * 1000);
    card.dataset.cardState = 'flipped';
  }

  // Call back passed to Card components, it's returned with a html node representing the touched card and the action, which is for
  // main card or message card
  const onCardClick = (card, actionType) => {
    // actionType are 'cardAction' or 'messageAction'
    const finishType = 'finish' + actionType.charAt(0).toUpperCase() + actionType.slice(1);
    if (variables.isVerticalScreen === true) {
      if (!variables[finishType] === true && !variables.cardsBlocked) {
        flipCard(card);
        variables[finishType] = true;
        variables[actionType] = 2;
        variables.movedCardNodes.push(card);
      }
    // Otherwise, in width big screens use the three column card positions to move
    } else {
      if (card.dataset.cardState === 'moved') {
        flipCard(card);
      } else {
        if (!variables[finishType] === true && !variables.cardsBlocked) {
          let destination;
          if (actionType === 'cardAction') {
            destination = document.getElementById(`pos${variables.cardAction}`);
          } else if (actionType === 'messageAction') {
            destination = document.getElementById(`mes${variables.messageAction}`);
          }
          moveCard(card, actionType, destination);
          if (variables[actionType] !== 3) {
            variables[actionType] = variables[actionType] + 1;
          } else {
            variables[finishType] = true;
          }
        }
      }
    } 
  }

  const onExpandClick = () => {
    window.scrollTo({top: document.getElementById('all-cards-box').clientHeight / 1.2, left: 0, behavior: 'smooth'});
  }

  const getCardSizes = () => {
    let cardSizes = {
      cardHeight: 0,
      cardWidth: 0,
      messageHeight: 0,
      messageWidth: 0
    };
    let viewType;
    // Determine the type of view from the perspective of the user
    if (window.innerHeight >= window.innerWidth) {
      viewType = 'vertical';
    } else {
      viewType = 'horizontal';
    }
    // Reload if necesary, when changing from vertical to horizontal
    if (variables.lastViewStyle === null) {
      variables.lastViewStyle = viewType;
    } else if (variables.lastViewStyle != viewType) { // reload when changing from vertical to horizantal and viceversa
      alert(viewType + " " + variables.lastViewStyle)
      window.location.reload();
    }
    // Otherwise, just apply the new sizes for cards
    cardSizes.cardHeight = window.innerHeight / 2;
    cardSizes.cardWidth = cardSizes.cardHeight / 1.39;
    const maxCardWidht = window.innerWidth / 4.9;
    if (cardSizes.cardWidth > maxCardWidht && viewType === 'horizontal') {
      cardSizes.cardHeight = cardSizes.cardHeight * (maxCardWidht / cardSizes.cardWidth);
      cardSizes.cardWidth = maxCardWidht;
    }
    // Sizes for card message just tries to be relative to the main card with the image
    cardSizes.messageHeight = cardSizes.cardHeight / 4;
    cardSizes.messageWidth = cardSizes.cardWidth;
    variables.isVerticalScreen = viewType === 'vertical' ?  true : false;
    variables.marginVertical = (window.innerWidth - cardSizes.cardWidth) / 2.8;
    cardSizes.marginVertical = variables.marginVertical;
    return cardSizes;
  }

  // Triggered on window.resize, it uses the max available height as base, and from there if the max widht is enoght just take the proportional widht, otherwise, reduce the heigh 
  // to adjust it to the max available width. It wait a second before to all this job.
  const resizeCards = () => {
    if (variables.reloading === false) {
      variables.reloading = true;
      setTimeout(() => {
        const cardsMain = document.getElementsByClassName('card-main');
        const cardsMessage = document.getElementsByClassName('card-message');
        const sizes = getCardSizes();
        for (let card of cardsMain) {
          card.style.width = sizes.cardWidth + "px";
          card.style.height = sizes.cardHeight + "px";
          if (card.style.left && window.innerWidth != variables.referenceWidht) {
            card.style.left = (parseFloat(card.style.left) + ((window.innerWidth - variables.referenceWidht) / 3)).toString() + 'px';
          }
        }for (let card of cardsMessage) {
          card.style.width = sizes.messageWidth + "px";
          card.style.height = sizes.messageHeight + "px";
          if (card.style.left && window.innerWidth != variables.referenceWidht) {
            card.style.left = (parseFloat(card.style.left) + ((window.innerWidth - variables.referenceWidht) / 3)).toString() + 'px';
          }
        }
        if (variables.isVerticalScreen === true) {
          document.querySelector('.card-position').style.marginLeft = sizes.marginVertical.toString() + "px";
          document.querySelector('.message-position').style.marginLeft = sizes.marginVertical.toString() + "px";
        }
        variables.referenceWidht = window.innerWidth;
        variables.reloading = false;
      }, 1000);
    }
  }

  // Inside this call I decide if show the vertial view or the large horizontal view
  const sizes = getCardSizes();
  let Cards = [], Messages = [];
  for (let i = 1; i <= variables.numCards; i++) {
    Cards.push(<Card key={i} img={`${i}.jpg`} onCardClick={onCardClick} variant="main" isVerticalScreen={variables.isVerticalScreen} width={sizes.cardWidth} height={sizes.cardHeight}/>)
    Messages.push(<Card key={i} img={`${i}m.jpg`} onCardClick={onCardClick} variant="message" width={sizes.messageWidth} height={sizes.messageHeight} />)
  }
  variables.cards = Cards;
  shuffle(Cards);
  shuffle(Messages);

  //  When resizing page, refresh the page so the height and widht are calculated again
  window.addEventListener("resize", resizeCards);

  return (
    <ThemeProvider theme={ theme }>
      <Layout>
        <SEO title="Home" spacing={4} />
        <Table>
          <Grid container justify="center" className="card-table">
            {variables.isVerticalScreen === true ? 
            (
              <Grid item xs={12} style={{height: '100%'}}>
                <RefreshRounded id="shuffle-cards" onClick={onClickShuffle} alt="Shuffle all the cards" style={{fontSize: '12vw'}}/>
                <Box position="relative" className="card-position" style={{marginLeft: variables.marginVertical}}>
                  { Cards }
                </Box>
                <Box position="relative" className="message-position" style={{marginLeft: variables.marginVertical}}>
                  { Messages }
                </Box>
              </Grid>
            ) : (
              <>
                <Grid item xs={3} style={{height: '97%'}}>
                  <RefreshRounded id="shuffle-cards" onClick={onClickShuffle} alt="Shuffle all the cards"/>
                  <Box position="relative" className="card-position">
                    { Cards }
                  </Box>
                  <Box position="relative" className="message-position">
                    { Messages }
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box id="pos1" className="card-position" />
                  <Box id="mes1" className="message-position" />
                </Grid>
                <Grid item xs={3}>
                  <Box id="pos2" className="card-position" />
                  <Box id="mes2" className="message-position" />
                </Grid>
                <Grid item xs={3}>
                  <Box id="pos3" className="card-position" />
                  <Box id="mes3" className="message-position" />
                </Grid>
                <ExpandMoreRounded id="expand-more" onClick={onExpandClick}/>
                <img id="paypal-button" src={paypalButton} alt="paypal" />
              </>)}
          </Grid> 
        </Table>
        <Info />
      </Layout>
    </ThemeProvider>
  )
  
}
  

export default IndexPage
