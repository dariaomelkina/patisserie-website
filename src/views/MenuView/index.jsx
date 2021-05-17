import "./menu.css";
import React from "react";
import ProductList from "../../modules/Menu/components/ProductList";


const MenuView = props => {
    return (
        <div>
            <ProductList products={props.products} addItem={props.addItem}/>
        </div>
    );
};

export default MenuView;