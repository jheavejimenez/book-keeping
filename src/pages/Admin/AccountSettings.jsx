import React, { useState } from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import { KeyIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Header from "../../components/Navigation/Header";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../utils/Firebase";
import Input from "../../components/Input/Input";
import { useAuth } from "../../hooks/useAuth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Button from "../../components/Button/Button";



// import ClientTable from "../../components/Table/ClientTable";
// import Dropdown from "../../components/Button/Dropdown";
// import ButtonSendFle from "../../components/Button/ButtonSendFle";


function AccountSettings() {
    const { user } = useAuth();
    const [fileInput] = useState("");
    const [Source, setSource] = useState("../../UserDefaultImage.png");
    const [image, setImage] = useState(null);


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


    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')


    const accsetCollectionRef = collection(db, "accountsettings",);

    const add = async (e) => {
        e.preventDefault();

        await setDoc(doc(accsetCollectionRef, auth.currentUser.email), {
            email: newEmail,
            name: newName,
            image: Source
        });
        if (image === null) {
            alert("No image selected");
        } else {

            const imageRef = ref(storage, 'images/' + user);
            uploadBytes(imageRef, image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setSource(url);
                    console.log(url);
                });
            });
        }
        alert("Account settings updated");
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
                {/*<div className="mt-4 mx-4">*/}
                {/*    <div*/}
                {/*        className={"bg-blue-500 text-white shadow-lg rounded-md flex" + */}
                {/*        "items-center justify-between p-3 text-white font-medium group h-20"}>*/}
                {/*        <span className="ml-2 text-3xl font-medium tracking-wide truncate">Account Settings</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"flex mt-5 text-2xl font-bold tracking-wide border-y-4 border-blue-300 mx-5 truncate"}>
                    <span className={"ml-6 pt-2"}><UserCircleIcon className={"w-12 h-12"} /></span>
                    <span className={"ml-4 py-5"}> Edit Profile</span>
                </div>

                {/*Update information*/}
                <div className={"sm:ml-20 sm:mr-20 md:ml-10 md:mr-10 lg:ml-32 xl:ml-44 xl:mr-44" + 
                    "2xl:ml-80 2xl:mr-80"}>
                    <div className={"flex justify-between mb-5"}>
                        <span className={"text-2xl font-bold tracking-wide pt-4 truncate"}>
                            Update information 
                        </span>

                    </div>
                    <div className={"flex justify-center "}>
                        <div className={"flex justify-center"}>
                            <span className={"mt-4 border-2 border-black bg-blue-300 rounded-lg "}>
                                {Source && (
                                    <img className={"w-36 h-36"} src={Source} alt={"profile image"} />
                                )}
                            </span>
                            <div className={"inline-grid ml-9 pb-5"}>
                                <label
                                    className={"cursor-pointer bg-[#00A2E8] mt-20 text-white bg-[#00A2E8] " +
                                    "rounded-lg hover:bg-[#00A2E8] w-full mt-11"}>
                                    <p className={"mx-6 mt-1"}> Change</p>
                                    <input className={"hidden"} type="file" accept={"image/*"} 
                                    onChange={handleChange} value={fileInput} />
                                </label>
                                <label
                                    className={"cursor-pointer bg-[#00A2E8] text-white " +
                                    "rounded-lg hover:bg-[#00A2E8] h-8 w-full mt-7"}>
                                    <p className={"mx-6 mt-1"}> Remove</p>
                                    <button type="submit" onClick={removeImage} />
                                </label>
                            </div>
                        </div>
                    </div>
                    <form id="accset">
                        <div className={"flex mt-16 justify-center"}>
                            <span className={"inline-grid font-bold"}>
                                <span className={"mt-5"}>First Name:</span>
                                <span className={"mt-5"}>Last Name:</span>
                                <span className={"mt-5"}>Company Name:</span>
                            </span>
                            <span className={"inline-grid font-bold ml-5 sm:ml-24"}>
                                    <Input
                                        name="name"
                                        id="name"
                                        onChange={(e) => setNewName(e.target.value)}
                                        className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} /> <br />
                                    <Input
                                        name="name"
                                        id="name"
                                        onChange={(e) => setNewName(e.target.value)}

                                        className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} /> <br />
                                    <span className={""}>
                                        <Input
                                            name="email"
                                            id="email"
                                            onChange={(e) => setNewEmail(e.target.value)}
                                            className={"border rounded-md border-black text-black w-10 mt-4" + 
                                            "sm:w-48"} /><br />
                                    </span>

                            </span>
                        </div>
                        <div className={"flex justify-center sm:justify-end mt-16"}>
                            <button onClick={add}
                                    className={"bg-[#00A2E8] hover:bg-blue-500 text-white " +
                                        "font-normal py-1 px-4 border border-blue-500 rounded "}>
                                Save
                            </button>

                            <button
                                className={"bg-[#00A2E8] hover:bg-blue-500 font-normal text-white " +
                                    "py-1 px-4 border border-blue-500 rounded ml-3"}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/*Start of Security*/}

            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                <div className={"flex mt-5 text-2xl font-bold tracking-wide border-y-4 border-blue-300 mx-5"}>
                    <span className={"ml-6 pt-2"}><KeyIcon className={"w-12 h-12"} /></span>
                    <span className={"ml-4 py-5"}> Security</span>
                </div>
                {/*Change password*/}
                <div className={"sm:ml-20 sm:mr-20 md:ml-10 md:mr-10 lg:ml-32 xl:ml-44" +
                    "xl:mr-44 2xl:ml-80 2xl:mr-80"}>
                        <div className={"flex justify-center mt-12"}>
                            <div className={"w-full"}>
                                <div className={""}>
                                    <div className={"flex justify-between"}>
                                        <h1 className={"text-2xl font-bold tracking-wide mt-6"}>Change Email Address </h1>
                                        <span className={"sm:ml-24"}>
                                            <Button text={"Change Email Address"}/>
                                        </span>
                                    </div>
                                    <div className={"italic mt-5"}>
                                        <p>If you want to change your email address, <span className={"font-bold"}> click the button above. </span></p>
                                        <p>The system will send you an email with a link </p>
                                    </div>

                                </div>
                                <div className={"mt-12 w-full"}>
                                    <div className={"flex justify justify-between"}>
                                        <h1 className={"text-2xl font-bold tracking-wide mt-6"}>Change Password </h1>
                                        <span className={"sm:ml-24"}>
                                            <Button text={"Change Password"}/>
                                        </span>
                                    </div>
                                    <div className={"mt-8 italic "}>
                                        <p>If you want to change password, <span className={"font-bold"}> click the button above</span></p>
                                        <p>The system will send you an email with a link. Remember to use a </p>
                                        <p>strong password that you don't use on any other website </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className={"flex justify-center sm:justify-end mt-16"}>
                                <button onClick={add}
                                    className={"bg-[#00A2E8] hover:bg-blue-500 text-white " +
                                    "font-normal py-1 px-4 border border-blue-500 rounded "}>
                                    Save
                                </button>

                                <button
                                    className={"bg-[#00A2E8] hover:bg-blue-500 font-normal text-white " +
                                    "py-1 px-4 border border-blue-500 rounded ml-3"}>
                                    Cancel
                                </button>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default AccountSettings;
