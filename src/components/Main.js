import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Skills from "./Skills";

export default class Main extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Home />
                <Skills />
            </div>
        );
    }
}
