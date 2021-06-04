import React, {useState} from 'react';
import data from './api/data';
import "./index.css";
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomeView from "./views/HomeView";
import VacanciesView from "./views/VacanciesView";
import CartView from "./views/CartView";
import ContactsView from "./views/ContactsView";
import Products from './modules/Menu/components/ProductList';
import Footer from "./modules/General/components/Footer";
import Header from "./modules/General/components/Header";
import { addToCard } from './redux/Shopping/ShoppingActions';

function App() {
    const [products] = useState(data);
    const [cart] = useState([]);

    return (
        <div className="App">
            <Header/>

            <Route exact path="/">
                <HomeView/>
            </Route>
            <Route path="/home">
                <HomeView/>
            </Route>
            <Route path="/menu">
                <Products products={products} addItem={addToCard}/>
            </Route>
            <Route path="/vacancies">
                <VacanciesView/>
            </Route>
            <Route path="/contacts">
                <ContactsView/>
            </Route>
            <Route path="/cart">
                <CartView cart={cart}/>
            </Route>
            <Footer/>
        </div>
    );
}

export default App;
