import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hamburger from "./homeComponents/Hamburger";
import Navbar from "./homeComponents/Navbar";
import Header from "./homeComponents/Header";

export default class Home extends Component {
    render() {
        return (
            <div id="home-section">
                <Hamburger />
                <Header />
            </div>
        );
    }
}
