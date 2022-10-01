import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import {UserIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import Button from "../../components/Button/Button";
// import ClientTable from "../../components/Table/ClientTable";
// import Dropdown from "../../components/Button/Dropdown";
// import ButtonSendFle from "../../components/Button/ButtonSendFle";

function Accountsettings() {
    return (
        <div
            className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiasing bg-gray-100 text-black"}>

            {/*header*/}
            <div className={"fixed w-full flex items-center justify-between h-14 text-white bg-blue-400 z-10"}>
                <div
                    className={"flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-400 text-white border-none"}>
                    <img className={"w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"}
                         src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" alt="" />
                    <span className="hidden md:block">ADMIN</span>
                </div>
                <div className={"flex justify-between items-center h-14 bg-blue-400 text-black header-right"}>
                    <div
                        className={"bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200"}>
                        <button className={"outline-none focus:outline-none"}>
                            <svg className={"w-5 text-gray-600 h-5 cursor-pointer"} fill="none" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                        <input type="search" name="" id="" placeholder="Search"
                               className={"w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"} />
                    </div>
                    <ul className={"flex items-center"}>
                        <li>
                            <a href="#" className={"flex items-center mr-4 text-white hover:text-blue-800"}>
                                <span className={"inline-flex mr-1"}>
                                    <svg className={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">

                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                        </path>
                                    </svg>
                                </span>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/*end of header*/}

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
                    <div className={"flex"}>
                        <span className={"mt-4 pt-2 z-10 border-4 border-sky-200 sm:ml-20 md:ml-32 lg:ml-64 xl:ml-64 2xl:ml-96"}><UserIcon className={"w-24 h-24"}/></span>
                        <span className={"inline-grid"}>
                            <button className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded ml-3 mt-5">
                                       Change
                            </button>
                            <button className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded ml-3 mt-5">
                                       Remove
                            </button>
                        </span>
                    </div>
                    <div className={"flex mt-16"}>
                         <span className={"inline-grid font-bold"}>
                            <span className={"my-2"}>Name:</span>
                            <span className={"my-3"}>Company:</span>
                            <span className={"my-2"}>Email:</span>
                        </span>
                        <span className={"inline-grid font-bold ml-5 sm:ml-24"}>
                                <input name="name" className={"border rounded-md border-black text-black w-36 my-2 sm:w-80"} />
                                <input name="Company" className={"border rounded-md border-black text-black w-36 mt-2 sm:w-80"} />
                                <span className={""}>
                                    <input name="Email" className={"border rounded-md border-black text-black w-10 mt-4 sm:w-48"} />
                                    <button className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded ml-3">
                                       Verify
                                    </button>
                                </span>

                        </span>
                    </div>
                    <div className={"flex justify-center sm:justify-end mt-16"}>
                        <button className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded">
                            Save
                        </button>
                        <button className="bg-[#00A2E8] hover:bg-blue-500 text-white font-normal py-1 px-4 border border-blue-500 rounded ml-3">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accountsettings;