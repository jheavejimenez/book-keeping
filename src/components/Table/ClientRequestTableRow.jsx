import React, { useState, useRef } from 'react'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../../utils/Firebase";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { nanoid } from "nanoid";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function ClientRequestTableRow({ Column1, Column2, Column3, Column4, Column5, Column6,recipient }) {
    const Success = () => {
        toast.success("File Sent", {
            position: "top-center",
            autoClose: 3000, // auto close after 5 seconds
            onClose: () => {
                setTimeout(() => {
                window.location.reload(); // reload window after toast is closed
                }, 3000);
            },

        });

    }
    const notifyQue = () => {
        toast.warning("File Scan has been queued please wait for a moment and try again later with the same file", {
            position: "top-center",
            autoClose: 5000
    }
        
    );
    }
    const Error = () => {
        toast.error("no file selected", {
            position: "top-center",

        });
    }
    const [showModal, setShowModal] = useState(false);
    const [newEmail, setNewEmail] = useState(Column2);
    const {user} = useAuth()
    const [newFile, setNewFile] = useState(null)
    const [purpose, setPurpose] = useState('')
    const inputRef = useRef()
    const OutgoingsetCollectionRef = collection(db, "outgoing",);
    const auditTrailCollectionRef = collection(db, "audittrail",);
    const documentId = nanoid(5)
    const now = new Date();
    const fiveYearsFromNow = new Date(now.getTime() + 5 * 365 * 24 * 60 * 60 * 1000);
    const timestamp = fiveYearsFromNow

    const add = async (e) => {
        e.preventDefault();

        if (newFile === null) {
            Error()
        } else {
            
            const imageRef = ref(storage, 'files/' + newFile.name); 
            uploadBytes(imageRef, newFile).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setNewFile(url)
                    Success()
                    
            

                    setDoc(doc(OutgoingsetCollectionRef, documentId), {
                        docid : documentId,
                        sentby: auth.currentUser.email,
                        email: newEmail,
                        filename: newFile.name,
                        file: url,
                        purpose,
                        date: serverTimestamp(),
                        fileexpiry: timestamp,
                        location: "Outgoing",
                        location1:"Incoming",
                       
                    });

                    setDoc(doc(auditTrailCollectionRef, documentId), {
                        time : serverTimestamp(),
                        user : user.email,
                        activity : "Sent a file:  " + newFile.name,
                    });

                    
                    
                    
                });
            });
        }
        
        
        
    }

    const [scanResult, setScanResult] = useState(null);
    const [scanStatus, setScanStatus] = useState(null);
    
    const handleScan = async (e) => {
        e.preventDefault();
        setScanStatus('Scanning...');
        const formData = new FormData();
        formData.append('file', inputRef.current.files[0]);
        try {

        const response = await axios.post(process.env.REACT_APP_VIRUSTOTAL_API_URL, formData, {
            
            headers: {
                'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data',
            'x-apikey': process.env.REACT_APP_VIRUSTOTAL_API_KEY
            }
        });
        const getData = await axios.get(response.data.data.links.self,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'x-apikey': process.env.REACT_APP_VIRUSTOTAL_API_KEY
            }
        });
        setScanResult(getData);
        if (getData.data.data.attributes.status === 'queued'){
            notifyQue();
            setScanStatus(getData.data.data.attributes.status)
        }
        else{
            setScanStatus(getData.data.data.attributes.status)
        }
        } catch (error) {
            setScanStatus('Scan Failed');
            }
        
    };
    
    
    // console.log(scanResult);
    // console.log(scanStatus);

    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{Column1}</td>
            <td className={"px-4 py-3 text-sm"}>{Column2}</td>
            <td className={"px-4 py-3 text-sm"}>{Column3}</td>
            <td className={"px-4 py-3 text-sm"}>{Column4}</td>
            <td className={"px-4 py-3 text-sm"}>{Column5}</td>
            <td className={"px-4 py-3 text-sm"}>{Column6}</td>
            <td className={"flex justify-center items-center w-14 h-14 ml-3"}>
                <button className={"w-10 h-10 bg-white rounded-full hover:bg-blue-200"}
                    type="button" onClick={() => setShowModal(true)}>
                    <PaperAirplaneIcon className="w-6 h-6 ml-2 -rotate-45 text-blue-500"/>
                </button>

                <ToastContainer />
                {showModal && (
                    <>
                        <div className={" justify-center items-center flex overflow-x-hidden overflow-y-auto " +
                            " fixed inset-0 z-50 outline-none focus:outline-none shadow-lg "}
                        >
                            <div className="container mx-auto w-11/12 md:w-2/3 max-w-md">
                                {/*content*/}
                                <div
                                    className={" relative py-6 px-6 md:px-6 bg-white shadow-md " + 
                                    " rounded border border-gray-400 "}
                                >
                                    {/*header*/}
                                    <div
                                        className={" pb-3 border-b border-solid border-slate-200 rounded-t-md "}>
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-2xl font-semi-bold text-black">
                                                Send a New File
                                            </h3>
                                            <button
                                                className={" p-1 ml-auto text-gray-400 hover:text-black opacity-50 " +
                                                " float-right text-3xl leading-none font-semi-bold outline-none "+
                                                " focus:outline-none "}
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <XMarkIcon className=" w-7 h-7" />
                                            </button>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 text-sm">
                                                Fields with <span style={{color: "red"}}> *</span> are required.
                                            </p>
                                        </div>
                                    </div>
                                    {/*body*/}
                                    <div className="space-y-6 px-6 lg:px-6 pb-4 sm:pb-6 xl:pb-6">
                                        <form>
                                            <fieldset className="pt-3">
                                                <div>
                                                    <label htmlFor="reqFrom" className={" text-black "}>
                                                        Sent by: <span style={{color: "red"}}> *</span>
                                                    </label>
                                                    <input id="reqFrom"
                                                        className={" border rounded-md mb-3 mt-1 h-10 " + 
                                                        " pl-3 border-gray-400 font-normal " +
                                                        " placeholder-gray-400 text-black text-base w-full "}
                                                        type="email"
                                                        placeholder="Enter recipient email"
                                                        value={user.email}
                                                        disabled
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="reqFrom" className={" text-black "}>
                                                        Recipient <span style={{color: "red"}}> *</span>
                                                    </label>
                                                    <input id="reqFrom"
                                                        className={" border rounded-md mb-3 mt-1 h-10 " + 
                                                        " pl-3 border-gray-400 font-normal " +
                                                        " placeholder-gray-400 text-black text-base w-full "}
                                                        type="email"
                                                        value={Column2}
                                                        disabled
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="fileName" className={" text-black "}>
                                                        Attach files <span style={{color: "red"}}> *</span>
                                                    </label>
                                                    <input id="fileName"
                                                        className={" border rounded-md mb-3 mt-1 h-10 " + 
                                                        " pl-3 pt-1 border-gray-400 font-normal " +
                                                        " placeholder-gray-400 text-black text-base w-full "}
                                                        type={"file"}
                                                        accept={".pdf, .xls, .xlsx, .doc, .docx"}
                                                        ref={inputRef}
                                                        onChange={(e) => setNewFile(inputRef.current.files[0])}
                                                        
                                                    />
                                                    <div className="flex space-x-2">
                                                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                                                            onClick={handleScan}
                                                        >
                                                            Scan
                                                        </button>
                                                        <p className='text-gray-500 py-2 px-4 rounded'>{scanStatus}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="purpose"
                                                        className="block mb-1 mt-3 text-base font-medium text-black"
                                                    >
                                                        Purpose <span style={{color: "red"}}> *</span>
                                                    </label>
                                                    <textarea
                                                        id="purpose" rows={1}
                                                        className={" block p-2.5 w-full text-base font-normal "+
                                                        " text-gray-900 rounded-lg border border-gray-400 " + 
                                                        " focus:ring-blue-500 focus:border-blue-500 "}
                                                        placeholder="Your purpose..."
                                                        onChange={(e) => setPurpose(e.target.value)}
                                                    />
                                                </div>

                                            </fieldset>
                                        </form>
                                    </div>
                                    {/*footer*/}
                                    <div
                                        className={" flex items-center justify-end pt-6 border-t " + 
                                        "border-solid border-slate-200 rounded-b-md"}>
                                        <button
                                            className={" text-gray-500 hover:text-blue-500 " + 
                                            " background-transparent font-bold uppercase px-6 py-2 text-sm " +
                                            " outline-none focus:outline-none mr-1 mb-1 ease-linear " + 
                                            " transition-all duration-150 "}
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        {scanResult === null || scanStatus === 'queued' || scanStatus === 'Scanning...' ? (
                                            <button
                                                className={" bg-gray-500 hover:bg-gray-400 text-white " +
                                                " active:bg-emerald-600 font-bold uppercase text-sm px-6 " +
                                                " py-3 rounded shadow hover:shadow-lg outline-none " +
                                                " focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "}
                                                
                                                type="button"
                                                
                                                disabled
                                            >
                                                Send
                                            </button>
                                        ):(
                                        <button
                                            className={" bg-blue-500 hover:bg-blue-400 text-white " + 
                                            " active:bg-emerald-600 font-bold uppercase text-sm px-6 " + 
                                            " py-3 rounded shadow hover:shadow-lg outline-none "+
                                            " focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "}
                                            type="button"
                                            onClick={add}
                                        >
                                            Send
                                        </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                )}
            </td>
        </tr>
    )
}

export default ClientRequestTableRow;
