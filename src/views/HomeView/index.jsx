import "./home.css";
import React from "react";
import Footer from "../../modules/General/components/Footer";
import SpecialHeader from "../../modules/Home/components/SpecialHeader";
import Greeting from "../../modules/Home/components/Greeting";
import HomeMenu from "../../modules/Home/components/HomeMenu";
import CrewCards from "../../modules/Home/components/CrewCards";


const HomeView = () => {
    return (
        <div>
            <SpecialHeader/>
            <section id="is53h" className="flex-sect">
                <div id="ik9qh" className="container-width">
                    <Greeting/>
                    <HomeMenu/>
                </div>
            </section>
            <CrewCards/>
            <Footer />
        </div>
    );
};

export default HomeView;