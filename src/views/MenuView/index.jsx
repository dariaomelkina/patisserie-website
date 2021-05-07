import "./menu.css";
import React from "react";
import Header from "../../modules/General/components/Header";
import Footer from "../../modules/General/components/Footer";
import CakeMenu from "../../modules/Menu/components/CakeMenu";
import TreatsMenu from "../../modules/Menu/components/TreatsMenu";
import DrinksMenu from "../../modules/Menu/components/DrinksMenu";
import VeganMenu from "../../modules/Menu/components/VeganMenu";


const MenuView = () => {
    return (
        <div>
            <Header/>

            <CakeMenu/>

            <TreatsMenu/>

            <DrinksMenu/>

            <VeganMenu/>

            <Footer/>
        </div>
    );
};

export default MenuView;