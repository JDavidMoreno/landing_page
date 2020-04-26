import React from "react";
import PropTypes from 'prop-types';

import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";

import styles from "./formatting.module.css";



export function Title(props) {
    return (
        <Box marginBottom={'1.7rem'}>
            <Typography variant={ props.variant || "h3" } gutterBottom={true} className={ styles.title } align={ props.align === 'center' ? 'center' : 'inherit' } >
                { props.children }
            </Typography>
        </Box>
    );
}

Title.propTypes = {
    variant: PropTypes.string,
    align: PropTypes.string,
}

export function ImgParagraph(props) {
    // When no title, the icon needs to be a litle bit lower
    const styles = {
        icon: {
            fontSize: '2rem',
            marginTop: !props.title ? '0.8rem' : 0
        }
    };
    const Icon = props.src ? props.src : Box;
    const title = props.title ? <Typography variant="h5" gutterBottom={true} style={{fontWeight: 600}}>{ props.title }</Typography> : "";
    if (!props.imgPosition || props.imgPosition === 'top') {
        return (
            <Box>
                <Grid container spacing={3} style={props.style}>
                    <Grid item xs={12}>
                        { title }
                        <Icon style={styles.icon}/>
                        <Typography variant="body1" gutterBottom={true} className={ styles.format_image_p }>
                            { props.children } 
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        );
    } else {
        const left = props.imgPosition === 'left' ?  <Icon style={styles.icon} /> : <Box>{ title }<Typography variant="body1" gutterBottom={true} className={ styles.format_image_p }>{ props.children }</Typography></Box>;
        const right = props.imgPosition === 'right' ?  <Icon style={styles.icon} /> : <Box>{ title }<Typography variant="body1" gutterBottom={true} className={ styles.format_image_p }>{ props.children }</Typography></Box>;
        return (
            <Box>
                <Grid container spacing={3} style={props.style}>
                    <Grid item xs={props.imgPosition === 'left' ? 2 : 10}>
                        { left }
                    </Grid>
                    <Grid item xs={props.imgPosition === 'right' ? 2 : 10}>
                        { right }
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

ImgParagraph.propTypes = {
    imgPosition: PropTypes.string,
    src: PropTypes.object,
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
        <img src={ props.src || '' } alt={ props.alt || '' } style={{...style, ...props.style}}/>
    )
}