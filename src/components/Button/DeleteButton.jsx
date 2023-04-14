import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

function DeleteButton({ attr, warning, title }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className={" text-gray-900 bg-gray-100 hover:bg-red-200 hover:text-red-700 border border-gray-400 focus:ring-4 " + 
                " focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mt-4 focus:outline-none "}
                type={"button"}
                onClick={() => setShowModal(true)}>
                    Delete
            </button>

            {showModal && (
                <>
                    <div className={" justify-center items-center flex overflow-x-hidden overflow-y-auto " +
                        " fixed inset-0 z-50 outline-none focus:outline-none shadow-lg "}>
                        <div className="container mx-auto w-11/12 md:w-2/3 max-w-md">
                            {/*content*/}
                            <div
                                className={" relative py-6 px-6 md:px-6 bg-white shadow-md rounded border" +
                                "border-gray-400"}>
                                {/*header*/}
                                <div
                                    className={" flex items-start justify-between pb-3 border-b border-solid " + 
                                    " border-slate-200 rounded-t-md "}>
                                    <h3 className="text-2xl font-semibold text-black">
                                        {title}
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="space-y-6 px-2 lg:px-2 pb-4 pt-6 sm:pb-6 xl:pb-6">
                                    <div className="pl-5 py-2 bg-red-100 inline-flex items-center">
                                        <ExclamationTriangleIcon className="w-14 h-14 mr-2 text-red-600" />
                                        <h5 className="pr-4 lg:pr-2 text-sm font-medium text-red-700">
                                            {warning}
                                        </h5>
                                    </div>
                                    
                                </div>
                                {/*footer*/}
                                <div
                                    className={" flex items-center justify-end pt-2 sm:pt-6 lg:pt-1 rounded-b-md  "}>
                                    <button
                                        className={" text-gray-500 hover:text-blue-500 background-transparent " + 
                                        " font-bold uppercase px-6 py-2 text-sm mr-1 mb-1 ease-linear " + 
                                        " transition-all duration-150 "}
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    
                                    <button
                                        className={" bg-red-500 hover:bg-red-700 text-white active:bg-red-900 "
                                        + " font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg " + 
                                        " mr-1 mb-1 ease-linear transition-all duration-150 "}
                                        type="button"
                                        onClick={attr}
                                    >
                                        Delete
                                    </button>
                                           
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                   
                </>
                
                
            )}

        </>
        
    )
}

export default DeleteButton;