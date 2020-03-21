import React from "react";
import { Link } from "gatsby";
import Layout from "../containers/layout";
import Header from "../components/header";


export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <Header />
                <Link to="/lp/contact/index.html">Contact</Link>
                <div>Hello World! </div>
                <Header />
            </Layout>
        )
    }
}


