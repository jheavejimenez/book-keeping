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
import { collection, getDocs, query, where, doc, updateDoc, setDoc, runTransaction, writeBatch} from "firebase/firestore";
import Background from "../../../src/assets/admin-bg-cropped.png";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {
    
    const notifyError = (Text) => toast.error(Text, {
        position: "top-center",

    });
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()
    const [data , setData] = useState([])
    const [data1 , setData1] = useState([])

    const getUserRole = async (email) => {
        const q = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            notifyError("Invalid email or password")
        }
        console.log(querySnapshot.docs[0].data())
        return querySnapshot.docs[0].data().role
        
    }

    const getLastlogin = async (email) => {
        const q = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No matching documents.");
        }
        return querySnapshot.docs[0].data().Llogin

    }

    
    
    const gettingTwoDatabase = async (email) => {
        
        const batch = writeBatch(db);
        const arr = []
        const arr1 = []
        const q = query(collection(db, "incoming"), where("email", "==", email));
        const q1 = query(collection(db, "outgoing"), where("sentby", "==", email));
        
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No matching documents.");
        }
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
            
            
            
        });
        const querySnapshot1 = await getDocs(q1);
        if (querySnapshot1.empty) {
            console.log("No matching documents.");
        }
        querySnapshot1.forEach((doc) => {
            arr1.push(doc.data())
        });


        setData(arr)
        setData1(arr1)
        console.log(data)
        console.log(data1)
        
        for (let i = 0; i < arr.length; i++) {
            const docRef = doc(db, "archive", arr[i].docid);
            batch.set(docRef, data.filter((item) => item.docid === arr[i].docid)[0]);
            batch.delete(doc(db, "incoming", arr[i].docid));
        }

        for (let i = 0; i < arr1.length; i++) {
            const docRef = doc(db, "archive", arr1[i].docid);
            batch.set(docRef, data1.filter((item) => item.docid === arr1[i].docid)[0]);
            batch.delete(doc(db, "outgoing", arr1[i].docid));
        }

        
        
        
        
        batch.commit().then(() => {
            console.log("Transaction successfully committed!");
        });
    }
    


    
    



    const handleSubmit = async (email, password) => {
        const role = await getUserRole(email)
        const Llogin = await getLastlogin(email)
        

        await signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {

                updateDoc(doc(db, "users", auth.currentUser.email), {
                    Llogin : new Date(new Date().getTime())
                });

                const isNewUser = cred.user.metadata.creationTime;
                if (role === "admin" && isNewUser === cred.user.metadata.lastSignInTime) {
                    login({
                        "email": cred.user.email,
                        "role": role
                    })
                    navigate('/admin/dashboard')
                } else if (role === "admin" && isNewUser !== cred.user.metadata.lastSignInTime) {
                    login({
                        "email": cred.user.email,
                        "role": role
                    })
                    navigate('/admin/dashboard')
                }
                else{
                    notifyError("Invalid email or password")
                }
                
            })
            .catch((error) => {
                setError(error.message)
                notifyError(error.message)
            })
    }
    return (
        <>
            <ToastContainer />
            <div className={"flex items-center justify-center min-h-screen bg-gray-100"}>
                <div className="flex rounded-md shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-2xl">
                    <>
                        <div className={"px-8 py-6 text-left bg-white lg:w-3/4"}>
                            <div>
                                <img src={Logo} alt="logo" className={"w-3/4 mx-auto pb-8"} />
                                <h3 className={"text-2xl font-bold text-center"}>Welcome back, Admin!</h3>
                                <h3 className={"text-md text-center"}>Login to manage the system.</h3>
                            </div>
                            {/* {error && <Alert setAlert={setError} alert={error} />} */}
                            <Formik
                                initialValues={{ email: "", password: "" }}
                                validationSchema={LoginSchema}
                                onSubmit={values => {
                                    handleSubmit(values.email, values.password)
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className={"mt-8"}>
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
                                                <div className="border-t-2 w-80 mt-3 border-transparent " />
                                                <a href="/forgot-pass"
                                                className={"text-sm text-black-600 hover:underline mt-2 "}>Forgot
                                                    password?</a>
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

export default AdminLogin;
