import React from "react";
import useForm from "../UseForm";
import validate from "../LoginFormValidationRules";

const VacanciesForm = () => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(submit, validate);

    function submit() {
        console.log('No errors, submit callback called!');
    }

    return (
        <form className="form" id="i006f" onSubmit={handleSubmit} noValidate>
            <div className="form-group" id="ite91">
                <label className="label" id="imk1o">Name</label>
                <div className="control">
                    <input className={`input ${errors.name && 'is-danger'}`} type="name" name="name" id="i8u85"
                           onChange={handleChange} value={values.name || ''} required />
                </div>
                {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
                )}
            </div>
            <div className="form-group" id="intqr">
                <label className="label" id="ij3b8">Surname</label>
                <div className="control">
                    <input className={`input ${errors.surname && 'is-danger'}`} type="surname" name="surname" id="izn2n"
                           onChange={handleChange} value={values.surname || ''} required/>
                </div>
                {errors.surname && (
                    <p className="help is-danger">{errors.surname}</p>
                )}
            </div>
            <div className="form-group">
                <label className="label">Email Address</label>
                <div className="control">
                    <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email"
                           name="email" onChange={handleChange} value={values.email || ''} required/>
                    {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                    )}
                </div>
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