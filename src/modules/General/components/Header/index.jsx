import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header id="iznd" className="header-banner">
            <div id="imif" className="container-width">
                <div id="i6ol" className="logo-container">
                </div>
                <nav id="ivk2" className="menu">
                    <Link to="/contacts" id="i49v" className="menu-item">
                        <div id="i8k8">Contacts
                        </div>
                    </Link>
                    <Link to="/cart" id="i7j68h" className="menu-item">Cart
                    </Link>
                    <Link to="/vacancies" id="i91llm" className="menu-item">Vacancies
                    </Link>
                    <Link to="/menu" id="izqj" className="menu-item">Menu
                    </Link>
                    <Link to="/home" id="i5lgs" className="menu-item">Home
                    </Link>
                </nav>
                <Link to="\home" id="ien7" className="logo">
                    <div>
                        <b>Pâtisserie
                            <br/>
                        </b>
                    </div>
                    <div>
                        <b>on the Hill
                        </b>
                    </div>
                </Link>
                <div className="clearfix">
                </div>
            </div>
        </header>
    );
};

export default Header;