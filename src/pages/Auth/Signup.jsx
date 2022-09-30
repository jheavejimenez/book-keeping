import React, { useState } from "react"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from "../../utils/Firebase";

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res)
            await sendEmailVerification(auth.currentUser)
            // createUserWithEmailAndPassword(auth, email, password)
            //     .then(() => {
            //         sendEmailVerification(auth.currentUser)
            //             .then(() => {
            //                 navigate('/verify-email')
            //             }).catch((err) => alert(err.message))
            //     })
            //     .catch(err => setError(err.message))
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
                <div className={"px-8 py-6 mt-4 text-left bg-white shadow-lg w-96"}>
                    <h3 className={"text-2xl font-bold text-center"}>Signup</h3>
                    {error && <Alert alert={error} />}
                    <form>
                        <div className={"mt-4"}>
                            <div className={"mt-4"}>
                                <Input
                                    type={"email"}
                                    placeHolder={"Email"}
                                    value={email}
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={"mt-4"}>
                                <Input
                                    type={"password"}
                                    placeHolder={"Password"}
                                    value={password}
                                    required
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={"flex flex-col place-items-center mt-5"}>
                                <Button text={"Sign up"} />
                                <a href={"/"} className={"text-sm text-blue-600 hover:underline mt-5"}>Already
                                    Have an
                                    Account ? Login</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
