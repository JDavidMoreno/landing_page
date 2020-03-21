import React, { Children } from "react";
import Container from "@material-ui/core/Container";
import Footer from "./footer";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    { this.props.children }
                    <div style={{height: 100}}>

                    </div>
                </Container>
                <Footer content="Made with Love from Ronda" />
            </div>
        )
    }
}