import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/lp/index.html">Home</Link>
            <Header headerText="Contact" />
            <p>Send us a message!</p>
        </div>
    )
}