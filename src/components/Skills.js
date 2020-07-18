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
                    itemsTitle: "What I love to Design:",
                    itemsList: "Desktop, Mobile, SVGs, UI/UX",
                    listtitle: "Design tools:",
                    toolsList: ["Figma", "Illustrator", "Photoshop", "Codepen", "SVG"],
                },
                {
                    icon: "fa-window-maximize",
                    title: "Front-end Developer",
                    summary: "I love coding sites from scratch and design so front end development was bound to be my passion.",
                    itemsTitle: "Languages I speak:",
                    itemsList: "React, JSX, Javascript, HTML, CSS, SCSS",
                    listtitle: "Front-end dev tools:",
                    toolsList: ["Vs Code", "Github", "Font Awesome", "SVG"],
                },
                {
                    icon: "fa-database",
                    title: "Back-end Developer",
                    summary: "I love the logic behind the front end side of web developing as well",
                    itemsTitle: "Languages I speak:",
                    itemsList: "NodeJS, Python",
                    listtitle: "Back-end dev tools:",
                    toolsList: ["Vs Code", "Github", "Git Desktop", "MongoDB", "Express", "Npm", "Webpack", "Terminal"],
                },
            ],
        };
    }
    
    render() {
        return (
            <div className="skills skills--styles">
                <div className="skills-title-container">
                    <h1 id="skills-section" className="skills-title skills-title--styles">Skills</h1>
                </div>
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
