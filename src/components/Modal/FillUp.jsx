import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

function FillUp() {
    const [showModal, setShowModal] = React.useState(false); //  this line should be useState instead of React.useState

    return (
        <>
            <button
                type="button"
                onClick={() => setShowModal(true)}
            >
                <PencilSquareIcon className="w-7 h-7 text-blue-500" />
            </button>

            {showModal && (
                <>
                    <div className={"justify-center items-center flex overflow-x-hidden overflow-y-auto " +
                        "fixed inset-0 z-50 outline-none focus:outline-none shadow-lg"}>
                        <div className="container mx-auto w-11/12 md:w-2/3 max-w-md">
                            {/*content*/}
                            <div
                                className={"relative py-6 px-6 md:px-6 bg-white shadow-md rounded" + 
                                "border border-gray-400"}>
                                {/*header*/}
                                <div
                                    className={"flex flex-col items-center justify-center pb-3 border-b" + 
                                    "border-solid border-slate-200 rounded-t-md"}>
                                    <h3 className="text-2xl font-bold text-black">
                                        Hello, welcome!
                                    </h3>
                                    <p className="text-black">
                                        Let's get started! Fill-up the needed information
                                        and you're good to go.
                                    </p>
                                </div>
                                {/*body*/}
                                <div className="space-y-6 px-6 lg:px-6 pb-4 sm:pb-6 xl:pb-6">
                                    <form>
                                        <fieldset className="pt-3 ">
                                            <FillUp
                                                titleFor="firstName"
                                                title="First Name"
                                                titleID="firstName"
                                                placeholder="e.g. John"
                                            />
                                            {/* <div>
                                                <div className="flex flex-start">
                                                    <label
                                                        htmlFor="firstName"
                                                        className={"justify-start flex text-black"}
                                                    >
                                                        First Name
                                                    </label>
                                                    <label className="text-red-500">*</label>
                                                </div>
                                                <input id="firstName"
                                                    className={"border rounded-md mb-3 mt-1 h-10 pl-3" + 
                                                    "border-gray-400 font-normal placeholder-gray-400" + 
                                                    "text-black text-base w-full"}
                                                    placeholder="e.g. John" 

                                                />
                                            </div> */}
                                            <FillUp
                                                titleFor="fileName"
                                                title="File Name"
                                                titleID="fileName"
                                                placeholder="e.g. John.pdf"
                                            />
                                            {/* <div>
                                                <div className="flex flex-start">
                                                    <label for="fileName" 
                                                        className={"justify-start flex text-black"}
                                                    >
                                                        File Name
                                                    </label>
                                                    <label className="text-red-500">*</label>
                                                </div>
                                                <input id="fileName"
                                                    className={"border rounded-md mb-3 mt-1 h-10 pl-3" + 
                                                    "border-gray-400 font-normal placeholder-gray-400" + 
                                                    "text-black text-base w-full"}
                                                    placeholder="e.g. John.pdf" 
                                                />
                                            </div> */}
                                            <FillUp
                                                titleFor="companyName"
                                                title="Company Name"
                                                titleID="companyName"
                                                placeholder="e.g. XYZ Company"
                                            />
                                            {/* <div>
                                                <div className="flex flex-start">
                                                    <label for="companyName"
                                                           className={"justify-start flex text-black"}
                                                        >
                                                            Company Name
                                                        </label>
                                                    <label className="text-red-500">*</label>
                                                </div>
                                                <input id="companyName"
                                                    className={"border rounded-md mb-3 mt-1 h-10 pl-3" + 
                                                    "border-gray-400 font-normal placeholder-gray-400" + 
                                                    "text-black text-base w-full"}
                                                    placeholder="e.g. XYZ Company"     
                                                />
                                            </div> */}
                                            {/*footer*/}
                                            <div className="pt-3 flex items-center justify-center">
                                                <button
                                                    className={"bg-blue-500 hover:bg-blue-400 text-white" + 
                                                    "active:bg-emerald-600 font-bold uppercase text-sm" + 
                                                    "rounded-md mb-3 mt-1 h-10 pl-3 border-gray-400 font-normal" +
                                                    "placeholder-gray-400 text-white text-base shadow" +
                                                    "hover:shadow-lg outline-none focus:outline-none"+
                                                    "ease-linear transition-all duration-150 w-full"}
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Continue
                                                </button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>

    )
}

export default FillUp;