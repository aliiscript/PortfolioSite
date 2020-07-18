import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Project from "./projectsComponents/Project";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="projects projects--styles">
                <div className="projects-title-container">
                    <h1
                        id="projects-section"
                        className="projects-title projects-title--styles"
                    >
                        My Recent Projects
                    </h1>
                    <div className="intro-container intro-container--styles">
                        <p className="intro  intro--styles">Here are some of my recent projects</p>
                    </div>
                    <div className="projects-list-grid projects-list-grid--styles">
                        <Project />
                        <Project />
                    </div>
                </div>
            </div>
        );
    }
}
