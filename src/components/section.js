import React from "react";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';



export default class Section extends React.Component {
    render() {
        const section_style = {
            padding: '4rem 0',
            backgroundColor: this.props.color,
            textAlign: this.props.align ? this.props.align : 'left',
            ...this.props.style
        };
        return (
            <Box style={section_style}>
                <Container  maxWidth="lg" >
                    <Box p={{xs: 0, sm: 4}}>
                        { this.props.children }
                    </Box>
                </Container>
            </Box>
        )
    }
}