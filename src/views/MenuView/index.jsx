import "./menu.css";
import React from "react";
import Header from "../../modules/General/components/Header";
import Footer from "../../modules/General/components/Footer";
import ProductList from "../../modules/Menu/components/ProductList";


const MenuView = props => {
    return (
        <div>
            <ProductList products={props.products} addItem={props.addItem}/>

            <Footer/>
        </div>
    );
};

export default MenuView;