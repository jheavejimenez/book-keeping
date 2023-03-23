import React from "react";
import { useState, useEffect } from "react";
import {
    CheckCircleIcon,
    DocumentArrowDownIcon,
    DocumentArrowUpIcon,
    ExclamationCircleIcon
} from "@heroicons/react/24/outline";
// import { useAuth } from "../../hooks/useAuth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/Firebase";

function StatisticCards() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const getAllRequestDocumments = async () => {
        const snapshot = await getDocs(collection(db, "request"));
        setData(snapshot.docs.map((doc) => doc.data()));
    }
    const getAllCompleteDocuments = async () => {
        const snapshot = await getDocs(collection(db, "request"));
        setData4(snapshot.docs.map((doc) => doc.data()).filter((item) => item.Status === "Completed"));
    }
    const getAllOutgoingDocumments = async () => {
        const snapshot = await getDocs(collection(db, "outgoing"));
        setData2(snapshot.docs.map((doc) => doc.data()));
    }
    const getAllIncomingDocumments = async () => {
        const snapshot = await getDocs(collection(db, "incoming"));
        setData3(snapshot.docs.map((doc) => doc.data()));
    }



    useEffect(() => {
        getAllRequestDocumments();
        getAllOutgoingDocumments();
        getAllIncomingDocumments();
        getAllCompleteDocuments();
        const interval = setInterval(() => {
            getAllRequestDocumments();
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    console.log(data);

    return (
        <div className={" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 "}>
            <div
                className={" bg-blue-300 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group h-28 "}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white " +
                        " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}
                >
                    <DocumentArrowDownIcon
                        className={" w-12 h-12 transform transition-transform duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>{data2.length}</p>
                    <p>All Incoming files</p>
                </div>
            </div>
            <div
                className={" bg-lime-200 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group "}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white " + 
                    " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}
                >
                    <ExclamationCircleIcon
                        className={" w-14 h-14 transform transition-transform duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>{data.length}</p>
                    <p>Total Requested Files</p>
                </div>
            </div>
            <div
                className={" bg-red-300 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group h-28 "}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white " + 
                    " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}>

                    <DocumentArrowUpIcon className={" w-12 h-12 transform transition-transform " + 
                    " duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>{data3.length}</p>
                    <p>All Outgoing Files</p>
                </div>
            </div>
            <div
                className={" bg-green-300 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group"}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white rounded-full " +
                    " transition-all duration-300 transform group-hover:rotate-12 "}>

                    <CheckCircleIcon className={"w-14 h-14 transform transition-transform " + 
                    " duration-500 ease-in-out "} />
                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>{data4.length}</p>
                    <p>Total Files Completed</p>
                </div>
            </div>
        </div>
    )
}


export default StatisticCards;
