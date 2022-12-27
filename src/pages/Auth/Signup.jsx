import React, { useState } from "react"
import Button from "../../components/Button/Button";
import Background from "../../../src/assets/bookkeeping-bg-cropped.jpg";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from "../../utils/Firebase";
import { Field, Form, Formik } from "formik";
import { SignupSchema } from "../../utils/schema/signUpSchema";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase";

function Signup() {
    const navigate = useNavigate()
    const accsetCollectionRef = collection(db, "users",);
    const handleSubmit = async (email, password) => {
        const role = "client"
        await createUserWithEmailAndPassword(auth, email, password). then((cred) => {
            return setDoc(doc(accsetCollectionRef, cred.user.email),
             { email, uid: cred.user.uid, role, company: "", fname: "", lname: "", image: "", Llogin: serverTimestamp() })
            

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
                <div className="flex rounded-md shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-2xl">

                    <div className={"px-8 py-6 text-left bg-white lg:w-3/4"}>
                        <div className="w-3/4 mx-auto py-8">
                            <h3 className={"text-4xl font-bold text-center"}>Sign Up</h3>
                        </div>
                        
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
                                            <div className="border-t-2 w-80 mt-10">
                                               <Link to={"/"}
                                                className={"text-sm text-black-600 hover:underline flex flex-col place-items-center mt-8"}
                                                >
                                                    Already have an account? Login
                                                </Link> 
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
                </div>
            </div>
        </>
    )
}

export default Signup

