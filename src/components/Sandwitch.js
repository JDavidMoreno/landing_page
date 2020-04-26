
import React from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


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
    };

    return (
        <Box marginBottom={'1.6rem'}>
            <Box bgcolor="background.paper" borderRadius={16} p={3} boxShadow={3}>
                <Typography variant="body1">
                    { props.children }
                </Typography>
            </Box>
            <div style={ styles.tail } />
            <Box fontWeight="fontWeightBold" fontSize="1.2rem" paddingLeft={'2rem'}>
                <Typography variant="body2">
                    { props.name || '' }
                </Typography>
            </Box>
        </Box>
    );
}