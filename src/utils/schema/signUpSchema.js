import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        // password must contain at least one special character and one number and one uppercase letter
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
            'Password must contain at least one special character and one number and one uppercase letter'
        )
        .password('Invalid password').required('Required'),
});
