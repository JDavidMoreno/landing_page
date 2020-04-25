import * as React from "react";
import LightCheckBox from "../components/LightCheckbox";
import LightInput from "../components/LightInput";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


export default class FormContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yourName: '',
            yourSurname: '',
            yourEmail: ''
        };
        this.mapping = {
            'your-name': 'yourName',
            'your-surname': 'yourSurname',
            'your-email': 'yourEmail'
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        fetch('https://www.granatovych.com/contact/#wpcf7-f248-p201-o1')
        .then((response) => {
            console.log("1 response", response);
            return response.json();
        })
        .then((myJson) => {
            console.log("2 response", myJson);
        });
    }

    handleInputChange = (event) => {
        const target = event.target;    
        this.setState({
          [this.mapping[target.name]]: target.value
        });
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
                {/* <div>
                    <Typography variant="body2">
                        Ваш Пакет:
                    </Typography>
                    <div>
                        <FormControlLabel className=".form_margin"
                            control={<LightCheckBox  name="gilad" />}
                            label="По бонусной ценне клуба Жизнь в Потоке - 22 € "
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={<LightCheckBox  name="jason" />}
                            label=" - 122 €"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={<LightCheckBox  name="antoine" />}
                            label="ПРЕМИУМ - 222 €"
                        />
                    </div>
                </div> */}
                <div>
                    <Button onClick={ this.submitForm } variant="contained" color="secondary" fullWidth>Записаться на курс</Button> 
                </div>
                <Typography variant="body2">
                    Нажимая на кнопку "Отправить заявку" вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.
                </Typography>
            </form>
        );   
    }
}