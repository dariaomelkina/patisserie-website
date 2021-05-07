import React from "react";

const VacanciesForm = () => {

    return (
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
    );
};

export default VacanciesForm;