import React from "react";
import ReactDOM from "react-dom";

import "./scss/reset.scss";
import "./scss/hamburger.scss";
import "./scss/index.scss";
import "./scss/faceAnimation.scss";
import "./scss/skills.scss";
import "./scss/card.scss";
import "./scss/projects.scss";
import "./scss/project.scss";
import "./scss/footer.scss";
import "./scss/smallSvg.scss";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
