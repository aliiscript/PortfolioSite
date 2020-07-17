import React from "react";
import ReactDOM from "react-dom";

import "./scss/reset.scss";
import "./scss/hamburger.scss";
import "./scss/index.scss";
import "./scss/faceAnimation.scss";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
