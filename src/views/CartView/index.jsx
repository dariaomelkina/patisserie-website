import "./cart.css";
import React from "react";
import Header from "../../modules/General/components/Header";
import Footer from "../../modules/General/components/Footer";
import CartHeading from "../../modules/Cart /components/CartHeading";
import CartElement1 from "../../modules/Cart /components/CartElement1";
import CartElement2 from "../../modules/Cart /components/CartElement2";
import CartForm from "../../modules/Cart /components/CartForm";


const CartView = () => {
    return (
        <div>
            <Header/>
            <section id="icd16f" className="flex-sect">
                <CartHeading/>
                <div className="row" id="i3jgh">
                    <div className="cell" id="ii1mj">
                        <div className="row" id="i1m5z">
                            {/*TODO: отут має бути загальний елменти, що вміщатиме в себе об'єкти корзинки
                                і генеруватиме з ними список + CartElemet використати як базу*/}
                            <div className="cell" id="iqaum">

                                <CartElement1/>
                                <CartElement2/>

                            </div>
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