import * as React from "react";
import LightCheckBox from "../components/LightCheckbox";
import LightInput from "../components/LightInput";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fade from '@material-ui/core/Fade';
import Alert from '@material-ui/lab/Alert';


export default class FormContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yourName: '',
            yourSurname: '',
            yourEmail: '',
            choice: '',
            response: '',
            severity: ''
        };
        this.mapping = {
            'your-name': 'yourName',
            'your-surname': 'yourSurname',
            'your-email': 'yourEmail'
        }
    }

    styles = {
        formFeedBack: {
            marginTop: '1rem',
            height: '1.5rem',
            paddingTop: 0,
            paddingBottom: '0.6rem',
            opacity: '0.8'
        }
    }

    isValid() {
        let valid = true;
        if (!this.state.yourName) {
            valid = false;
            this.giveFeedback("Пожалуйста, введите свое Имя", 'warning');
        } else if (!this.state.yourSurname) {
            valid = false;
            this.giveFeedback("Пожалуйста, введите свою Фамилию", 'warning');
        } else if (!this.state.yourEmail) {
            valid = false;
            this.giveFeedback("Пожалуйста, введите свой Email", 'warning');
        }
        return valid;
    }

    submitForm = (event) => {
        event.preventDefault();
        if (this.isValid()) {
            let formData = new FormData(document.getElementById('mainContactForm'));
            formData.append("your-subject", "Mensage del formulario en In Art page");
            formData.append("your-message", this.state.choice ? "Tipo de curso solicitado: " + this.state.choice : "No ha especificado ningún tipo curso en el formulatio");
            fetch('https://www.granatovych.com/wp-json/contact-form-7/v1/contact-forms/248/feedback', {
                method: "POST",
                body: formData
            })
            .then((response) => {
                console.log("Response!: ", response);
                if (response && response.ok === true) {
                    this.giveFeedback("Поздравляю, Ваше письмо отправленно успешно!", 'success')
                } else {
                    this.giveFeedback("Упс, что-то пошло не так...", 'warning');
                }
            });    
        }
    }

    giveFeedback(response, severity) {
        this.setState({response: response, severity: severity});
        setTimeout(() => {
            this.setState({response: '', severity: ''});
        }, 3000)
    }

    handleInputChange = (event) => {
        const target = event.target;    
        this.setState({
          [this.mapping[target.name]]: target.value
        });
    }

    handleCheckBoxChange = (event) => {
        if (event.target.name == this.state.choice) {
            this.setState({choice: ''});
        } else {
            this.setState({choice: event.target.name});
        }
    }

    render() {
        return (
            <form id="mainContactForm" noValidate="novalidate" autoComplete="off">
                <div style={{display: 'none'}}>
                    <input type="hidden" name="_wpcf7" value="248"/>
                    <input type="hidden" name="_wpcf7_version" value="5.0.1"/>
                    <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f248-p201-o1"/>
                    <input type="hidden" name="_wpcf7_container_post" value="201"/>
                </div>
                <div>
                    <LightInput name="your-name" value={this.state.yourName} onChange={ this.handleInputChange } label="Имя" variant="filled" margin="normal" fullWidth color="secondary"/>
                </div>
                <div>
                    <LightInput name="your-surname" value={this.state.yourSurname} onChange={ this.handleInputChange } label="Фамилия" variant="filled" margin="normal" fullWidth color="secondary"/>
                </div>
                <div>
                    <LightInput name="your-email" value={this.state.yourEmail} onChange={ this.handleInputChange } label="E-mail" variant="filled" margin="normal" fullWidth  color="secondary"/>
                </div>
                <div>
                    <Typography variant="body2">
                        Ваш Пакет:
                    </Typography>
                    <div>
                        <FormControlLabel className=".form_margin"
                            control={<LightCheckBox  name="promo" onChange={ this.handleCheckBoxChange } checked={ this.state.choice == 'promo'}/>}
                            label="Promo"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={<LightCheckBox  name="standard" onChange={ this.handleCheckBoxChange }  checked={ this.state.choice == 'standard'}/>}
                            label="Standard"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={<LightCheckBox  name="premium" onChange={ this.handleCheckBoxChange }  checked={ this.state.choice == 'premium'}/>}
                            label="Premium"
                        />
                    </div>
                </div>
                <div>
                    <Button onClick={ this.submitForm } variant="contained" color="secondary" fullWidth>Записаться на курс</Button>
                    <Fade in={ this.state.response }>
                        <Alert variant="filled" severity={this.state.severity} style={ this.styles.formFeedBack } >
                            {this.state.response}
                        </Alert>
                    </Fade>
                </div>
                <Typography variant="body2">
                    Нажимая на кнопку "Отправить заявку" вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.
                </Typography>
            </form>
        );   
    }
}