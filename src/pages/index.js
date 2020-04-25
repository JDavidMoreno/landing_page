import React from "react";

import Link from '@material-ui/core/Link';
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
import Parallax from "../components/Parallax";
import FormContact from "../containers/FormContact";


import theme from "../styles/typo_theme";
import artImage from "../../static/1.png";
import child from "../../static/1.png";
import art from "../../static/2.jpg";
import yo from "../../static/y1.jpg";
import Instagram from '@material-ui/icons/Instagram';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImageHeight: 0,
        };
    }

    componentDidMount() {
        this.setState({ mainImageHeight: window.innerHeight })
    }

    render() {
        return (
            <ThemeProvider theme={ theme }>
                <Image src={ artImage } height={ this.state.mainImageHeight } alt="art in the blue sky">
                    <Grid container spacing={4} >
                        <Grid item xs={12} style={{ marginTop: '5%' }}>
                            <Title variant="h5" align="center">
                                ВДОХНОВЛЯЮЩИЙ <br /> ОНЛАЙН КУРС
                            </Title>
                            <Title variant="h2" align="center">
                                ПОТОКОВОЕ РИСОВАНИЕ
                            </Title>
                            {/* Make the subtitle appear not too much in the middle or below */}
                            <Box marginTop={this.state.mainImageHeight < 960 ? (this.state.mainImageHeight / 2.5).toString() + 'px' : (this.state.mainImageHeight / 2).toString() + 'px'} >
                                <Title variant="h5" style={{marginTop: '20rem'}}>
                                    С СОПРОВОЖДЕНИЕМ ТИАНЫ ГРАНАТОВИЧ
                                </Title>
                                <Button href="#courses_prices" variant="contained" color="secondary">ЗАБРОНИРОВАТЬ МЕСТО</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Image>
                <Section color="rgb(210, 216, 247)" align="center">
                    <Title variant="h5">
                    Любимые, приглашаю вас на курс «Потоковое Рисование», который раскроет всю безграничность вашего потенциала.
<br/>🎨
                        <br/>
                        Потоковое Рисование - это способ снять все ограничения, которые сдерживают нас на пути к Истинной Себе!
                        <br/>🎨
                        <br/>
Потоковое рисование наполняет нас состоянием Доверия и внутренней Гармонии.
                    </Title>
                    <Divider variant="middle"/>
                    <Typography variant="body1">
                    Это авторский курс, которому нет аналогов.
                    <br/>
                    Я буду щедро делиться с вами всем опытом и знаниями,
                     которые я преобрела на продяжении 20-ти лет Моего Творческого Пути.
                    </Typography>
                </Section>
                <Section color="#f6ffde">
                    <Title variant="h4" align="center">
                    Благодаря курсу Вы :
                    </Title>
                    <br/>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <ImgParagraph imgPosition="left">
                                
                            Научитесь входить в <b>Потоковое Состояние</b>

                            </ImgParagraph>
                            <ImgParagraph imgPosition="left">
                            Узнаете <b>Авторскую Технику </b> рисования на Воде
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left">
                                Получите <b>Поддержку и Вдохновение</b> на протяжении всего курса
                                </ImgParagraph>
                                <ImgParagraph imgPosition="left">
                                знаете ваше <b>Тотемное Животное</b> и свой Индивидуальный <b>Символ</b>
                                </ImgParagraph>
                            <ImgParagraph imgPosition="left">
                                Узнаете как Создать свой собственный <b>Уникальный Стиль</b> рисования
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left">
                            Создадите уникальные <b>Потоковые Картины</b> 
                            </ImgParagraph>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ImgFit src={ art } alt="child" />
                        </Grid>
                    </Grid>
                </Section>
                {/* Como funciona */}
                <Section color="#d2d8f7" align="left">
                    <Title variant="h4" align="center">Для кого этот курс?</Title>
                    <br/>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <ImgParagraph title="👩‍🎨" imgPosition="right">
                                <b>Вы творческий человек</b> увлекаетесь рисованием, тогда вы узнаете, как с помощью рисунка 
                                эффективно обращаться за ответами к своему подсознанию. 
                                Ваше творчество усилится потоковым состоянием, пониманием тех процессов, которые происходят с вами во время исцеляющего рисования.
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                            <ImgParagraph title="." imgPosition="right">
                            <b>Никогда не рисовали?</b> Тогда вас удивит доступность метода нетрадиционной арт-терапии.
                             Вы получите настоящее удовольствие от процесса. Создадите картины, исцеляющие вас полностью.
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <ImgParagraph title="⭐" imgPosition="right">
                            <b>Вы что-то чувствуете, иногда знаете, видите или слышите чуть больше, чем остальные.</b>  
                            Этот курс вам поможет осознать что, вы особенный человек. Вашим способностям цены нет! Осталось только научиться управлять ими.
                            </ImgParagraph>
                            <ImgParagraph title="." imgPosition="right">
                            <b>Вы хотите усилить вашу интуицию</b>  прийти к балансу логики и чувств.
                            </ImgParagraph>
                        </Grid>
                    </Grid>
                </Section>
                {/* Detalles */}
                <Section color="#f6ffde" align="center">
                    <Title variant="h4" align="center">
                        Детали программы курса «Потоковое Рисование»
                    </Title>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={4}>
                            <ImgParagraph>
                            <b>ТОТЕМ </b> <br/> Один из уроков мы будем посвящать определению своего <br/>  Тотемного Животного 
                            <br/><br/>
Тотем – является проявлением нашей внутренней сути, внутренних сил.<br/><br/>


Посредством тотема человек познает самого себя, понимает почему он является таким, какой есть.<br/><br/>

Проявление внутренней сути связано с неким мета образом, на который мы накладываем образ животного.<br/><br/>

Тотемов у человека может быть несколько. Так как тотемы отображают черты характера человека и многогранность его сути.<br/>
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <ImgParagraph>
                             <b>САКРАЛЬНАЯ ГЕОМЕТРИЯ И МАНДАЛЫ ОБЕРЕГИ </b> <br/> 
                             Сакральная Геометрия занята тем, как раскрыть сердце и развить сознание через геометрические модели.
Эти модели, как в зеркале, отражают ваше собственное сознание.

Основная роль Сакральной Геометрии — сотворение Света/Сознания.
Когда вы увидите, как геометрические формы плавно перетекают друг в друга, вы поймете и то, как они выходят за пределы и двигаются по направлению к структуре более высокого уровня развития.
Когда вы поймете это, вы сможете соотнести Сакральную Геометрию с сердцем. И спираль — самый важный ключ.
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <ImgParagraph>
                            <b> РИСОВАНИЕ НА ВОДЕ </b> <br/> 
                                у кого есть другое дело (или несколько), которое ему интересно, но он не уверен, что это его призвание и этим вообще стоит заниматься;
                            </ImgParagraph>
                        </Grid>
                    </Grid>
                </Section>
                {/* Bocadillos */}
                <Section color="#d2d8f7" align="left">
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <Sandwitch name="Елена">
                                Тианочка, дорогая ♥️ благодарю тебя от всего сердца за этот прекрасный курс! 🙏 Это было что-то невероятное. Я для себя открыла много нового и открыла в себе тайные уголки. Ты ещё больше мне привила любовь к медитациям. С тобой я стала в них входит больше через сердце, чем через голову. Я научилась отпускать себя и доверяться пространству. Каждая практика - это колоссальная энергия и блаженство. Благодаря тебе я ещё больше обрела уверенность в том, что я на правильном пути!!! Это просто бесценные 22 ритуала, которые для меня стали волшебными! ♥️✨ Знаю, что ещё не раз к ним вернусь, так как уже чувствую огромное желание их повторить!!! Благодарю тебя 🙏, что делиться своими знаниями!!! Ты удивительной энергетики человечек ♥️ Очень рада нашему знакомству!!! Обнимаю 🤗♥️ Искренне желаю, чтоб твоя мечта о ретрит центре воплотилась в жизнь!!! ♥️
                            </Sandwitch>
                            <Sandwitch name="Екатерина">
                            Поделюсь с тобой моей первой в жизни картиной. Невероятно счастлива ее созданию, до мурашек.
На самом деле, в начале я очень нервничала, не знала с чего начать, ничего не приходило в голову. 
И вдруг мне пришло, как я рисовала и выстригала валентинки для моих близких, когда была совсем маленькой.
Дальше руки сами стали рисовать. Эти три дня ни о чем другом кроме картины и думать не могла. Постоянно представляла как держу в руках кисть. Волшебное состояние.
В этой картине встречаются мое детство, мое настоящее и мое будущее. 
Назвала "Внутренняя гармония".
                            </Sandwitch>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Sandwitch name="Джуди">
                            Тианочка, дорогая!  Спасибо тебе большое за твою Арт-практику. Это был невероятный праздник для души! Такая гармония и радость от общения со своей душой, от общения с какими-то сильными энергиями! Я бы продолжала и продолжала творить! Получилось что-то странное, витиеватое.  Но на душе очень хорошо было в этом процессе!! Я сердечно благодарю тебя за твою энергию и внимание! Спасибо, что делишься своим теплом и знаниями 💕🌸❤️✨ прям от сердца к сердцу!
                            </Sandwitch>
                            <Sandwitch name="Виктория">
                             Тиана, большое спасибо тебе за курс! Мне понравились все уроки! Трудно выделить что то одно, потому что каждое упражнение было особенным, очень позитивным, и конечно ресурсным! И все же, выделю одно от чего у меня осталось глубокое впечатление, это родовая медитация. Невероятно глубокая, приятная, заряжающая, до мурашек. Для меня это важная, актуальная тема. Хочу сказать также о структуре курса. Колесо энергий оказалось очень практичный инструментом, помогает осознанно подходить к упражнениям, всегда знаешь где ты и над чем работаешь. Понравилось разнообразие техник и медитаций, а также краткость, без воды, с уважением к чужому времени. Курс очень практичный, один из немногих к которому хочется не раз возвращаться. Его формат очень подходит для внедрения упражнений и медитаций в привычку. Он как мягкие энергетические поглаживания, очень наполняющий и ресурсный. Я так привыкла к твоим ежедневным видео, что теперь буду скучать :). Но благо курс остаётся в моем распоряжении, в виде удобного плейлист, который я буду обязательно пересматривать. Спасибо тебе от всей души! Всех благ, еще больше энергии  радости и реализации твоих классных проектов! ❤️ ❤️ ❤️
                            </Sandwitch>
                        </Grid>
                    </Grid>
                </Section>
                {/* Foto grande a la izquierda */}
                <Section color="#f6ffde" align="center">
                    <Title>
                        Ведущая курса 
                    </Title>
                    <Grid container spacing={4} style={{textAlign: 'left'}}>
                        <Grid item sm={12} md={6}>
                            <ImgFit src={ yo } alt="y" contain={ true}/>
                        </Grid>
                        <Grid item sm={12} md={6} >
                            <Typography variant="h5">Тиана Гранатович</Typography>
                            <Typography variant="body1">
Художник-Вдохновитель.<br/><br/>
Создатель энергетических картин работает в Потоком состоянии.<br/>
Арт-терапевт, Целитель, Наставник, Мастер Энергетических практик.<br/><br/>

Спикер на Международных фестивалях.<br/>
Создатель Авторских Колод Метафорических карт и трансформационных игр.<br/><br/>

Автор онлайн программ, ведущая Ретритов в Испании.<br/>


                            </Typography>
                        </Grid>
                    </Grid>
                </Section>
                <Section color="#d2d8f7" align="left">
                    <Title variant="h4" align="center">
                        <Box paddingBottom="3rem">
                            Что вдохновило меня на создание курса?
                        </Box>
                    </Title>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <ImgParagraph title=" 🌈  " imgPosition="left">
                                  Вы полностью <b> оновите свою жизненную энергию</b> и восполните энергии тех цветов и вибраций, которых вам не хватает. <br/>
                                  И существенно повлияет на качество вашей Жизни.
                            </ImgParagraph>
                            <ImgParagraph title="🌺" imgPosition="left">
                            Примите уникальные настройки, которые <b>активируют ваши таланты, </b>
                            благодаря чему раскроете свое <b>сенсорное видение</b> 
                               
                            </ImgParagraph>
                            <ImgParagraph title="🌸" imgPosition="left">
                            Раскроете <b>сенсорное видение</b> 
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <ImgFit src={ child } alt="child"/>
                        </Grid>
                    </Grid>
                </Section>
                <div id="courses_prices" />
                <Section color="#f6ffde" align="center">
                    <Title variant="h4">
                        Варианты оплаты индивидуальных занятий:
                    </Title>
                    <Box maxWidth="50%" margin="auto" marginBottom="3rem">
                        <Typography variant="body1" component="p">
                            Бронирование времени осуществляется при предоплате первого занятия. При отмене/переносе встречи по желанию клиента менее чем за 24 часа до встречи предоплата не возвращается.
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4}>
                            <CardButton buttonContent="оплатить" href="https://secure.wayforpay.com/payment/art_promo">
                                <Title variant="h4">
                                    ПРЕМИУМ
                                </Title>
                                <Typography variant="span" style={{fontSize: '2.5rem'}}>
                                    222 €
                                </Typography>
                                <Box textAlign="left">
                                    <ul>
                                        <li>
                                            <Typography variant="body1" component="span">
                                                <strong>10 занятий</strong> 
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                                Сопровождение Тианы Гранатович
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                                Чат поддержки и вдохновения
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            .
                                            </Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </CardButton>
                            </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CardButton buttonContent="оплатить" href="https://secure.wayforpay.com/payment/art_standart">
                                <Title variant="h4">
                                    ПРЕМИУМ
                                </Title>
                                <Typography variant="span" style={{fontSize: '2.5rem'}}>
                                    222 €
                                </Typography>
                                <Box textAlign="left">
                                    <ul>
                                        <li>
                                            <Typography variant="body1" component="span">
                                                <strong>10 занятий</strong> 
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Сопровождение Тианы Гранатович
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Чат поддержки и вдохновения
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            2 личных онлайн встречи-консультации
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Передача Настройки в Мастера
                                            </Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </CardButton>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CardButton buttonContent="оплатить" href="https://secure.wayforpay.com/payment/art_premium">
                                <Title variant="h4">
                                    ПРЕМИУМ
                                </Title>
                                <Typography variant="span" style={{fontSize: '2.5rem'}}>
                                    222 €
                                </Typography>
                                <Box textAlign="left">
                                    <ul>
                                        <li>
                                            <Typography variant="body1" component="span">
                                                <strong>10 занятий</strong> 
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Сопровождение Тианы Гранатович
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Чат поддержки и вдохновения
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            2 личных онлайн встречи-консультации
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Передача Настройки в Мастера
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Полный личный доступ по всем вопросам
                                            </Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </CardButton>
                        </Grid>
                    </Grid>
                </Section>
                <Parallax src={ child } filter="rgba(97, 84, 79, 0.79)">
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
                <Section color="#f6ffde" align="center">
                    <Title variant="h4" align="center">
                        <Box paddingBottom="4rem">
                        Остались вопросы?<br />
                        ..<br />
                        Телеграм<br />
                        + 34 7222 57 200<br />
                        ..<br />
                        </Box>
                    </Title>
                    <Typography variant="body1">
                    Присоединяйтесь <br />
                    <Link href="https://www.instagram.com/granatovych_art" target="new" color="secondary" className="general_link">
                        <Instagram style={{fontSize: '2rem'}}/><br />
                    </Link>
                     @granatovych_art
                    </Typography>
                </Section>
                <Footer content="Made with &#128156; from Ronda" />
            </ThemeProvider>
        )
    }
}
