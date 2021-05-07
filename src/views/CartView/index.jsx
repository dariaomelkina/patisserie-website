import "./cart.css";
import React from "react";
import Header from "../../modules/General/components/Header";


const CartView = () => {
    return (
        <div>
            <Header/>
            <section id="icd16f" className="flex-sect">
                <div id="i13l4"> Your shopping cart:
                    <br/>
                </div>
                <div className="row" id="i3jgh">
                    <div className="cell" id="ii1mj">
                        <div className="row" id="i1m5z">
                            <div className="cell" id="iqaum">
                                <div className="row" id="ipi2c">
                                    <div className="cell" id="ik1p3">
                                    </div>
                                    <div className="cell" id="i83mg">
                                        <div className="row" id="iignd">
                                            <div className="cell" id="i6ws1">
                                                <div id="i2jr5">Apricot cake
                                                    <br/>
                                                </div>
                                            </div>
                                            <div className="cell" id="imh12">
                                                <div id="ikiaj">- 1 +
                                                </div>
                                            </div>
                                            <div className="cell">
                                                <div id="itjpo">0$
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" id="ikbgh">
                                    <div className="cell" id="iih11">
                                    </div>
                                    <div className="cell" id="ilk2j">
                                        <div className="row" id="iswxi">
                                            <div className="cell" id="i7982">
                                                <div id="iy5q1">Hot chocolate
                                                    <br/>
                                                </div>
                                            </div>
                                            <div className="cell" id="id036">
                                                <div id="il526">- 1 +
                                                </div>
                                            </div>
                                            <div className="cell">
                                                <div id="idk2y">0$
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell" id="ilmot">
                        <div className="row">
                        </div>
                        <form className="form" id="isar4">
                            <div className="form-group" id="ivwtt">
                                <label className="label" id="ik0l2">Name</label>
                                <input placeholder="Type here your name" className="input" id="ifxgl"/>
                            </div>
                            <div className="form-group" id="imp0h">
                                <label className="label" id="idi8q">Surname</label>
                                <input placeholder="Type here your surname" className="input" id="is448"/>
                            </div>
                            <label className="label" id="iiest">Total sum: 0$</label>
                            <div className="form-group" id="iv7qw">
                                <button type="submit" className="button" id="i8lf1">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer id="ip7baf" className="footer-under">
                <a id="id6f89">Click to check out GitHub repository of the website<br/></a>
                <div className="container-width">
                </div>
            </footer>
        </div>
    );
};

export default CartView;