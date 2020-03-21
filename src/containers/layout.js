import React, { Children } from "react";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                Start container ...
                { this.props.children }
                End ..
            </div>
        )
    }
}