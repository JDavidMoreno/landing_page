
import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import theme from "../styles/typo_theme";


export default function Sandwitch(props) {
    const styles = {
        tail: {
            width: 0,
            height: 0,
            marginLeft: '2rem',
            border: '12px solid',
            borderColor: '#fff transparent transparent #fff',
            marginBottom: '0.4rem'
        }
    }

    return (
        <ThemeProvider theme={ theme }>
            <Box bgcolor="background.paper" borderRadius={16} p={3} boxShadow={3}>
                <Typography variant="body1">
                    { props.children }
                </Typography>
            </Box>
            <div style={ styles.tail } />
            <div style={{paddingLeft: '2rem'}}>
            <Typography variant="span">
                <Box fontWeight="fontWeightBold" fontSize="1.2rem">
                    { props.name || '' }
                </Box>
            </Typography> 
            </div>
            <br />
        </ThemeProvider>
    );
}