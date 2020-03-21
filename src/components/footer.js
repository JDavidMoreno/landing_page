import React from "react";


export default class Footer extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: 'black', padding: '2.5rem', textAlign: 'center', width: '100%'}}>'
                <span style={{color: 'gray'}}>
                    { this.props.content }
                </span>
            </div>
        )
    }
}