import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Card from "./skillsComponents/Card";

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                {
                    icon: "fa-palette",
                    title: "Designer",
                    summary: "My design philosophy is less is better. I value clean and minimalist designs.",
                    listtitle: "Design tools:",
                    itemsList: ["Figma", "Illustrator", "Photoshop", "Codepen", "SVG"],
                },
                {
                    icon: "fa-window-maximize",
                    title: "Front-end Developer",
                    summary: "I love coding sites from scratch and design so front end development was bound to be my passion.",
                    listtitle: "Front-end dev tools:",
                    itemsList: ["Vs Code", "Github", "Font Awesome", "SVG"],
                },
                {
                    icon: "fa-database",
                    title: "Back-end Developer",
                    summary: "I love the logic behind the front end side of web developing as well",
                    listtitle: "Back-end dev tools:",
                    itemsList: ["Vs Code", "Github", "Git Desktop", "Npm", "Webpack", "Terminal"],
                },
            ],
        };
    }
    
    render() {
        return (
            <div id="skill-section" className="skills skills--styles">
                <div className="design-skills">
                    <Card skill={this.state.skills[0]} />
                </div>
                <div className="front-end-skills">
                    <Card skill={this.state.skills[1]} />
                </div>
                <div className="back-end-skills">
                    <Card skill={this.state.skills[2]} />
                </div>
            </div>
        );
    }
}
