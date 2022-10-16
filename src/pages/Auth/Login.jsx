import React, { useState } from "react";
import Logo from "../../../src/assets/MindWorxLogo.png"
import Background from "../../../src/assets/bookkeeping-bg.jpg"
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom'
import { sendEmailVerification, signInWithEmailAndPassword, getAuth, onAuthStateChanged  } from 'firebase/auth'
import { auth } from '../../utils/Firebase'
import  Alert  from "../../components/Alert/Alert";
import { Field, Form, Formik } from "formik";
import { LoginSchema } from "../../utils/schema/logInSchema";
import { useAuth } from "../../hooks/useAuth";
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../../utils/Firebase";

function Login() {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()
    
    const handleSubmit = async(email,password, role,uid ) => {
        const q = query(collection(db, "users"), where("email", "==", email, "role", "==", role, uid, "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
          
        });
        await signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            const isNewUser = cred.user.metadata.creationTime;
            if(isNewUser===cred.user.metadata.lastSignInTime){
                login(cred.user.email)
                navigate('admin/accountsettings')
            }
                
            else{
                login(cred.user.email)
                navigate('/dashboard')
            
                
            }
            // navigate('/dashboard')
        })
        .catch((error) => {
            setError(error.message)
        })
        
        
    }

    return (
        <>
            <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
                <div className={"px-8 py-6 mt-4 text-left bg-white shadow-lg w-96"}>
                    <>
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
                                            <a href="/Forgotpass"
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
                {/*<div className="hidden lg:block lg:w-1/2 bg-cover rounded-r-md">
                    <img className="w-1/2 h-full bg-center bg-no-repeat bg-cover rounded-r-md" src={Background} alt="background"/>
                </div> */}
            </div>
        </>

    )
}

export default Login
