import "./vacancies.css";
import React from "react";


const VacanciesView = () => {
    return (
        <div>
            <header id="iznd" className="header-banner">
                <div id="imif" className="container-width">
                    <div id="i6ol" className="logo-container">
                    </div>
                    <nav id="ivk2" className="menu">
                        <div id="i49v" className="menu-item">
                            <div id="i8k8">Contacts
                            </div>
                        </div>
                        <div id="i7j68h" className="menu-item">Cart
                        </div>
                        <div id="i91llm" className="menu-item">Vacancies
                        </div>
                        <div id="izqj" className="menu-item">Menu
                        </div>
                        <div id="i5lgs" className="menu-item">Home
                        </div>
                    </nav>
                    <div id="ien7" className="logo">
                        <div>
                            <b>Pâtisserie
                                <br/>
                            </b>
                        </div>
                        <div>
                            <b>on the Hill
                            </b>
                        </div>
                    </div>
                    <div className="clearfix">
                    </div>
                </div>
            </header>
            <section id="icd16f" className="flex-sect">
                <div id="ijw9a">Join our crew as a new pastry chef!
                    <br/>
                </div>
                <form className="form" id="i006f">
                    <div className="form-group" id="ite91">
                        <label className="label" id="imk1o">Name</label>
                        <input placeholder="Type here your name" className="input" id="i8u85"/>
                    </div>
                    <div className="form-group" id="intqr">
                        <label className="label" id="ij3b8">Surname</label>
                        <input placeholder="Type here your surname" className="input" id="izn2n"/>
                    </div>
                    <div className="form-group">
                        <label className="label">Email</label>
                        <input type="email" placeholder="Type here your email" className="input"/>
                    </div>
                    <div className="form-group" id="io6dm">
                        <label className="label" id="if3f5">Describe Your interest in the position:</label>
                        <textarea className="textarea" id="ishio"></textarea>
                    </div>
                    <div className="form-group" id="ivnqh">
                        <label className="label" id="i31ct">Do You like dogs? Why do You love them very much? </label>
                        <textarea className="textarea" id="i4mc3"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="button" id="iws1n">Send</button>
                    </div>
                </form>
            </section>
            <footer id="ip7baf" className="footer-under">
                <a id="id6f89">Click to check out GitHub repository of the website<br/></a>
                <div className="container-width">
                </div>
            </footer>
        </div>
    );
};

export default VacanciesView;