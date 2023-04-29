import React, { useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ChooseStatusOptions from '../Options/ChooseStatusOptions'
import ChangeStatus from "../Button/ChangeStatus";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../hooks/useAuth";
import { collection, getDocs, limit, limitToLast, orderBy, query, startAfter, endBefore, startAt, where, setDoc,doc, updateDoc} from "firebase/firestore";
import { db } from "../../utils/Firebase";


function TableRow({ Column1, Column2, Column3, Column4, Column5, Column6, status  }) {
    let colors;

    switch (status) {
        case "Pending":
            colors = "text-white bg-[#EBB000]";
            break;
        case "Completed":
            colors = "text-white bg-[#28A745]";
            break;
        case "In Progress":
            colors = "text-white bg-[#1F6CDE]";
            break;
        case "New":
            colors = "text-white bg-[#DC3545]";
            break;
        default:
            colors = "text-gray-700 bg-gray-100";
    }

    const {user} = useAuth()
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const notify = () => {
        
        toast.info("Status has been changed", {
            position: "top-center",
            autoClose: 3000, // auto close after 5 seconds
        onClose: () => {
            setTimeout(() => {
            window.location.reload(); // reload window after toast is closed
            }, 3000);
        },
    }   
    
    );
     
    }

    

    // const getdocumentId = async () => {
    //     const q = query(collection(db, "request"), where("documentId", "==", Column1));
    //     const querySnapshot = await getDocs(q);
    //     if (querySnapshot.empty) {
    //         setError("No matching documents.");
    //     }
    //     console.log(querySnapshot.docs[0].data().documentId)
    //     return querySnapshot.docs[0].data().documentId
        
    // }
    const handleDelete = async (e) => {
        e.preventDefault();
        // const Docid = await getdocumentId()
        await setDoc(doc(db, "request", Column1), {
            Status: document.getElementById("status").value,
            
        }, { merge: true });
        notify()
        
        // console.log(ref.value)
        
    }
    
   
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <ToastContainer />
            <tr className={"hover:bg-gray-300 text-black"}>
                <td className={"px-4 py-3 text-sm"}>{Column1}</td>
                <td className={"px-4 py-3 text-sm"}>{Column2}</td>
                <td className={"px-4 py-3 text-sm"}>{Column3}</td>
                <td className={"px-4 py-3 text-sm"}>{Column4}</td>
                <td className={"px-4 py-3 text-sm"}>{Column5}</td>
                <td className={"px-4 py-3 text-sm"}>{Column6}</td>
                <td className={"px-4 py-3 text-sm"}>
                    <span className={`px-2 py-1 font-semibold leading-tight ${colors} rounded-none`}>
                        {status}
                    </span>
                </td>
                <td className={"flex justify-center items-center w-14 h-14"}>
                    <>
                        <button
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            <PencilSquareIcon className={" w-6 h-6 text-blue-500 group-hover:text-blue-700 "} />
                        </button>
                        {showModal && (
                            <>
                                <div
                                    className={" flex justify-center items-center flex overflow-x-hidden overflow-y-auto " + 
                                    " fixed inset-0 z-50 outline-none focus:outline-none shadow-lg "}>
                                    <div className=" container w-72 my-6 md:w-80 mx-auto max-w-md ">
                                    
                                        {/*content*/}
                                        <div className={" relative py-6 px-6 md:px-6 bg-white shadow-md rounded-lg border " +
                                            " border-gray-400 "}
                                        >
                                            {/*header*/}
                                            <div
                                                className={" flex items-start justify-between p-3 border-b border-solid " + 
                                                " border-slate-200 rounded-t-md "}
                                            >
                                                <h3 className="text-2xl font-bold text-black">
                                                    Edit Status
                                                </h3>

                                                <button
                                                    className={" p-1 ml-auto text-gray-400 hover:text-black opacity-50 " + 
                                                    " float-right text-3xl leading-none font-semi-bold outline-none " + 
                                                    " focus:outline-none "}
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <XMarkIcon className="w-7 h-7" />
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div
                                                className={"space-y-6 px-6 lg:px-6 pb-4 sm:pb-6 xl:pb-6 " + 
                                                "items-center justify-center"}
                                                >
                                                <form className={"flex flex-col px-5 pt-5"}>
                                                    <label className={" font-bold mr-5 "}> 
                                                        Progress Status 
                                                    </label>

                                                    <Menu as="div" className="relative inline-block text-left ">
                                                        
                                                        <div>
                                                            <Menu.Button className={" inline-flex justify-center rounded-md border border-gray-300 " +
                                                                " bg-white px-2 py-2 text-sm font-medium text-gray-400 shadow-sm hover:bg--50" + 
                                                                " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 h-auto " + 
                                                                " w-40 md:w-48 "}
                                                            >
                                                                <select className='w-40 md:w-48' name="status" id="status">
                                                                    <option value="Pending">Pending</option>
                                                                    <option value="In Progress">In Progress</option>
                                                                    <option value="Completed">Completed</option>
                                                                    <option value="New">New</option>
                                                                </select>
                                                                

                                                            </Menu.Button>

                                                        </div>
                                                        <button type="submit" onClick={handleDelete} className={" bg-blue-500 hover:bg-blue-700 " + 
                                                        "text-white font-bold mt-4 h-10 w-40 md:w-48 rounded-md "}>Submit</button>

                                                    </Menu>
                                                    
                                                </form>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-center pt-2 sm:pt-2 lg:pt-1">
                                                <button
                                                    className={" text-blue-500 background-transparent font-bold " + 
                                                    " uppercase px-6 py-2 text-sm " + 
                                                    " outline-none focus:outline-none mr-1 mb-1 ease-linear " + 
                                                    " transition-all duration-150 "}
                                                    type=" button "
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        )}
                    </>
                </td>

            </tr>
        </>
    )
    
}

export default TableRow;
