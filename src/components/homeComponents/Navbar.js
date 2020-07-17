import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar--styles">
                <div className="projects">Projects</div>
                <div className="about">About</div>
                <div className="contact">Contact</div>
            </nav>
        );
    }
}
