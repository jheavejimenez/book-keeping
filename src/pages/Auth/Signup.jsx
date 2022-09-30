import React, { useState } from "react"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from "../../utils/Firebase";
import { Field, Form, Formik } from "formik";
import { SignupSchema } from "../../utils/schema/signUpSchema";

function Signup() {
    const navigate = useNavigate()
    const handleSubmit = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(auth.currentUser)

        navigate('/verify-email')
    }
    return (
        <>

            <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
                <div className={"px-8 py-6 mt-4 text-left bg-white shadow-lg w-96"}>
                    <h3 className={"text-2xl font-bold text-center"}>Signup</h3>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            handleSubmit(values.email, values.password)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className={"mt-4"}>
                                    <div className={"mt-4"}>
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
                                    <div className={"mt-4"}>
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
                                    <div className={"flex flex-col place-items-center mt-5"}>
                                        <Button text={"Sign up"} />
                                        <a href={"/"} className={"text-sm text-blue-600 hover:underline mt-5"}>Already
                                            Have an
                                            Account ? Login</a>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Signup

