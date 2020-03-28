
import * as React from "react";

export default class FormContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <form noValidate autoComplete="off">
                { this.props.children }
            </form>
        );   
    }
}