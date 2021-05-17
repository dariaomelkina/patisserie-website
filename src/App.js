import React, {useState} from 'react';
import data from './data';
import "./index.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomeView from "./views/HomeView";
import VacanciesView from "./views/VacanciesView";
import MenuView from "./views/MenuView";
import CartView from "./views/CartView";
import ContactsView from "./views/ContactsView";
import Products from './modules/Menu/components/ProductList';
import Footer from "./modules/General/components/Footer";
import Navigation from "./modules/General/components/Navigation";

function App() {
    const [products] = useState(data);
    const [cart, setCart] = useState([]);

    const addItem = item => {
        setCart([...cart, item]);
    };

      const removeItem = (item) => {
		setCart([])
	};

    return (
        <div className="App">
            <Navigation/>

            <Route exact path="/">
                <HomeView/>
            </Route>
            <Route path="/home">
                <HomeView/>
            </Route>
            <Route path="/menu">
                <Products products={products} addItem={addItem}/>
            </Route>
            <Route path="/vacancies">
                <VacanciesView/>
            </Route>
            <Route path="/contacts">
                <ContactsView/>
            </Route>
            <Route path="/cart">
                <CartView cart={cart} removeItem={removeItem}/>
            </Route>
            <Footer/>
        </div>
    );
}

export default App;
