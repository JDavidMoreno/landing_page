import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let options = {
    typography: {
        body1: {
            fontSize: "1.1rem",
            fontWeight: 300,
        }
    }
}

let theme = createMuiTheme(options);
console.log(theme);
export default theme = responsiveFontSizes(theme);