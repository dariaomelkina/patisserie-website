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
    const myButton = {
        color: "gray",
        backgroundColor: "GhostWhite",
        height: "100px",
        marginTop: "70px"
    }

    return (
        <div>
            <section id="icd16f" className="flex-sect">
                <div id="cartCards">
                    <CartHeading/>
                    <div className="row" id="i3jgh">

                        <div>
                            {props.cart.map(item => (
                                <Item key={item.id} {...item} />
                            ))}
                        </div>

                        <CartForm total={getCartTotal()}/>

                        <button onClick={() => props.removeItem(props.product)} style={myButton}>
                            Clear the cart
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartView;