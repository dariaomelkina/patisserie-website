import "./cart.css";
import React from "react";
import CartHeading from "../../modules/Cart /components/CartHeading";
import CartForm from "../../modules/Cart /components/CartForm";
import Item from "../../modules/Cart /components/ShoppingCartItem";


const CartView = props => {
    const getCartTotal = () => {
        return props.cart.reduce((acc, value) => {
            return acc + value.price;
        }, 0).toFixed(2);
    };

    return (
        <div>
            <section id="icd16f" className="flex-sect">
                <CartHeading/>
                <div className="row" id="i3jgh">

                    <div>
                        {props.cart.map(item => (
                            <Item key={item.id} {...item} />
                        ))}
                    </div>

                    <CartForm total={getCartTotal()}/>

                    <button onClick={() => props.removeItem(props.product)}>
                        Clear the cart
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CartView;