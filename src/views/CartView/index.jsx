import "./cart.css";
import React from "react";
import {useState, useEffect} from "react";
import Header from "../../modules/General/components/Header";
import Footer from "../../modules/General/components/Footer";
import CartHeading from "../../modules/Cart /components/CartHeading";
import CartElement1 from "../../modules/Cart /components/CartElement1";
import CartElement2 from "../../modules/Cart /components/CartElement2";
import CartForm from "../../modules/Cart /components/CartForm";


const CartView = () => {


    const [cart, setCart] = React.useState([]);
    // const cartTotalPrice = cart.reduce((total, {price = 0}) => total + price, 0);
    const addToCart = (el) => {
        setCart([...cart, el]);
    };

    const cartItems = cart.map((el) => (
        <div className="cell" id="iqaum">
            <div key={el.id}>
                {`${el.name}: $${el.price}`}
                {/*<input type="submit" value="remove" onClick={() => removeFromCart(el)}/>*/}
            </div>
        </div>
    ));

    return (
        <div>
            <Header/>
            <section id="icd16f" className="flex-sect">
                <CartHeading/>
                <div className="row" id="i3jgh">
                    <div className="cell" id="ii1mj">
                        <div className="row" id="i1m5z">
                            <div>{cartItems}</div>
                        </div>
                    </div>


                    <CartForm/>

                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default CartView;