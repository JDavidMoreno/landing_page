import React, { Children } from "react";
import Container from "@material-ui/core/Container";
import Footer from "./footer";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Container maxWidth="lg">
                    { this.props.children }
                </Container>
                <Footer content="Made with Love from Ronda" />
            </div>
        )
    }
}