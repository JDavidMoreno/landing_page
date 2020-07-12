
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
            <Box fontWeight="fontWeightBold" fontSize="1.2rem" paddingLeft={'2rem'} paddingBottom={'1rem'}>
                <Box width="6.2rem" height="6.2rem" marginRight="1rem" marginBottom="-3rem" style={{backgroundImage: `url(${props.image})` || '', backgroundPosition: 'center', backgroundSize: 'cover',  borderRadius: '100%', display: 'inline-block'}} />
                <Typography variant="body2" style={{display: 'inline-block'}}>
                    { props.name || '' }
                </Typography>
            </Box>
            <Box bgcolor="background.paper" borderRadius={16} p={3} boxShadow={3}>
                <Typography variant="body1">
                    { props.children }
                </Typography>
            </Box>
            {/* <div style={ styles.tail } /> */}
        </Box>
    );
}