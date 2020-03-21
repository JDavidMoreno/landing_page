import React from "react";
import Container from "@material-ui/core/Container";



export default class Section extends React.Component {

    render() {
        let section_style = {
            padding: '2rem',
            backgroundColor: this.props.color,
        };

        return (
            <div style={section_style}>
                <Container maxWidth="lg">
                    { this.props.children }
                </Container>
            </div>
        )
    }
}