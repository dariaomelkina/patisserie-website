import "./home.css";
import React from "react";
import Footer from "../../modules/General/components/Footer";
import SpecialHeader from "../../modules/Home/components/SpecialHeader";


const HomeView = () => {
    return (
        <div>
            <SpecialHeader/>
            <section id="is53h" className="flex-sect">
                <div id="ik9qh" className="container-width">
                    <div id="idfbr" className="flex-title">
                        <div id="i78u8">We will try to make Your day a little bit sweeter :-)
                        </div>
                    </div>
                    <div id="iqftu" className="flex-desc">
                        <div>We have cakes, sweets, drinks and much more –– give our menu a look!
                            <br/>
                        </div>
                        <div>To order anything online, put products of Your choice into the shopping cart, or call us by
                            our
                            local
                            phone number.
                        </div>
                    </div>
                    <div id="i5pr2" className="cards">
                        <div id="i1v15" className="card">
                            <div id="ij2jg" className="card-header ch2">
                            </div>
                            <div className="card-body" id="irsxy">
                                <div id="ia5am" className="card-title">Cakes
                                </div>
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
                                <div id="i0re4l" className="card-title">Treats
                                </div>
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
                                <div id="ifaih" className="card-title">Drinks
                                </div>
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
                                <div id="iikoz" className="card-title">Vegan menu
                                    <br/>
                                </div>
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
                </div>
            </section>
            <section id="ionf8u" className="bdg-sect">
                <div id="itoko2" className="container-width">
                    <h1 id="ieqedf" className="bdg-title">Our crew
                    </h1>
                    <div id="imcy2r" className="badges">
                        <div className="badge">
                            <div id="i1cd98" className="badge-header">
                            </div>
                            <img src="../images/dog1.png" id="ijbhea" className="badge-avatar" alt="Dog"/>
                            <div className="badge-body">
                                <div id="iddnd6" className="badge-name">Daria
                                </div>
                                <div id="iricwf" className="badge-role">Web pâtissier
                                    <br/>
                                </div>
                            </div>
                            <div id="ixopyh" className="badge-foot">
                                <span id="i0x1ki" className="badge-link">✉</span>
                            </div>
                        </div>
                        <div className="badge">
                            <div id="issnxt" className="badge-header">
                            </div>
                            <img src="../images/dog2.png" id="ih5rwl" className="badge-avatar" alt="Dog"/>
                            <div className="badge-body">
                                <div id="ii0jw1" className="badge-name">Nataliia
                                </div>
                                <div id="ijsadg" className="badge-role">Web pâtissier
                                </div>
                            </div>
                            <div id="irreas" className="badge-foot">
                                <span id="i6z90y" className="badge-link">✉</span>
                            </div>
                        </div>
                        <div className="badge">
                            <div id="id0bdx" className="badge-header">
                            </div>
                            <img src="../images/dog3.png" id="ieade9" className="badge-avatar" alt="Dog"/>
                            <div className="badge-body">
                                <div id="imxvoz" className="badge-name">Zoryana
                                </div>
                                <div id="i6cwjh" className="badge-role">Web pâtissier
                                </div>
                            </div>
                            <div id="i8piox" className="badge-foot">
                                <span id="iozmql" className="badge-link">✉</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HomeView;