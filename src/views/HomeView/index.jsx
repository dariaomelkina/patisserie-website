import "./home.css";
import React from "react";
import Greeting from "../../modules/Home/components/Greeting";
import HomeMenu from "../../modules/Home/components/HomeMenu";
import CrewCards from "../../modules/Home/components/CrewCards";


const HomeView = () => {
    return (
        <div>
            <section id="is53h" className="flex-sect">
                <div id="ik9qh" className="container-width">
                    <Greeting/>
                    <HomeMenu/>
                </div>
            </section>
            <CrewCards/>
        </div>
    );
};

export default HomeView;