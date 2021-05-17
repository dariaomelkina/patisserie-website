import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import App from "./App";

const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Router>
        <AppWithRouter/>
    </Router>,
    // eslint-disable-next-line no-undef
    document.getElementById("root")
);