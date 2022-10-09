import React from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import {UserCircleIcon, KeyIcon} from "@heroicons/react/24/outline";
import Button from "../../components/Button/Button";
import Header from "../../components/Navigation/Header";
import { collection, setDoc, getDocs, query, where, doc, addDoc } from "firebase/firestore"; 
import { db } from "../../utils/Firebase";
import Uploadimage from "../../components/UploadImage/Uploadimage";
import Input from "../../components/Input/Input";
import { sendEmailVerification } from 'firebase/auth'
import { auth } from '../../utils/Firebase'
import { updateEmail   } from 'firebase/auth'
import { useState, useEffect } from "react";


// import ClientTable from "../../components/Table/ClientTable";
// import Dropdown from "../../components/Button/Dropdown";
// import ButtonSendFle from "../../components/Button/ButtonSendFle";




function Accountsettings() {
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newCompany, setNewCompany] = useState('')
    const [user, setUser] = useState([]);
    const accsetCollectionRef = collection(db, "accountsettings",);

    const add = async (e) => {
        e.preventDefault();
        await addDoc(accsetCollectionRef, { name: newName, email: newEmail, company: newCompany }, { merge: true });
    }
    

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(collection(db, "users"));
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);









    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const settings = document.getElementById("accset")
        

    //     await db.collection('accset').doc( 'accset' ).set({
    //         email: settings['email'].value,
    //         company: settings['company'].value,
    //         name: settings['name'].value,
    //     })
    //     .then(() => {
    //         console.log('Document successfully written!');
    //     })
    //     .catch((error) => {
    //         console.error('Error writing document: ', error);
    //     }
    //     );




        
    // }

        

    // const verify = (e) => {
    //     const email = document.getElementById("email").value
    //     e.preventDefault();
    //      sendEmailVerification(email).then(() => {
    //         alert("Email verification sent")
    //     })
            
    // }
    
    




    return (
        <div
            className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiasing bg-gray-100 text-black"}>

            {/*header*/}
            <Header />

            {/*sidebar*/}
            <Sidebar />

            <div className={"flex justify-between items-center h-14 bg-white header-right"}>

            </div>

            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                <div className="mt-4 mx-4">
                    <div className={"bg-blue-500 text-white shadow-lg rounded-md flex items-center justify-between p-3 text-white font-medium group h-20"}>
                        <span className="ml-2 text-3xl font-medium tracking-wide truncate">Account Settings</span>
                    </div>
                </div>
                <div className={"flex mt-5 text-2xl font-bold tracking-wide border-y-4 border-blue-500 w-full"}>
                    <span className={"ml-6 pt-2"}><UserCircleIcon className={"w-12 h-12"}/></span>
                    <span className={"ml-4 py-5"}> Edit Profile</span>
                </div>
                {/*Update information*/}
                <div className={"sm:ml-20 sm:mr-20 md:ml-10 md:mr-10 lg:ml-32 xl:ml-44 xl:mr-44 2xl:ml-80 2xl:mr-80"}>
                    <div className={"flex justify-between mb-5"}>
                        <span className={"text-2xl font-bold tracking-wide pt-4 truncate"}>Update information </span>
                        <span><Button text={"Edit"}/></span>
                    </div>
                    <div className={"flex justify-center "}>
                        <Uploadimage/>
                    </div>
                    <form  id="accset" >
                        <div className={"flex mt-16"}>
                            <span className={"inline-grid font-bold"}>
                                <span className={"mt-5"}>Name:</span>
                                <span className={"mb-5"}>Email:</span>
                            </span>
                            <span className={"inline-grid font-bold ml-5 sm:ml-24"}>
                                    <Input 
                                    name="name"
                                     id="name" 
                                     onChange={(e) => setNewName(e.target.value)}

                                     className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} /> <br/>
                                    <span className={""}>
                                        <Input
                                         name="email"
                                          id="email" 
                                          onChange={(e) => setNewEmail(e.target.value)}
                                          className={"border rounded-md border-black text-black w-10 mt-4 sm:w-48"} /><br/>
                                        <button className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-5 border border-blue-500 rounded ml-56">
                                        Verify
                                        </button>
                                    </span>

                            </span>
                        </div>
                        <div className={"flex justify-center sm:justify-end mt-16"}>
                            <button onClick={add} className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded">
                                Save
                            </button>
                            <button className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded ml-3">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/*Start of Security*/}

            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                <div className={"flex mt-5 text-2xl font-bold tracking-wide border-y-4 border-blue-500 w-full"}>
                    <span className={"ml-6 pt-2"}><KeyIcon className={"w-12 h-12"}/></span>
                    <span className={"ml-4 py-5"}> Security</span>
                </div>
                {/*Change password*/}
                <div className={"sm:ml-20 sm:mr-20 md:ml-10 md:mr-10 lg:ml-32 xl:ml-44 xl:mr-44 2xl:ml-80 2xl:mr-80"}>
                    <div className={"flex justify-between mb-5"}>
                        <span className={"text-2xl font-bold tracking-wide pt-4 truncate"}>Change Password </span>
                        <span><Button text={"Edit"}/></span>
                    </div>
                    <div className={"flex justify-center "}>
                        <p className={"italic"}> Use a strong password that you dont use on any other website</p>
                    </div>
                    <form  id="accset1" >
                        <div className={"flex mt-16"}>
                            <span className={"inline-grid font-bold"}>
                                <span className={"mt-5"}>Current Password:</span>
                                <span className={"mt-4"}>New Password:</span>
                                <span className={"mt-5"}>Confirm Password:</span>
                            </span>
                            <span className={"inline-grid font-bold ml-5 sm:ml-24"}>
                                    <Input
                                        name="currentpassword"
                                        id="cpass"
                                        className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} /> <br/>
                                 <Input
                                     name="newpassword"
                                     id="npass"
                                     onChange={(e) => setNewName(e.target.value)}
                                     className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} /> <br/>
                                    <span className={""}>
                                        <Input
                                            name="email"
                                            id="email"
                                            onChange={(e) => setNewEmail(e.target.value)}
                                            className={"border rounded-md border-black text-black w-10 mt-4 sm:w-48"} /><br/>
                                    </span>

                            </span>
                        </div>
                        <div className={"flex justify-center sm:justify-end mt-16"}>
                            <button onClick={add} className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded">
                                Save
                            </button>
                            <button className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded ml-3">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Accountsettings;