import React from "react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Parallax from "../Parallax";
import { Title } from "../Formatting";
import Typography from "@material-ui/core/Typography";
import FormContact from "../../containers/FormContact";
import Section from "../Section";
import Link from '@material-ui/core/Link';
import Footer from "../Footer";
import Instagram from '@material-ui/icons/Instagram';
import artImage from "../../../static/1.png";
import all_cards from "../../images/all_cards.png";


import "./info.css";


const Info = (props) => {

  return (
    <Box className="info-box">
      <Title align="center">All available cards</Title>
      <Grid id="all-cards-box" container alignItems="center" style={{textAlign: 'center'}}>
        <Grid item xs={12} sm={8}>
          <img src={all_cards} />
        </Grid>
        <Grid item xs={12} sm={4} style={{paddingRight: "2rem", paddingLeft: "2rem"}}>
          <Box>
            <Title variant="h5" >All available cards</Title>
            <Typography >
              asdlkfjkalsj adspfjasfjkasdjflks  asdf sdaf sd fsd fas fs dsd f sdajf daslijf 
            </Typography>
          </Box>
          <Box marginTop="3rem" marginBottom="3rem">
            <Title variant="h5" >All available cards</Title>
            <Typography >
              asdlkfjkalsj adspfjasfjkasdjflks  asdf sdaf sd fsd fas fs dsd f sdajf daslijf 
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Parallax src={ artImage } filter="rgba(97, 84, 79, 0.79)">
          <Grid container spacing={0} justify="center">
              <Grid item xs={12} sm={10} md={8} lg={6}>
                  <Box textAlign="center" p="3rem">
                      <Title>
                          Запишитесь на курс прямо сейчас!
                      </Title>
                      <Typography variant="body1">
                          Доступ к курсу сразу после оплаты <br />
                          Буду рада нашей встрече!
                      </Typography>
                      <FormContact />
                  </Box>
              </Grid>
          </Grid>
      </Parallax>
      <Section color="white" align="center">
          <Title variant="h5" align="center">
              <Box paddingBottom="4rem">
              Остались вопросы?<br />
              WhatsApp<br />
              Телеграм<br />
              + 34 7222 57 200<br />
              Буду рада ответить:)<br />
              </Box>
          </Title>
          <Typography variant="body2">
              Присоединяйтесь<br />
              <Link href="https://www.instagram.com/granatovych_art" target="new" color="secondary" className="general_link">
                  <Instagram style={{fontSize: '2rem'}}/><br />
              </Link>
              @granatovych_art
          </Typography>
      </Section>
      <Footer content="Made with &#128156; from Ronda" />
      {/* </Grid> */}
    </Box>
  )
}

export default Info
