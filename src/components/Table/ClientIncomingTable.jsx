import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import IncomingTableRow from "./IncomingTableRow";


function ClientIncomingTable() {
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const titleTable = [
        "DocID",
        "Sender",
        "File",
        "Date Received",
        "Action",
        
    ]

    const getAllRequestDocumments = async () => {
        const snapshot = await getDocs(collection(db, "incoming"));
        if (user) {
            setData(snapshot.docs.map((doc) => doc.data()).filter((item) => item.email === user.email));
        }
        

        console.log(data);
    }

    useEffect(() => {
       getAllRequestDocumments();
        const interval = setInterval(async () => {
            await getAllRequestDocumments();
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    console.log(data);

    return (
        <>
            <div className={"mt-4 mx-4"}>
                <div className={"w-full overflow-hidden rounded-lg shadow-xs"}>
                    <div className={"w-full overflow-x-auto"}>
                        <table className={"w-full"}>
                            <thead>
                                <tr className={" text-xs font-bold font-inter tracking-wide " + 
                                " text-left text-gray-500 border-b dark:border-gray-700 " + 
                                " bg-gray-50 dark:text-gray-400 dark:bg-gray-100 "}>
                                    {titleTable.map((item) => (
                                        <TableHeading
                                            text={item}
                                        />

                                    ))}
                                </tr>
                            </thead>
                            <tbody className={"font-inter divide-y"}>
                            {data.map?.((item) => (
                                <IncomingTableRow
                                    Column1={item.docid}
                                    Column2={item.sentby}
                                    Column3={item.filename}
                                    Column4={dayjs.unix(item.date?.seconds).format("YYYY-MM-DD")}
                                    Column5={
                                    <div className={"flex items-center space-x-4"}>
                                            <button className={"flex items-center justify-center w-8 h-8 text-blue-500 transition-colors duration-150 bg-white rounded-full hover:bg-blue-100"}>
                                                <a href={item.file} target = "_blank" download>
                                                    <ArrowDownTrayIcon className={"w-5 h-5"} />
                                                </a>
                                            </button>
                                    </div>
                                        }
                                />)
                            )}
                            </tbody>
                        </table>
                    </div>
                    <Pagination/>       
                </div>
            </div>
        </>
    )
}

export default ClientIncomingTable;