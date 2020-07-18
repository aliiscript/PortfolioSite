import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                </Switch>
            </Router>
        );
    }
}

export default App;
