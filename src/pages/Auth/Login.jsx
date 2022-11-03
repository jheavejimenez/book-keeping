import React, { useState } from "react";
import Logo from "../../../src/assets/MindWorxLogo.png"
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../utils/Firebase'
import Alert from "../../components/Alert/Alert";
import { Field, Form, Formik } from "formik";
import { LoginSchema } from "../../utils/schema/logInSchema";
import { useAuth } from "../../hooks/useAuth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Background from "../../../src/assets/bookkeeping-bg-cropped.jpg";

function Login() {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()

    const getUserRole = async (email) => {
        const q = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs[0].data().role
    }

    const handleSubmit = async (email, password) => {
        const role = await getUserRole(email)
        await signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                const isNewUser = cred.user.metadata.creationTime;
                if (role === "client" && isNewUser === cred.user.metadata.creationTime) {
                    login({
                        "email": cred.user.email,
                        "role": role
                    })
                    navigate('/incoming') // it should be navigated to client dashboard
                } else if (role === "client" && isNewUser !== cred.user.metadata.lastSignInTime) {
                    login({
                        "email": cred.user.email,
                        "role": role
                    })
                    navigate('/dashboard')

                } else if (role === "admin" && isNewUser === cred.user.metadata.lastSignInTime) {
                    login({
                        "email": cred.user.email,
                        "role": role
                    })
                    navigate('admin/account-settings')
                } else if (role === "admin" && isNewUser !== cred.user.metadata.lastSignInTime) {
                    login({
                        "email": cred.user.email,
                        "role": role
                    })
                    navigate('admin/dashboard')
                }
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    return (
        <>
            <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
                <div className="flex rounded-md shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-2xl">
                    <>
                        <div className={"px-8 py-6 text-left bg-white lg:w-3/4"}>
                            <div>
                                <img src={Logo} alt="logo" className={"w-3/4 mx-auto pb-8"} />
                                <h3 className={"text-2xl font-bold text-center"}>Welcome back!</h3>
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
                                                    className={" w-full px-4 py-2 mt-2 border rounded-md " +
                                                        " focus:outline-none focus:ring-1 focus:ring-blue-600 "}
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
                                                    className={" w-full px-4 py-2 mt-2 border rounded-md " +
                                                        " focus:outline-none focus:ring-1 focus:ring-blue-600 "}
                                                />
                                                {errors.password && touched.password ?
                                                    <span className={"text-sm text-red-700"}>
                                                    {errors.password}
                                                </span> : null
                                                }
                                            </div>
                                            <div className={"flex flex-col place-items-center mt-2"}>
                                                <Button text={"Login"} />
                                                <a href="/forgot-pass"
                                                className={"text-sm text-black-600 hover:underline mt-5 "}>Forgot
                                                    password?</a>
                                                <div className="border-t-2 w-80 mt-5 ">
                                                    <a href={"/signup"}
                                                    className={"text-sm text-black-600 hover:underline flex flex-col place-items-center mt-5 "}>Create
                                                        an account today !</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="hidden lg:block lg:w-1/2 bg-cover">
                            <img className="h-full" src={Background} alt="background"/>
                        </div>
                    </>
                </div>
            </div>
        </>

    )
}

export default Login
