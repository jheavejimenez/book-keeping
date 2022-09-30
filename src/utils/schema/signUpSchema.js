import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    email: Yup.string()
        // check if is a valid email that contains @ and .
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            'Invalid email address'
        )
        .required('Required'),

    password: Yup.string()
        .min(6, 'Too Short!')
        // password must contain at least one special character and one number and one uppercase letter
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
            'Password must contain at least one special character and one number and one uppercase letter'
        )
        .password('Invalid password')
        .required('Required'),
});
