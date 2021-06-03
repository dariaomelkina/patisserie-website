import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import "./index.css";
import App from "./App";
import store from "./redux/store";


const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <AppWithRouter />
        </Provider>
    </Router>,
    // eslint-disable-next-line no-undef
    document.getElementById("root")
);