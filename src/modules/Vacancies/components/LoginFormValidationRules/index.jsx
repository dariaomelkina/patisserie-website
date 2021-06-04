export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.name) {
        errors.name = 'Name is required';
    } else if (values.name.length < 3) {
        errors.name = 'Name must be 3 or more characters';
    }

    if (!values.surname) {
        errors.surname = 'Name is required';
    } else if (values.surname.length < 4) {
        errors.surname = 'Surname must be 4 or more characters';
    }
    return errors;
};