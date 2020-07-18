import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Card extends Component {
    render() {
        const items = this.props.skill.itemsList;
        const listItems = items.map((item) => (
            <li className="tool tool--styles">{item}</li>
        ));
        return (
            <div className="card card--styles">
                <div className="icon-container">
                    <i
                        class={
                            "icon2 icon2--styles fas " +
                            this.props.skill.icon +
                            " fa-3x"
                        }
                    ></i>
                    <i
                        class={"icon fas " + this.props.skill.icon + " fa-3x"}
                    ></i>
                </div>
                <div className="title-container title-container--styles">
                    <h1 className="title title--styles">
                        {this.props.skill.title}
                    </h1>
                </div>
                <div className="summary-container summary-container--styles">
                    <p className="summary summary--styles">
                        {this.props.skill.summary}
                    </p>
                </div>
                <div className="tools-container  tools-container--styles">
                    <h1 className="tools-title tools-title--styles">
                        {this.props.skill.listtitle}
                    </h1>
                    <ul className="tools-list tools-list--styles">
                        {listItems}
                    </ul>
                </div>
            </div>
        );
    }
}
