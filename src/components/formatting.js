import React from "react";
import PropTypes from 'prop-types';


import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import theme from "../styles/typo_theme";
import styles from "./formatting.module.css";
import icon from "../../static/checked.svg"



export function Title(props) {
    return (
        <ThemeProvider theme={ theme }>
            <Typography variant={ props.variant || "h3" } gutterBottom={true} className={ styles.title } align={ props.align === 'center' ? 'center' : 'inherit' } >
                { props.children }
                
            </Typography>
            <br />
        </ThemeProvider>
    );
}

Title.propTypes = {
    variant: PropTypes.string,
    align: PropTypes.string,
}

export function ImgParagraph(props) {

    let title = props.title ? <Typography variant="h5" gutterBottom={true} style={{fontWeight: 600}}>{ props.title }</Typography> : "";
    if (!props.imgPosition || props.imgPosition === 'top') {
        return (
            <ThemeProvider theme={ theme }>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        { title }
                        <img src={ props.src || icon } alt={ props.alt || "icon" } style={{maxHeight: 30, maxWidth: 30, marginBottom: "1rem"}} />
                        <Typography variant="body1" gutterBottom={true} className={ styles.format_image_p }>
                            { props.children } 
                        </Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    } else {
        let left = props.imgPosition === 'left' ?  <img src={ props.src || icon  } alt={ props.alt } style={{maxHeight: 30, maxWidth: 30, marginBottom: "1rem"}} /> : <div>{ title }<Typography variant="body1" gutterBottom={true} className={ styles.format_image_p }>{ props.children }</Typography></div>;
        let right = props.imgPosition === 'right' ?  <img src={ props.src || icon  } alt={ props.alt } style={{maxHeight: 30, maxWidth: 30, marginBottom: "1rem"}} /> : <div>{ title }<Typography variant="body1" gutterBottom={true} className={ styles.format_image_p }>{ props.children }</Typography></div>;
        return (
            <ThemeProvider theme={ theme }>
                <Grid container spacing={3}>
                    <Grid item xs={props.imgPosition === 'left' ? 2 : 10}>
                        { left }
                    </Grid>
                    <Grid item xs={props.imgPosition === 'right' ? 2 : 10}>
                        { right }
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    }
}

ImgParagraph.propTypes = {
    imgPosition: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
}

export function ImgFit(props) {
    let style;
    if (props.contain === true) {
        style = {
            width: '100%',
            objectFit: 'contain',
        }
    } else {
        style = {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }
    }

    return (
        <img src={ props.src || '' } alt={ props.alt || '' } style={ style }/>
    )
}