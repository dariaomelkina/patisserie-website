import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <header id="iznd" className="header-banner">
            <div id="imif" className="container-width">
                <div id="i6ol" className="logo-container">
                </div>
                <nav id="ivk2" className="menu">
                    <NavLink to="/contacts" id="i49v" className="menu-item">
                        <div id="i8k8">Contacts
                        </div>
                    </NavLink>
                    <NavLink to="/cart" id="i7j68h" className="menu-item">Cart
                    </NavLink>
                    <NavLink to="/vacancies" id="i91llm" className="menu-item">Vacancies
                    </NavLink>
                    <NavLink to="/menu" id="izqj" className="menu-item">Menu
                    </NavLink>
                    <NavLink to="/home" id="i5lgs" className="menu-item">Home
                    </NavLink>
                </nav>
                <NavLink to="\home" id="ien7" className="logo">
                    <div>
                        <b>Pâtisserie
                            <br/>
                        </b>
                    </div>
                    <div>
                        <b>on the Hill
                        </b>
                    </div>
                </NavLink>
                <div className="clearfix">
                </div>
            </div>
        </header>
    );
};

export default Navigation;