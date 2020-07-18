import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <div className="main">
                <Main />
            </div>
        );
    }
}

export default App;
