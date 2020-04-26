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
import Emoji from "../components/Emoji";

import theme from "../styles/typo_theme";
import artImage from "../../static/1.png";
import art from "../../static/2.jpg";
import portrait from "../../static/portrait.jpg";
import last from "../../static/last.jpg";
import Instagram from '@material-ui/icons/Instagram';
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";


// VERY IMPORTANT. Remember to compile production with -- gatsby build --prefix-paths --


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImageHeight: '50rem',
        };
    }

    componentDidMount() {
        this.setState({ mainImageHeight: window.innerHeight })
    }

    render() {
        const styles = {
            lightBold: {
                fontWeight: 500
            }
        };
        return (
            <ThemeProvider theme={ theme }>
                <Image src={ artImage } height={ this.state.mainImageHeight } alt="art in the blue sky">
                    <Grid container spacing={4} >
                        <Grid item xs={12} style={{ marginTop: '5%' }}>
                            <Title variant="h5" align="center">
                                ВДОХНОВЛЯЮЩИЙ <br /> ОНЛАЙН-КУРС
                            </Title>
                            <Title variant="h2" align="center">
                                "ПОТОКОВОЕ РИСОВАНИЕ"
                            </Title>
                            {/* Make the subtitle appear not too much in the middle or below */}
                            <Box marginTop={this.state.mainImageHeight < 750 ? (this.state.mainImageHeight / 2.6).toString() + 'px' : (this.state.mainImageHeight / 2).toString() + 'px'}
                                marginLeft={'2rem'} >
                                <Title variant="h5" style={{marginTop: '20rem'}}>
                                    С СОПРОВОЖДЕНИЕМ ТИАНЫ ГРАНАТОВИЧ
                                </Title>
                                <Button href="#courses_prices" variant="contained" color="secondary">ЗАБРОНИРОВАТЬ МЕСТО</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Image>
                <Section color="rgb(210, 216, 247)" align="center" style={{paddingTop: '7rem', paddingBottom: '7rem'}}>
                    <Title variant="h5">
                        Любимые, приглашаю вас на курс «Потоковое Рисование», который раскроет всю безграничность вашего потенциала.
                        <br/>🔹
                        <br/>
                        Потоковое Рисование - это способ снять все ограничения, которые сдерживают нас на пути к Истинной Себе!
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
                    Благодаря курсу Вы:
                    </Title>
                    <br/>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <ImgParagraph imgPosition="left" src={Check}>
                                Научитесь входить в <b>Потоковое Состояние;</b>
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left" src={Check}>
                                Узнаете <b>Авторскую Технику</b> рисования на Воде;
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left" src={Check}>
                                Получите <b>Поддержку и Вдохновение</b> на протяжении всего курса;
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left" src={Check}>
                                Узнаете ваше <b>Тотемное Животное</b> и свой Индивидуальный <b>Символ</b>;
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left" src={Check}>
                                Узнаете, как Создать свой собственный <b>Уникальный Стиль</b> рисования;
                            </ImgParagraph>
                            <ImgParagraph imgPosition="left" src={Check}>
                                Создадите уникальные <b>Потоковые Картины</b>;
                            </ImgParagraph>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ImgFit src={ art } alt="child" />
                        </Grid>
                    </Grid>
                </Section>
                <Section color="#d2d8f7" align="left">
                    <Title variant="h4" align="center">Для кого этот курс?</Title>
                    <br/>
                    <br/>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <ImgParagraph title="Вы творческий человек 👩🏻‍🎨" imgPosition="right">
                                Вы увлекаетесь рисованием уже не первый год 
                                и хотите еще больше раскрыть себя через творчество.  <br/>
                                <span style={styles.lightBold}>На курсе вы узнаете новые техники и определить свой собственный неповторимый стиль.</span> 
                            </ImgParagraph>
                            <ImgParagraph title="Вы не умеете рисовать 🙅🏻‍♀️" imgPosition="right" style={{marginTop: '4rem'}}>
                                Вы испытываете сильное желание прикостуться к миру творчества, но боитесь начать рисовать, так как думаете, что ничего не получится и разочаруетесь в себе.<br/>
                                <span style={styles.lightBold}>На курсе техника Потокового Рисования вас удивит своей доступностью и легкостью.</span> 
                                <br/><br/><br/>
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <ImgParagraph title="Вы чувствуете, видите, слышите чуть больше, чем остальные ⭐" imgPosition="right">
                                Поздавляю! Вы особенный человек.<br /> Ваши способности очень ценны и важны миру.<br/>
                                <span style={styles.lightBold}>На курсе вы сможете еще больше их раскрыть и научиться управлять ими.</span>  
                            </ImgParagraph>
                            <ImgParagraph title=" Вы хотите усилить вашу интуицию 🌙" imgPosition="right"  style={{marginTop: '4rem'}}>
                                Сейчас у вас этап в жизни, когда необходимо прийти к внутреннему балансу и раскрыть свою чувственность.
                                <br /><span style={styles.lightBold}>Курс вас вдохновит и наполнит радостю и волшебством каждого мгновения.</span>
                            </ImgParagraph>
                        </Grid>
                    </Grid>
                </Section>
                {/* Detalles */}
                <Section color="#f6ffde" align="center">
                    <Title variant="h4" align="center">
                        Детали программы курса
                    </Title>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={4}>
                            <ArrowDownward />
                            <ImgParagraph>
                                <b>САКРАЛЬНАЯ ГЕОМЕТРИЯ И МАНДАЛЫ ОБЕРЕГИ </b><br/> <br/> 
                                Мы познакомимся с Сакральной Геометрией и Создадим Мандлы - Обереги для Себя и на свои Мечты.
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <ArrowDownward />
                            <ImgParagraph>
                                <b>ЛИЧНЫЙ СИМВОЛ</b> <br/><br/> 
                                Один из уроков мы будем посвящать определению своего Личного символа, 
                                который еще больше раскроит вашу уникальность и вашу суть. <br/>
                                <br/>
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <ArrowDownward />
                            <ImgParagraph>
                                <b> РИСОВАНИЕ НА ВОДЕ </b> <br/> <br/> 
                                Вы познакомитесь с уникальной техникой, которая поможет мягко войти в 
                                Состояние Потока и создать неповторимые Картины создавая узоры на Воде.
                            </ImgParagraph>
                        </Grid>
                    </Grid>
                </Section>
                {/* Bocadillos */}
                <Section color="#d2d8f7" align="left">
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <Sandwitch name="Елена">
                                Тианочка, дорогая <Emoji label="heart" symbol="❤️"/> благодарю тебя от всего сердца за этот прекрасный курс! <Emoji label="thanks" symbol="🙏" /> Это было что-то невероятное. Я для себя открыла много нового и открыла в себе тайные уголки. Ты ещё больше мне привила любовь к медитациям. С тобой я стала в них входит больше через сердце, чем через голову. Я научилась отпускать себя и доверяться пространству. Каждая практика - это колоссальная энергия и блаженство. Благодаря тебе я ещё больше обрела уверенность в том, что я на правильном пути!!! Это просто бесценные 22 ритуала, которые для меня стали волшебными! <Emoji label="heart and star" symbol="❤️✨"/> Знаю, что ещё не раз к ним вернусь, так как уже чувствую огромное желание их повторить!!! Благодарю тебя <Emoji label="thanks" symbol="🙏"/>, что делиться своими знаниями!!! Ты удивительной энергетики человечек ❤️ Очень рада нашему знакомству!!! Обнимаю <Emoji label="happy" symbol="🤗❤️" /> Искренне желаю, чтоб твоя мечта о ретрит центре воплотилась в жизнь!!! <Emoji label="heart" symbol="❤️" />
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
                                Тианочка, дорогая!  Спасибо тебе большое за твою Арт-практику. Это был невероятный праздник для души! Такая гармония и радость от общения со своей душой, от общения с какими-то сильными энергиями! Я бы продолжала и продолжала творить! Получилось что-то странное, витиеватое.  Но на душе очень хорошо было в этом процессе!! Я сердечно благодарю тебя за твою энергию и внимание! Спасибо, что делишься своим теплом и знаниями <Emoji label="hearts and flowers" symbol="💕🌸❤️✨"/> прям от сердца к сердцу!
                            </Sandwitch>
                            <Sandwitch name="Виктория">
                                Тиана, большое спасибо тебе за курс! Мне понравились все уроки! Трудно выделить что то одно, потому что каждое упражнение было особенным, очень позитивным, и конечно ресурсным! И все же, выделю одно от чего у меня осталось глубокое впечатление, это родовая медитация. Невероятно глубокая, приятная, заряжающая, до мурашек. Для меня это важная, актуальная тема. Хочу сказать также о структуре курса. Колесо энергий оказалось очень практичный инструментом, помогает осознанно подходить к упражнениям, всегда знаешь где ты и над чем работаешь. Понравилось разнообразие техник и медитаций, а также краткость, без воды, с уважением к чужому времени. Курс очень практичный, один из немногих к которому хочется не раз возвращаться. Его формат очень подходит для внедрения упражнений и медитаций в привычку. Он как мягкие энергетические поглаживания, очень наполняющий и ресурсный. Я так привыкла к твоим ежедневным видео, что теперь буду скучать :). Но благо курс остаётся в моем распоряжении, в виде удобного плейлист, который я буду обязательно пересматривать. Спасибо тебе от всей души! Всех благ, еще больше энергии  радости и реализации твоих классных проектов! <Emoji label="hearts" symbol="❤️ ❤️ ❤️"/>
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
                            <ImgFit src={ portrait } alt="Tiana portrait" contain={ true } style={{maxHeight: '50rem'}} />
                        </Grid>
                        <Grid item sm={12} md={6} >
                            <Typography variant="h5">
                                Тиана Гранатович
                            </Typography>
                            <Typography variant="body1">
                                Художник - Вдохновитель.<br/><br/>
                                Создатель множества энергетических картин, которые находятся в личных коллекциях по всему Миру.<br/><br/>
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
                            Какие вас ждут трансформации после курса:
                        </Box>
                    </Title>
                    <Grid container spacing={4}>
                        <Grid item sm={12} md={6}>
                            <ImgParagraph title="   " imgPosition="left">
                                <Emoji label="rainbow" symbol="🌈"/> Вы полностью <b>оновите свою жизненную энергию</b> и восполните энергии тех цветов и вибраций, которых вам не хватало;<br/>
                            </ImgParagraph>
                            <ImgParagraph title="" imgPosition="left">
                                <Emoji label="diamon" symbol="💎"/> Вы научитесь обращаться за ответами к <b>своему подсознанию</b> через рисунок и cущественно повысите качество вашей Жизни;
                            </ImgParagraph>
                            <ImgParagraph title="" imgPosition="left">
                                <Emoji label="paint" symbol="🎨"/> Ваше творчество усилится потоковым состоянием и вы получите настоящее <b>удовольствие от процесса</b> создания ваших энергитических картины;
                            </ImgParagraph>
                            <ImgParagraph title="" imgPosition="left">
                                <Emoji label="star" symbol="✨"/> Примите уникальные настройки, которые <b>активируют ваши таланты</b> и раскроют <b>сенсорное видение</b>;
                            </ImgParagraph>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <ImgFit src={ last } alt="child"/>
                        </Grid>
                    </Grid>
                </Section>
                <div id="courses_prices" />
                <Section color="#f6ffde" align="center">
                    <Title variant="h4">
                        ВЫБЕРИТЕ СВОЙ ПАКЕТ УЧАСТИЯ
                    </Title>
                    <Box maxWidth="50%" margin="auto" marginBottom="3rem">
                        <Typography variant="body1" component="p">
                            
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4}>
                            <CardButton buttonContent="оплатить" href="https://secure.wayforpay.com/payment/art_promo">
                                <Title variant="h4">
                                    PROMO 
                                </Title>
                                <Typography variant="span" style={{fontSize: '2.5rem'}}>
                                    22 €
                                </Typography>
                                <Box textAlign="left">
                                    <ul>
                                        <li>
                                            <Typography variant="body1" component="span">
                                                <strong> 10 видео-уроков; </strong> 
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Сопровождение и поддержка от Тианы Гранатович;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Общение в Чате закрытой группы участников курса;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Обратная связь по домашним заданиям.
                                            </Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </CardButton>
                            </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CardButton buttonContent="оплатить" href="https://secure.wayforpay.com/payment/art_standart">
                                <Title variant="h4">
                                    STANDART
                                </Title>
                                <Typography variant="span" style={{fontSize: '2.5rem'}}>
                                    122 €
                                </Typography>
                                <Box textAlign="left">
                                    <ul>
                                        <li>
                                            <Typography variant="body1" component="span">
                                                <strong>10 видео-уроков; </strong> 
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                             Сопровождение и поддержка от Тианы Гранатович;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                             Общение в Чате закрытой группы участников курса;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Обратная связь по домашним заданиям;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                             1 личная онлайн встреча на ваш личный запрос по курсу;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Посвящение на Внутреннего Мастера.
                                            </Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </CardButton>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CardButton buttonContent="оплатить" href="https://secure.wayforpay.com/payment/art_premium">
                                <Title variant="h4">
                                    PREMIUM 
                                </Title>
                                <Typography variant="span" style={{fontSize: '2.5rem'}}>
                                    222 €
                                </Typography>
                                <Box textAlign="left">
                                    <ul>
                                        <li>
                                            <Typography variant="body1" component="span">
                                                <strong>10 видео-уроков;</strong> 
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Сопровождение и поддержка от Тианы Гранатович;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Общение в Чате закрытой группы участников курса;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Обратная связь по домашним заданиям;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            2 личных онлайн встречи на ваш личный запрос по курсу;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Посвящение и Передача Настройки в Мастера;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Авторская колода Метафорических Карт;
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body1" component="span">
                                            Полный Курс "Зикры" - энергитические упражнения, которые раскрывают Поток на каждую чакры.
                                            </Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </CardButton>
                        </Grid>
                    </Grid>
                </Section>
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
                <Section color="#f6ffde" align="center">
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
            </ThemeProvider>
        )
    }
}
