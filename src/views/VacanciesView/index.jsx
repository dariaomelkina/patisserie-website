import "./vacancies.css";
import React from "react";
import Header from "../../modules/General/components/Header";
import Footer from "../../modules/General/components/Footer";
import VacanciesHeading from "../../modules/Vacancies/components/VacanciesHeading";
import VacanciesForm from "../../modules/Vacancies/components/VacanciesForm";


const VacanciesView = () => {
    return (
        <div>
            <Header/>
            <section id="icd16f" className="flex-sect">
                <VacanciesHeading/>
                <VacanciesForm/>
            </section>
            <Footer/>
        </div>
    );
};

export default VacanciesView;