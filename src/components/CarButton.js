
import React from "react";

import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';


export default function ButtonCard(props) {

    return (
        <Box borderRadius={10} bgcolor="background.paper" p="1.3rem" paddingTop={"4rem"}>
            { props.children }
            <Box paddingTop="1.2rem">
                <Button variant="contained" color="primary">
                    { props.buttonContent }
                </Button>
            </Box>
        </Box>
    );
}