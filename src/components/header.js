import React from "react";
import headerStyles from "./header.module.css";

export default class Header extends React.Component {
    render() {
        return (
            <h1 className={ headerStyles.my_header } style={{color: 'red', fontSize: 16}}>
                ---------------------------------
            </h1>
        )
    }
}