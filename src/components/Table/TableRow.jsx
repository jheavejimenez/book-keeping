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
            <td className={"px-4 py-3 text-xs"}>{Column4}</td>
            <td className={"px-4 py-3 text-xs"}>{Column5}</td>
            <td className={"px-4 py-3 text-xs"}>{Column6}</td>
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
                        " fixed inset-0 z-50 outline-none focus:outline-none "}>
                        {/* <div className=" w-1/4 my-6 md:w-2/3 mx-auto max-w-md "> */}
                        
                            {/*content*/}
                            <div className={" flex justify-center border-0 rounded-lg " +
                                " shadow-lg absolute m-auto flex-col md:shrink w-auto " +
                                " bg-white outline-none focus:outline-none "}
                            >
                                {/*header*/}
                                <div
                                    className={" flex items-center sm:items-start p-5 " + 
                                    " border-b border-solid border-slate-200 rounded-t "}
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
                                    className={" flex space-y-6 px-6 lg:px-6 pb-4 sm:pb-6 xl:pb-6 " + 
                                    "items-center justify-center p-5 "}
                                    >
                                    <form className={" relative space-y-3.5 w-auto shrink "}>
                                        <label className={" font-bold mr-2 "}> 
                                            Progress Status 
                                        </label>

                                        <Menu as="div" className=" inline-block text-left ">

                                            <div>
                                                <Menu.Button className={" relative inline-flex justify-center rounded-md border border-gray-300 " +
                                                    " bg-white px-2 py-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50" + 
                                                    " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 h-auto " + 
                                                    " w-auto shrink "}
                                                >
                                                     <select  name="status" id="status">
                                                            <option value="Pending">Pending</option>
                                                            <option value="In Progress">In Progress</option>
                                                            <option value="Completed">Completed</option>
                                                            <option value="New">New</option>
                                                    </select>
                                                    

                                                </Menu.Button>

                                            </div>
                                            <button type="submit" onClick={handleDelete} className={" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "}>submit</button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    className={" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg " +
                                                        " ring-1 ring-black ring-opacity-5 focus:outline-none "}
                                                >
                                                    <div className="py-1">

                                                        {/* Option 1 */}
                                                        
                                                        {/* <ChooseStatusOptions Option={"Pending"} onClick={() => path(attr)} />

                                                        {/* Option 2 */}
                                                        {/* <ChooseStatusOptions Option={"In Progress"} onClick={() => path(attr)}  /> */}

                                                        {/* Option 3 */}
                                                        {/* <ChooseStatusOptions Option={"Completed"}  onClick={() => path(attr)} /> */}

                                                        {/* Option 4 */}
                                                        {/* <ChooseStatusOptions Option={"New"} onClick={() => path(attr)}  /> */}

                                                       


                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                        
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-2">
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
                        {/* </div> */}
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
