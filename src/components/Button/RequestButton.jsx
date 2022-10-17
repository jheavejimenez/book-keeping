import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import { collection, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

function RequestButton({ text }) {
    const { user } = useAuth()
    const [showModal, setShowModal] = useState(false);
    const [reqfrom, setReqfrom] = useState('')
    const [file, setFile] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [purpose, setPurpose] = useState('')
    const requestCollectionRef = collection(db, "request");
    const reqby = user.email;

    const handleSubmit = async (e) => {
        e.preventDefault()
        const documentId = nanoid(5)
        await setDoc(doc(requestCollectionRef, documentId), {
            documentId,
            reqfrom,
            file,
            dueDate,
            reqby,
            purpose,
            dateReq: serverTimestamp()
        })
            .then(() => {
                    alert("Request Submitted")
                    setShowModal(false)
                }
            )
            .catch((error) => {
                    alert(error.message)
                }
            )
    }

    return (
        <>
            <button
                className={"bg-white text-blue-500 font-bold px-6 py-2 rounded inline-flex items-center"}
                type="button"
                onClick={() => setShowModal(true)}
            >
                <PlusCircleIcon className="w-7 h-7 mr-1 text-blue-500" />{text}
            </button>

            {showModal ? (
                <>
                    <div className={"justify-center items-center flex overflow-x-hidden overflow-y-auto " +
                        "fixed inset-0 z-50 outline-none focus:outline-none shadow-lg"}>
                        <div className="container mx-auto w-11/12 md:w-2/3 max-w-md">
                            {/*content*/}
                            <div
                                className="relative py-6 px-6 md:px-6 bg-white shadow-md rounded border border-gray-400">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between pb-3 border-b border-solid border-slate-200 rounded-t-md">
                                    <h3 className="text-2xl font-semi-bold text-black">
                                        Request a File
                                    </h3>
                                    <button
                                        className="p-1 ml-auto text-gray-400 hover:text-black opacity-50 float-right text-3xl leading-none font-semi-bold outline-none focus:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <XMarkIcon className="w-7 h-7" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="space-y-6 px-6 lg:px-6 pb-4 sm:pb-6 xl:pb-6">
                                    <form>
                                        <fieldset className="pt-3">
                                            <div>
                                                <label htmlFor="reqFrom" className={"text-black"}>Request From</label>
                                                <input id="reqFrom"
                                                       className={"border rounded-md mb-3 mt-1 h-10 pl-3 border-gray-400 font-normal " +
                                                           "placeholder-gray-400 text-black text-base w-full"}
                                                       placeholder="Client/User's Company Email" type="email"
                                                       onChange={(e) => setReqfrom(e.target.value)} />
                                            </div>
                                            <div>
                                                <label htmlFor="fileName" className={"text-black"}>Filename</label>
                                                <input id="fileName"
                                                       className={"border rounded-md mb-3 mt-1 h-10 pl-3 border-gray-400 font-normal " +
                                                           "placeholder-gray-400 text-black text-base w-full"}
                                                       placeholder="Transactions.xlsx / .pdf"
                                                       onChange={(e) => setFile(e.target.value)} />
                                            </div>
                                            <div>
                                                <label htmlFor="dueDate" className={"text-black"}>Set Due Date</label>
                                                <input id="dueDate"
                                                       className={"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                           + "placeholder-gray-400 text-black text-base w-full"}
                                                       type="date" onChange={(e) => setDueDate(e.target.value)} />
                                            </div>
                                            <div>
                                                <label htmlFor="reqBy" className={"text-black"}>Requested By</label>
                                                <input id="reqBy"
                                                       className={"border rounded-md mb-3 mt-1 h-10 pl-3 border-gray-400 font-normal " +
                                                           "placeholder-gray-700 text-black text-base w-full"}
                                                       placeholder={reqby} disabled />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="purpose"
                                                    className="block mb-1 text-base font-medium text-black"
                                                >
                                                    Purpose
                                                </label>
                                                <textarea
                                                    id="purpose" rows={2}
                                                    className={"block p-2.5 w-full text-base font-normal text-gray-900 rounded-lg border " +
                                                        "border-gray-400 focus:ring-blue-500 focus:border-blue-500 "}
                                                    placeholder="Your purpose..."
                                                    onChange={(e) => setPurpose(e.target.value)}
                                                />
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end pt-6 border-t border-solid border-slate-200 rounded-b-md">
                                    <button
                                        className={"text-gray-500 hover:text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm " +
                                            "outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className={"bg-blue-500 hover:bg-blue-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 " +
                                            "rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                </>
            ) : null}
        </>
    )
}

export default RequestButton;