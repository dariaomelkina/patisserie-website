import "./vacancies.css";
import React from "react";
import VacanciesHeading from "../../modules/Vacancies/components/VacanciesHeading";
import VacanciesForm from "../../modules/Vacancies/components/VacanciesForm";


const VacanciesView = () => {
    return (
        <div>
            <section id="icd16f" className="flex-sect">
                <VacanciesHeading/>
                <VacanciesForm/>
            </section>
        </div>
    );
};

export default VacanciesView;