import React, { useState } from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import { KeyIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Header from "../../components/Navigation/Header";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../utils/Firebase";
import Input from "../../components/Input/Input";
import { useAuth } from "../../hooks/useAuth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getAuth, sendPasswordResetEmail, updateEmail } from "firebase/auth";
import ForbiddenPage from "../Error/ForbiddenPage";


// import ClientTable from "../../components/Table/ClientTable";
// import Dropdown from "../../components/Button/Dropdown";
// import ButtonSendFle from "../../components/Button/ButtonSendFle";


function AccountSettings() {
    const {logout} = useAuth()
    const { user } = useAuth();
    const [fileInput] = useState("");
    const [Source, setSource] = useState("../../UserDefaultImage.png");
    const [image, setImage] = useState(null);
    const email = user.email;
    


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            previewFile(e.target.files[0]);

        }
    };
    console.log(user)
    console.log("image", image);

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSource(reader.result)
        }
    }

    const removeImage = () => {
        if (image === null) {
            console.log("No image selected");
        } else {
            setImage(null);
            setSource("../../UserDefaultImage.png");
        }
    }

    const change = async () => {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                alert("Password reset email sent!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorCode, errorMessage);
            });
    };


    const [fname, setFname] = useState(user.fname);
    const [lname, setLname] = useState(user.lname);
    const [company , setCompany] = useState(user.company);

    const [newEmail, setNewEmail] = useState('')



    const update = async () => {
        await updateEmail(auth.currentUser, newEmail).then(() => {
             setDoc(doc(db, "users", auth.currentUser.uid), {
                email: newEmail,
                role : user.role,
                uid : auth.currentUser.uid,

            });
            alert("Email updated");
            logout();
        
                

        }).catch((error) => {
            alert(error.message)
        })
    }
    console.log(user.email)
    

    const accsetCollectionRef = collection(db, "accountsettings",);

    const add = async (e) => {
        e.preventDefault();

        await setDoc(doc(accsetCollectionRef, auth.currentUser.email), {
            fname: fname,
            lname: lname,
            company: company,
            image: Source
        });
        if (image === null) {
            alert("No image selected");
        } else {

            const imageRef = ref(storage, 'images/' + auth.currentUser.email);
            uploadBytes(imageRef, image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setSource(url);
                    
         
                });
            });
        }
        alert("Account settings updated");
    }

    if(user.role === "admin"){
        return (
            <div
                className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiasing bg-gray-100 text-black"}>

                {/*header*/}
                <Header />

                {/*sidebar*/}
                <Sidebar />

                <div className={"flex justify-between items-center h-5 bg-white header-right"}>

                </div>

                <div className={"h-full ml-14 mt-14 mb-5 md:ml-64"}>
                    {/*<div className="mt-4 mx-4">*/}
                    {/*    <div*/}
                    {/*        className={"bg-blue-500 text-white shadow-lg rounded-md flex" + */}
                    {/*        "items-center justify-between p-3 text-white font-medium group h-20"}>*/}
                    {/*        <span className="ml-2 text-3xl font-medium tracking-wide truncate">Account Settings</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={"flex mt-5 text-3xl font-bold tracking-wide border-y-4 border-blue-300 mx-5 truncate"}>
                        <span className={"ml-6 pt-2"}><UserCircleIcon className={"w-12 h-12"} /></span>
                        <span className={"ml-4 pt-3 pb-4"}> Profile Information </span>
                    </div>

                    {/*Update information*/}
                    <div className={"sm:ml-20 sm:mr-20 md:ml-10 md:mr-10 lg:ml-32 xl:mx-64 2xl:mx-96"}>
                        <div className={"flex justify-between mb-5"}>
                            <h1 className={"text-2xl font-bold tracking-wide pt-4 truncate"}>
                                Add / Update information 
                            </h1>

                        </div>
                        <div className={"flex justify-center "}>
                            <div className={"flex justify-center"}>
                                <span className={"mt-4 border-2 border-black bg-blue-300 rounded-lg "}>
                                    {Source && (
                                        <img className={"w-36 h-36"} src={Source} alt={"profile"} />
                                    )}
                                </span>
                                <div className={"inline-grid ml-9 pb-5"}>
                                    <label
                                        className={"cursor-pointer bg-[#00A2E8] mt-20 text-white bg-blue-500 " +
                                        "rounded-lg hover:bg-blue-400 w-full mt-11"}>
                                        <p className={"mx-6 mt-1"}> Change</p>
                                        <input className={"hidden"} type="file" accept={"image/*"} 
                                        onChange={handleChange} value={fileInput} />
                                    </label>
                                    <label
                                        className={"cursor-pointer bg-blue-500 text-white " +
                                        "rounded-lg hover:bg-blue-400 h-8 w-full mt-7"}>
                                        <p className={"mx-6 mt-1"}> Remove</p>
                                        <button type="submit" onClick={removeImage} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <form id="accset">
                            <div className={"flex mt-10 justify-center"}>
                                <span className={"inline-grid font-bold"}>
                                    <span className={"mt-5"}>First Name:</span>
                                    <span className={"mt-5"}>Last Name:</span>
                                    <span className={"mt-5"}>Company Name:</span>
                                </span>
                                <span className={"inline-grid font-bold ml-7 w-96 sm:ml-24"}>
                                        <Input
                                            name="name"
                                            id="name"
                                            onChange={(e) => setFname(e.target.value)}
                                            className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} /> <br />
                                        <Input
                                            name="name"
                                            id="name"
                                            onChange={(e) => setLname(e.target.value)}

                                            className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} /> <br />
                                        <span className={""}>
                                            <Input
                                                name="email"
                                                id="email"
                                                onChange={(e) => setCompany(e.target.value)}
                                                className={"border rounded-md border-black text-black w-10 mt-4" + 
                                                "sm:w-48"} /><br />
                                        </span>

                                </span>
                            </div>
                            <div className={"flex justify-center sm:justify-end mt-10"}>
                                <button onClick={add}
                                        className={"bg-blue-500 hover:bg-blue-400 text-white " +
                                            "font-normal py-1 px-4 border border-blue-500 rounded "}>
                                    Save
                                </button>

                                <button
                                    className={"bg-blue-500 hover:bg-blue-400 font-normal text-white " +
                                        "py-1 px-4 border border-blue-500 rounded ml-3"}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/*Start of Security*/}

                <div className={"h-full ml-14 mb-10 md:ml-64"}>
                    <div className={"flex mt-5 text-3xl font-bold tracking-wide border-y-4 border-blue-300 mx-5"}>
                        <span className={"ml-6 pt-2"}><KeyIcon className={"w-12 h-12"} /></span>
                        <span className={"ml-4 pt-3 pb-4"}> Security</span>
                    </div>
                    {/*Change email and password*/}
                    <div className={"sm:ml-20 sm:mr-20 md:ml-10 md:mr-10 lg:ml-32 xl:mx-64 2xl:mx-96"}>
                        <div className={"flex justify-center mt-8"}>
                            <div className={"w-full"}>
                                <div className={""}>
                                    <div className={"flex justify-between"}>
                                        <h1 className={"text-2xl font-bold tracking-wide mt-6"}>Change Email Address </h1>
                                        <span className={"sm:ml-24"}>
                                                
                                            <Input
                                                name="name"
                                                id="name"
                                                type="email"
                                                placeHolder={"Enter new email..."}
                                                onChange={(e) => setNewEmail(e.target.value)}
                                                className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} 
                                            />

                                            <button 
                                                onClick={update}
                                                className={"py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400 w-full "} >
                                                Change Email
                                            </button>
                                        </span>
                                    </div>
                                    <div className={"italic mt-5 text-justify w-3/4"}>
                                        <p> If you want to change your email address, <strong>click the Change Email button </strong>
                                            after you enter your new email address. The system will redirect you to login 
                                            page and you will need to login again with your new email address. 
                                        </p>
                                    </div>

                                </div>
                                <div className={"mt-12 w-full"}>
                                    <div className={"flex justify justify-between"}>
                                        <h1 className={"text-2xl font-bold tracking-wide mt-6"}>Change Password </h1>
                                        <span className={"sm:ml-24"}>
                                            <button 
                                                onClick={change}
                                                className={" px-12 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-400 w-full "} >
                                                Reset Password
                                            </button>
                                        </span>
                                    </div>
                                    <div className={"mt-8 italic text-justify w-3/4"}>
                                        <p>If you want to change your password, <span className={"font-bold"}> click Reset Password button. </span>
                                            The system will send you an <strong>email with a link.</strong> Remember to use a
                                            strong password that you don't use on any other website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <ForbiddenPage/>
        )
    }
}

export default AccountSettings;
