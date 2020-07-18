import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SmallOutline from "./footerComponents/SmallOutline";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer footer--styles">
                <div className="small-svg-container">
                    <SmallOutline />
                </div>
                <div className="social-icons-container social-icons-container--styles">
                    <p className="social-icons social-icons--styles">
                        <a
                            href="http://www.linkedin.com/in/alejandro-hernandez-295144196"
                            className="social-icon"
                        >
                            <i class="fab fa-linkedin fa-3x"></i>
                        </a>
                        <a
                            href="https://github.com/Alex23925"
                            className="social-icon"
                        >
                            <i class="fab fa-github-square fa-3x"></i>
                        </a>
                    </p>
                </div>
                <div className="end-container">
                    <p className="end">Designed and Coded by me | 2020</p>
                </div>
            </div>
        );
    }
}
