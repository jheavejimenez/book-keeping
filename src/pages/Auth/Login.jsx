import React, { useState } from "react";
import Logo from "../../../src/assets/MindWorxLogo.png"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useNavigate } from 'react-router-dom'
import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../utils/Firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                if (!auth.currentUser.emailVerified) {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            navigate('/verify-email')
                        })
                        .catch(err => alert(err.message))
                } else {
                    navigate('/')
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

                        <form onSubmit={handleSubmit}>
                            <div className={"mt-4"}>
                                <div>
                                    <Input
                                        placeHolder={"Username"}
                                        type={"email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Input
                                        placeHolder={"Password"}
                                        type={"password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
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

                        </form>
                    </>
                </div>
            </div>
        </>

    )
}

export default Login
