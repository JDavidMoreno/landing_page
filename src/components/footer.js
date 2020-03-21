import React from "react";
import { render } from "react-dom";


export default class Footer extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: 'black', padding: '2.5rem', textAlign: 'center'}}>
                <span style={{color: 'gray'}}>
                    { this.props.content }
                </span>
            </div>
        )
    }
}