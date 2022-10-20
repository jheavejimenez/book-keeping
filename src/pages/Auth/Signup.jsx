import React, { useState } from "react"
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from "../../utils/Firebase";
import { Field, Form, Formik } from "formik";
import { SignupSchema } from "../../utils/schema/signUpSchema";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/Firebase";

function Signup() {
    const navigate = useNavigate()
    // const register = document.getElementById("register")
    const handleSubmit = async (email, password) => {
        const role = "admin"
        await createUserWithEmailAndPassword(auth, email, password). then((cred) => {
            return addDoc(collection(db, "users"), { email, uid: cred.user.uid, role })
            

        })
        .then(() => {
            sendEmailVerification(auth.currentUser).then(() => {
                navigate('/verify-email')
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
        });
       
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
                            <Form id="register">
                                <div className={"mt-4"}>
                                    <div className={"mt-4"}>
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
                                    <div className={"mt-4"}>
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
                                    {/* <div className={"mt-4"}>
                                        <Field
                                            name={"role"}
                                            id="role"
                                            type={"role"}
                                            placeholder={"User"}
                                            className={"w-full px-4 py-2 mt-2 border rounded-md" +
                                                " focus:outline-none focus:ring-1 focus:ring-blue-600"}
                                        />
                                        {errors.role && touched.role ?
                                            <span className={"text-sm text-red-700"}>
                                                {errors.role}
                                            </span> : null
                                        }
                                    </div> */}
                                    
                                    <div className={"flex flex-col place-items-center mt-5"}>
                                        <Button text={"Sign up"} />
                                        <Link to={"/"}
                                              className={"text-sm text-black-600 hover:underline mt-5"}
                                        >
                                            Already Have an Account ? Login
                                        </Link>
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

