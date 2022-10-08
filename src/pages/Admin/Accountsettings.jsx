import React from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import {UserCircleIcon} from "@heroicons/react/24/outline";
import Button from "../../components/Button/Button";
import Header from "../../components/Navigation/Header";
import { collection, setDoc, getDocs, query, where, doc } from "firebase/firestore"; 
import { db } from "../../utils/Firebase";
import Uploadimage from "../../components/UploadImage/Uploadimage";
import Input from "../../components/Input/Input";
import { sendEmailVerification } from 'firebase/auth'
import { auth } from '../../utils/Firebase'
import { updateEmail   } from 'firebase/auth'


// import ClientTable from "../../components/Table/ClientTable";
// import Dropdown from "../../components/Button/Dropdown";
// import ButtonSendFle from "../../components/Button/ButtonSendFle";




function Accountsettings() {
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const settings = document.getElementById("accset")
        

        await db.collection('accset').doc( 'accset' ).set({
            email: settings['email'].value,
            company: settings['company'].value,
            name: settings['name'].value,
        })
        .then(() => {
            console.log('Document successfully written!');
        })
        .catch((error) => {
            console.error('Error writing document: ', error);
        }
        );




        
    }

        

    const verify = (e) => {
        const email = document.getElementById("email").value
        e.preventDefault();
         sendEmailVerification(email).then(() => {
            alert("Email verification sent")
        })
            
    }
    
    




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
                <div className={"flex mt-5 text-2xl font-bold tracking-wide border-y-4 border-sky-200 w-full"}>
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
                    <form onSubmit={handleSubmit} id="accset" >
                        <div className={"flex mt-16"}>
                            <span className={"inline-grid font-bold"}>
                                <span className={"my-1"}>Name:</span>
                                <span className={"my-3"}>Company:</span>
                                <span className={"my-2"}>Email:</span>
                            </span>
                            <span className={"inline-grid font-bold ml-5 sm:ml-24"}>
                                    <Input 
                                    name="name"
                                     id="name" 
                                     className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} /> <br/>

                                    <Input 
                                    name="company"
                                     id="company"
                                      className={"border rounded-md border-black text-black w-36 mt-2 sm:w-80"} /><br/>
                                    <span className={""}>
                                        <Input
                                         name="email"
                                          id="email" 
                                          className={"border rounded-md border-black text-black w-10 mt-4 sm:w-48"} /><br/>
                                        <button onClick={verify} className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-5 border border-blue-500 rounded ml-56 mt-5">
                                        Verify
                                        </button>
                                    </span>

                            </span>
                        </div>
                    
                        <div className={"flex justify-center sm:justify-end mt-16"}>
                            <button  className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded">
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