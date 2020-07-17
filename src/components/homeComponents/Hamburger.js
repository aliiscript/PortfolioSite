import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="hamburger hamburger--styles">
                <input class="bar" type="checkbox" id="b" />
                <label for="b">
                    <div class="bar__element one"></div>
                    <div class="bar__element two"></div>
                    <div class="bar__element three"></div>
                </label>
            </nav>
        );
    }
}
