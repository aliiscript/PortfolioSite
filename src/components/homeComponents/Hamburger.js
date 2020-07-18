import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="hamburger hamburger--styles">
                <input className="bar" type="checkbox" id="b" />
                <label htmlFor="b">
                    <div className="bar__element one"></div>
                    <div className="bar__element two"></div>
                    <div className="bar__element three"></div>
                </label>
            </nav>
        );
    }
}
