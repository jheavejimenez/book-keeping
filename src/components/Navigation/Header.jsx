/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { ArrowRightOnRectangleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/Firebase";

function Header() {
	const {logout} = useAuth()
    const {user} = useAuth()
    const [imgUrl , setImgUrl] = useState('')
    const userprofile = (doc(db, "accountsettings", user.email ));
    useEffect(() => {
        onSnapshot(userprofile, (doc) => {
            setImgUrl(doc.data().image)
        })
    }, [imgUrl, userprofile])


    return (
        <div className={" fixed w-full flex items-center justify-between h-14 text-white bg-blue-400 z-10 "}>
        	<div
                className={" flex items-center justify-start " +
                    " md:justify-center pl-3 w-14 md:w-64 h-14 " +
                    " bg-blue-400 text-white border-none "}
            >
                <img className={" w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden "}
                    src={imgUrl} onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg";
                      }} />

                <span className="truncate hidden md:block">{user.email}</span>
            </div>

            <div className={" flex justify-between items-center h-14 bg-blue-400 text-black header-right "}>
                <div
                    className={"bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm" + 
                    "border border-gray-200"}>
                    
                    <button className={"outline-none focus:outline-none"}>
                        <MagnifyingGlassIcon className={"w-5 h-5 text-gray-500"} />
                    </button>

                    <input type="search" name="" id="" placeholder="Search" className={"w-full pl-3" + 
                    "text-sm text-black outline-none focus:outline-none bg-transparent"} />
                </div>
                <ul className={"flex items-center"}>
                    <li>
                    	<button 
                            onClick={logout}
                            key="logout"
                            className={" flex items-center mr-4 text-white hover:text-gray-700 "}
                        >
                            <span className={"inline-flex mr-1"}>
                                <ArrowRightOnRectangleIcon className={"h-5 w-5"} aria-hidden="true" />
                            </span>
                            
                            logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )

}



export default Header;