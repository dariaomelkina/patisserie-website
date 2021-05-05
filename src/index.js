import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeView from "./views/HomeView";
import VacanciesView from "./views/VacanciesView";
import MenuView from "./views/MenuView";
import CartView from "./views/CartView";
import ContactsView from "./views/ContactsView";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomeView/>
                </Route>
                <Route path="/home">
                    <HomeView/>
                </Route>
                <Route path="/menu">
                    <MenuView/>
                </Route>
                <Route path="/vacancies">
                    <VacanciesView/>
                </Route>
                <Route path="/cart">
                    <CartView/>
                </Route>
                <Route path="/contacts">
                    <ContactsView/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    // eslint-disable-next-line no-undef
    document.getElementById("root")
);