import React from "react";
import { Link } from "gatsby";

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "../components/layout";
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
                <Layout>
                    
                </Layout>           
            </ThemeProvider>
        )
    }
}


