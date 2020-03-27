import React from "react";
// import { Link } from "gatsby";

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";


import { ThemeProvider } from "@material-ui/core/styles";

import Footer from "../components/Footer";
import Section from "../components/Section";
import Image from "../components/Image";
import Sandwitch from "../components/Sandwitch";
import CardButton from "../components/CarButton";
import { Title, ImgParagraph, ImgFit } from "../components/Formatting";



import theme from "../styles/typo_theme";
import flyingImage from "../../static/flying.jpg";
import child from "../../static/child.jpeg";



export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={ theme }>
                <Image src={ flyingImage } alt="flying in the blue sky">
                    <Grid container spacing={4} style={{paddingLeft: "2rem"}}>
                        <Grid item xs={12} style={{ marginTop: '25%' }}>
                            <Title variant="h2">
                                КАК НАЙТИ СВОЕ ПРЕДНАЗНАЧЕНИЕ
                            </Title>
                            <Title variant="h5">
                                КАК НАЙТИ СВОЕ<br /> ПРЕДНАЗНАЧЕНИЕ
                            </Title>
                            <Title variant="h5">
                                КАК НАЙТИ СВОЕ ПРЕДНАЗНАЧЕНИЕ
                            </Title>
                            <Button variant="contained" color="primary">My Button</Button>
                        </Grid>
                    </Grid>
                </Image>
                <Section color="#e3d49b" align="center">
                    <Title variant="h4">
                        Вы в поисках своего призвания, предназначения?<br/>
                        Давно об этом думаете или только начали?<br/>
                        Уже что-то читали и делали, или пока присматриваетесь к теме?<br/>
                        Добро пожаловать на авторский онлайн курс!
                    </Title>
                    <Divider variant="middle"/>
                    <Typography variant="body1">
                        Доставляет ли текущая работа вам удовольствие? Вы с радостью, бодро и легко просыпаетесь утром, полны энергии и новыми идеями, торопитесь на работу, чтобы поскорее взяться за дела, которые вчера неохотно оставили вечером? Вы испытываете состояние счастья на работе, сердце замирает в предвкушении новых задач, за спиной вырастают крылья в ощущении того, что вы со всем справитесь и что именно об этом мечтали? Если да, то я вас сердечно поздравляю — вы обрели своё призвание. Если пока нет, то приглашаю присоединиться к курсу на тему поиска своего призвания под названием "Мечтай и делай. Как найти своё призвание и начать получать удовольствие от работы".<br/>
                        Я нашла своё призвание и хорошо знаю, что чувствуют те, кто его пока не обрёл и поэтому очень хочу помочь в поисках своего предназначения всем, кому это сейчас важно. Я знаю как искать, как составить план и как решиться поменять кардинально свою профессиональную жизнь. Жду вас на курсе!
                    </Typography>
                </Section>
                <Section color="#d0d4a2">
                    <Title variant="h4" align="center">
                        Hello!
                    </Title>
                    <br/>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <ImgParagraph imgPosition="left">
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left">
                                у кого есть постоянное (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left">
                                у кого есть постоянное (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left">
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ImgFit src={ child } alt="child" />
                        </Grid>
                    </Grid>
                </Section>
                {/* Como funciona */}
                <Section color="#e3d49b" align="left">
                    <Title variant="h4" align="center">Kak eto pabotaet?</Title>
                    <br/>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <ImgParagraph imgPosition="right">
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                            <ImgParagraph imgPosition="right">
                                у кого есть постоянное (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <ImgParagraph imgPosition="right">
                                у кого есть постоянное (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                            <ImgParagraph title="Cosina" imgPosition="right">
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                        </Grid>
                    </Grid>
                </Section>
                {/* Detalles */}
                <Section color="#d0d4a2" align="center">
                    <Title variant="h4" align="center">
                        Детали программы
                    </Title>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={4}>
                            <ImgParagraph>
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <ImgParagraph>
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <ImgParagraph>
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                        </Grid>
                    </Grid>
                </Section>
                {/* Bocadillos */}
                <Section color="#e3d49b" align="left">
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <Sandwitch name="Maria">
                                Я очень благодарна курсу Анны за то, что я теперь четко понимаю то, что мне нужно искать, на чем фокусировать внимание, какие события притягивать. А ведь это 50% успеха. Причём 4 вектора моего развития стали понятны уже на втором занятии. А уже к последней встрече я точно понимала, какой из них самый сильный. Поразительно то, что в выбранном направлении я уверена на 100%. Почему? Потому что, благодаря этому курсу, я научилась слышать своё сердце, а его, как говориться, не обманешь. Аня, то, что ты даришь людям - бесценно! Спасибо!
                            </Sandwitch>
                            <Sandwitch>
                                
                            </Sandwitch>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Sandwitch>
                                
                            </Sandwitch>
                            <Sandwitch>
                                
                            </Sandwitch>
                        </Grid>
                    </Grid>
                </Section>
                {/* Foto grande a la izquierda */}
                <Section color="#d0d4a2" align="center">
                    <Title>
                        Ведущая курса 
                    </Title>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            {/* Image will be here */}
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Typography variant="body1">
                                Доставляет ли текущая работа вам удовольствие? Вы с радостью, бодро и легко просыпаетесь утром, полны энергии и новыми идеями, торопитесь на работу, чтобы поскорее взяться за дела, которые вчера неохотно оставили вечером? Вы испытываете состояние счастья на работе, сердце замирает в предвкушении новых задач, за спиной вырастают крылья в ощущении того, что вы со всем справитесь и что именно об этом мечтали? Если да, то я вас сердечно поздравляю — вы обрели своё призвание. Если пока нет, то приглашаю присоединиться к курсу на тему поиска своего призвания под названием "Мечтай и делай. Как найти своё призвание и начать получать удовольствие от работы".<br/>
                                Я нашла своё призвание и хорошо знаю, что чувствуют те, кто его пока не обрёл и поэтому очень хочу помочь в поисках своего предназначения всем, кому это сейчас важно. Я знаю как искать, как составить план и как решиться поменять кардинально свою профессиональную жизнь. Жду вас на курсе!
                            </Typography>
                        </Grid>
                    </Grid>
                </Section>
                <Section color="#e3d49b" align="left">
                    <Title variant="h4" align="center">
                        <Box paddingBottom="3rem">
                            Что вдохновило меня на создание курса?
                        </Box>
                    </Title>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <ImgParagraph title="Cosina" imgPosition="left">
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                            <ImgParagraph title="Cosina" imgPosition="left">
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                            <ImgParagraph title="Cosina" imgPosition="left">
                                у кого есть <b>постоянное</b> (или возвращающееся) ощущение, что он занимается не своим делом;
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            {/* Image will be here */}
                        </Grid>
                    </Grid>
                </Section>
                <Section color="#d0d4a2" align="center">
                    <Title variant="h4">
                        Варианты оплаты индивидуальных занятий:
                    </Title>
                    <Typography variant="body1" component="p">
                        <Box maxWidth="50%" margin="auto" marginBottom="3rem">
                            Бронирование времени осуществляется при предоплате первого занятия. При отмене/переносе встречи по желанию клиента менее чем за 24 часа до встречи предоплата не возвращается.
                        </Box>
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4}>
                            <CardButton buttonContent="Click me!">
                                <Title variant="h5">
                                    3000 рублей за занятие
                                </Title>
                                <Box textAlign="left">
                                    <Typography variant="body1">
                                        При оплате 1 занятия
                                    </Typography>
                                    <ul>
                                        <li>
                                            <Typography variant="body1">
                                                <strong>10 занятий</strong> по 1,5 часа (Skype)
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1">
                                                Проверка домашних заданий
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1">
                                                Занятия в вечерние или утренние часы в будние дни или в выходные
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1">
                                            Личная встреча (м. Таганская) +650 рублей к встрече
                                            </Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </CardButton>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CardButton buttonContent="Click me!">
                                <Title variant="h5">
                                    3000 рублей за занятие
                                </Title>
                                <Box textAlign="left">
                                    <Typography variant="body1">
                                        При оплате 1 занятия
                                    </Typography>
                                    <ul>
                                        <li>
                                            <Typography variant="body1">
                                                <strong>10 занятий</strong> по 1,5 часа (Skype)
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1">
                                                Проверка домашних заданий
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1">
                                                Занятия в вечерние или утренние часы в будние дни или в выходные
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1">
                                            Личная встреча (м. Таганская) +650 рублей к встрече
                                            </Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </CardButton>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CardButton buttonContent="Click me!">
                                <Title variant="h5">
                                    3000 рублей за занятие
                                </Title>
                                <Box textAlign="left">
                                    <Typography variant="body1">
                                        При оплате 1 занятия
                                    </Typography>
                                    <ul>
                                        <li>
                                            <Typography variant="body1">
                                                <strong>10 занятий</strong> по 1,5 часа (Skype)
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1">
                                                Проверка домашних заданий
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1">
                                                Занятия в вечерние или утренние часы в будние дни или в выходные
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1">
                                            Личная встреча (м. Таганская) +650 рублей к встрече
                                            </Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </CardButton>
                        </Grid>
                    </Grid>
                    

                </Section>
                <Footer content="Made with Love from Ronda" />
                    
      
            </ThemeProvider>
        )
    }
}


