import React, { Component } from "react";

import { Link } from "react-router-dom";

import MyFaceSVG from "./MyFaceSVG";

export default class Navbar extends Component {
    render() {
        return (
            <div className="header header--styles">
                <div className="greeting">
                    <h2 className="greet-txt greet-txt--styles">Hi,</h2>
                    <h2 className="greet-txt greet-txt--styles">I am,</h2>
                    <h1 className="fname">Alejandro Hernandez</h1>
                </div>
                <div className="career career--styles">
                    <div className="career-txt career-txt1">I Design &</div>
                    <div className="career-txt career-txt2">Build</div>
                    <div className="career-txt career-txt2">Webistes</div>
                </div>
                <MyFaceSVG />
            </div>
        );
    }
}
