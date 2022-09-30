import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {useAuthValue} from "../../context/AuthContext"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import {auth} from '../../utils/Firebase'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'

 function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [company, setCompany] = useState('')
    const [fullname , setFullname] = useState('')

    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {setTimeActive} = useAuthValue()
    const [loading, setLoading] = useState(false)
  
    const validatePassword = () => {
        let isValid = true
        if (password.length < 6) {
            setError('Password must be at least 6 characters')
        }
        if (password.length === 0) {
            setError('Password is required')
            isValid = false
        }
        if (username.length === 0) {
            setError('Username is required')
            isValid = false
        }
        if (fullname.length === 0) {
            setError('Fullname is required')
            isValid = false   
        }
        if (company.length === 0) {
            setError('Company is required')
            isValid = false
        }
        if (email.length === 0) {
            setError('Email is required')
            isValid = false
        }
        return isValid
      }

    const handleSubmit = e => {
        e.preventDefault()
        setError('')
        if(validatePassword()) {
          // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, username, password, fullname, company, email)
            .then(() => {
              sendEmailVerification(auth.currentUser)   
              .then(() => {
                setTimeActive(true)
                navigate('/verify-email')
              }).catch((err) => alert(err.message))
            })
            .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
        setUsername('')
        setCompany('')
        setFullname('')
      }
    return (
        <>
            <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
                <div className={"px-8 py-6 mt-4 text-left bg-white shadow-lg w-96"}>
                    {loading ? (
                        <div className={"flex flex-col place-items-center"}>
                            <h3 className={"text-2xl font-bold text-center"}>Sending magic link to email</h3>
                            <div className="flex items-center justify-center">
                                <div
                                    className="w-12 h-12 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <h3 className={"text-2xl font-bold text-center"}>Signup</h3>
                            {error && <Alert alert = {error} />}
                            <form onSubmit={handleSubmit}>
                                <div className={"mt-4"}>
                                    <div>
                                        <Input
                                            type={"text"}
                                            placeHolder={"Username"}
                                            value={username}
                                            required
                                            onChange={e => setUsername(e.target.value)}
                                            
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
                                    <div className={"mt-4"}>
                                        <Input
                                            type={"text"}
                                            placeHolder={"Full name"}
                                            value={fullname}
                                            required
                                            onChange={e => setFullname(e.target.value)}
                                        />
                                    </div>
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
                                            type={"text"}
                                            placeHolder={"Company"}
                                            value={company}
                                            required
                                            onChange={e => setCompany(e.target.value)}
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
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Signup