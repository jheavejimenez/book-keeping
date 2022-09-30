import React, { useState } from "react";
import Logo from "../../../src/assets/MindWorxLogo.png"
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom'
import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../utils/Firebase'
import  Alert  from "../../components/Alert/Alert";
import { Field, Form, Formik } from "formik";
import { LoginSchema } from "../../utils/schema/logInSchema";
import { useAuth } from "../../hooks/useAuth";

function Login() {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()
    const handleSubmit = (email,password) => {
        
         signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                login({
                    idToken: res._tokenResponse.idToken,
                    expiresIn: res._tokenResponse.expiresIn,
                    refreshToken: res._tokenResponse.refreshToken,

                })
                if (!auth.currentUser.emailVerified) {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            navigate('/verify-email')
                        })
                        .catch(err => alert(err.message))
                } else {
                    navigate('/dashboard')
                }
            })
            .catch(err => setError(err.message))
    }

    return (
        <>
            <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
                <div className={"px-8 py-6 mt-4 text-left bg-white shadow-lg w-96"}>
                    <>
                        <div>
                            <img src={Logo} alt="logo" className={"w-3/4 mx-auto pb-8"} />
                            <h3 className={"text-2xl font-bold text-center"}>LOGIN</h3>
                        </div>
                        {error && <Alert>{error}</Alert>}
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={LoginSchema}
                            onSubmit={values => {
                                handleSubmit(values.email, values.password)
                        }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className={"mt-4"}>
                                        <div>
                                            <Field
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                                className={"w-full px-4 py-2 mt-2 border rounded-md " +
                                                    "focus:outline-none focus:ring-1 focus:ring-blue-600"}
                                            />
                                            {errors.email && touched.email ?
                                            <span className={"text-sm text-red-700"}>
                                                {errors.email}
                                            </span> : null
                                        }
                                        </div>
                                        <div>
                                            <Field
                                                name={"password"}
                                                type={"password"}
                                                placeholder={"Password"}
                                                className={"w-full px-4 py-2 mt-2 border rounded-md" +
                                                    " focus:outline-none focus:ring-1 focus:ring-blue-600"}
                                            />
                                            {errors.password && touched.password ?
                                            <span className={"text-sm text-red-700"}>
                                                {errors.password}
                                            </span> : null
                                            }
                                        </div>
                                        <div className={"flex flex-col place-items-center"}>
                                            <Button text={"Login"} />
                                            <a href="src/pages/Auth/Login#"
                                            className={"text-sm text-black-600 hover:underline mt-5 "}>Forgot
                                                password?</a>
                                            <div className="border-t-2 w-80 mt-5 ">
                                                <a href={"/Signup"}
                                                className={"text-sm text-black-600 hover:underline flex flex-col place-items-center mt-5 "}>Create
                                                    an account today !</a>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </>
                </div>
            </div>
        </>

    )
}

export default Login
