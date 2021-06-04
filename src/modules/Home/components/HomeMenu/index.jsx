import React from "react";
import {Link} from "react-router-dom";

const HomeMenu = () => {

    return (
        <div id="i5pr2" className="cards">
            <div id="i1v15" className="card">
                <div id="ij2jg" className="card-header ch2">
                </div>
                <div className="card-body" id="irsxy">
                    <Link to="/menu" id="ia5am" className="card-title" style={{"color": "black"}}>Cakes</Link>
                    <div id="ivjp2" className="card-sub-title">
                        <br/>
                    </div>
                    <div id="io41h" className="card-desc">
                        <div>Chocolate, vanilla, fruit and many more...
                        </div>
                        For birthdays, weddings and to selebrate finished deadlines at UCU!
                    </div>
                </div>
            </div>
            <div id="i5pwpf" className="card">
                <div id="i923ng" className="card-header ch2">
                </div>
                <div className="card-body" id="id2rk">
                    <Link to="/menu" id="ia5am" className="card-title" style={{"color": "black"}}>Treats</Link>


                    <div id="ia2mgk" className="card-sub-title">
                        <br/>
                    </div>
                    <div id="ihysvo" className="card-desc">Cookies, sweets, mochies and other more usual and
                        more
                        unusual
                        treats!
                        <br/>
                    </div>
                </div>
            </div>
            <div id="ijiow" className="card">
                <div id="iblbr" className="card-header ch3">
                </div>
                <div className="card-body" id="ite7i">
                    <Link to="/menu" id="ia5am" className="card-title" style={{"color": "black"}}>Drinks</Link>

                    <div id="ibgnh" className="card-sub-title">
                        <br/>
                    </div>
                    <div id="iy60h" className="card-desc">Coffee, milk tea, caramel coctailes and other
                        seasonal
                        options.
                        <br/>
                    </div>
                </div>
            </div>
            <div id="ifwqv" className="card">
                <div className="card-header ch4">
                </div>
                <div className="card-body" id="iqrvo">
                    <Link to="/menu" id="ia5am" className="card-title" style={{"color": "black"}}>Vegan
                        menu</Link>

                    <div id="i9gnu" className="card-sub-title">
                        <br/>
                    </div>
                    <div id="izcju" className="card-desc">
                        <div>We have vegan versions of our most popular cakes, treats and drinks and some
                            unique
                            vegan
                            pastries.
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMenu;