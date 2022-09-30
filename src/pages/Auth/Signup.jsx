import React, { useState } from "react"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from "../../utils/Firebase";
import { Form, Formik } from "formik";
import { SignupSchema } from "../../utils/schema/signUpSchema";

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(auth.currentUser)

        setEmail('')
        setPassword('')
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
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className={"mt-4"}>
                                    <div className={"mt-4"}>
                                        <Input
                                            type={"email"}
                                            placeHolder={"Email"}
                                            value={email}
                                            required
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        {errors.email && touched.email ?
                                            <span className={"text-sm text-red-700"}>
                                                {errors.email}
                                            </span> : null
                                        }
                                    </div>
                                    <div className={"mt-4"}>
                                        <Input
                                            type={"password"}
                                            placeHolder={"Password"}
                                            value={password}
                                            required
                                            onChange={e => setPassword(e.target.value)}
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

