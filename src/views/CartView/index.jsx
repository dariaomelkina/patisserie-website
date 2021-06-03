import "./cart.css";
import React from "react";
import CartHeading from "../../modules/Cart /components/CartHeading";
import CartForm from "../../modules/Cart /components/CartForm";
import Item from "../../modules/Cart /components/ShoppingCartItem";
import { connect } from 'react-redux'

const CartView = ({ cart }) => {
    const getCartTotal = () => {
        return cart.reduce((acc, value) => {
            return acc + value.price;
        }, 0).toFixed(2);
    };

    return (
        <div>
            <section id="icd16f" className="flex-sect">
                <div id="cartCards">
                    <CartHeading />
                    <div className="row" id="i3jgh">

                        <div>
                            {cart.map(item => (
                                <Item key={item.id} {...item} />
                            ))}
                        </div>

                        <CartForm total={getCartTotal()} />

                    </div>
                </div>
            </section>
        </div>
    );
};

const mapStateToProbs = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProbs)(CartView);