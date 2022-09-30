import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        // check if is a valid email that contains @ and .
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            'Invalid email address'
        )
        .required('Required'),
    
    password: Yup.string().required('Required'),
});
