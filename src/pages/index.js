import React from "react";
import { Link } from "gatsby";

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { ThemeProvider } from "@material-ui/core/styles";

import Footer from "../components/footer";
import Layout from "../components/layout";
import Section from "../components/section";
import Image from "../components/image";
import theme from "../styles/typo_theme";
import flyingImage from "../../static/flying.jpg";


export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={ theme }>
                <Image src={ flyingImage }>
                    <Grid container spacing={3} style={{paddingLeft: "2rem"}}>
                        <Grid item xs={12} style={{ marginTop: '25%' }}>
                            <Typography variant="h2" gutterBottom={true}>КАК НАЙТИ СВОЕ ПРЕДНАЗНАЧЕНИЕ</Typography>
                            <br />
                            <Typography variant="h5" gutterBottom={true}>КАК НАЙТИ СВОЕ<br /> ПРЕДНАЗНАЧЕНИЕ</Typography>
                            <br />
                            <Typography variant="h5" gutterBottom={true}>КАК НАЙТИ СВОЕ ПРЕДНАЗНАЧЕНИЕ</Typography>
                            <br />
                            <Button variant="contained" color="primary">My Button</Button>
                        </Grid>
                    </Grid>
                </Image>
                <Section color="#e3d49b">
                    <strong>
                        <Typography variant="h4">
                            Вы в поисках своего призвания, предназначения?<br/>
                            Давно об этом думаете или только начали?<br/>
                            Уже что-то читали и делали, или пока присматриваетесь к теме?<br/>
                            Добро пожаловать на авторский онлайн курс!
                        </Typography>
                    </strong>
                    <br />
                    <Typography variant="body1">
                        Доставляет ли текущая работа вам удовольствие? Вы с радостью, бодро и легко просыпаетесь утром, полны энергии и новыми идеями, торопитесь на работу, чтобы поскорее взяться за дела, которые вчера неохотно оставили вечером? Вы испытываете состояние счастья на работе, сердце замирает в предвкушении новых задач, за спиной вырастают крылья в ощущении того, что вы со всем справитесь и что именно об этом мечтали? Если да, то я вас сердечно поздравляю — вы обрели своё призвание. Если пока нет, то приглашаю присоединиться к курсу на тему поиска своего призвания под названием "Мечтай и делай. Как найти своё призвание и начать получать удовольствие от работы".<br/>
                        Я нашла своё призвание и хорошо знаю, что чувствуют те, кто его пока не обрёл и поэтому очень хочу помочь в поисках своего предназначения всем, кому это сейчас важно. Я знаю как искать, как составить план и как решиться поменять кардинально свою профессиональную жизнь. Жду вас на курсе!
                    </Typography>
                </Section>
                <Footer content="Made with Love from Ronda" />
                    
      
            </ThemeProvider>
        )
    }
}


