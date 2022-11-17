import React, { useEffect, useState } from "react";
import RequestTableRow from "./RequestTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import { db } from "../../utils/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import dayjs from "dayjs";

function ClientRequestTable() {
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const titleTable = [
        "ReqID",
        "RequestedFrom",
        "File",
        "Purpose",
        "DueDate",
        "DateRequested"
        
    ]
    const getAllRequestDocumments = async () => {
        const snapshot = await getDocs(collection(db, "request"));
        if (user) {
            setData(snapshot.docs.map((doc) => doc.data()).filter((item) => item.reqfrom === user.email));
        }
        

        console.log(data);
    }

    useEffect(() => {
        
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
                            <tr className={" text-xs font-bold font-inter tracking-wide text-left " + 
                            " text-gray-500 border-b dark:border-gray-700 " + 
                            " bg-gray-50 dark:text-gray-400 dark:bg-gray-100 "}>
                                {titleTable.map((item) => (
                                    <TableHeading
                                        text={item}
                                    />

                                ))}
                            </tr>
                            </thead>
                            <tbody className={"font-inter divide-y"}>
                            {data.map((item) => (
                                <RequestTableRow
                                    Column1={item.documentId}
                                    Column2={item.reqby}
                                    Column3={item.file}
                                    Column4={item.purpose}
                                    Column5={item.dueDate}
                                    Column6={dayjs.unix(item.dateReq.seconds).format("YYYY-MM-DD")}
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

export default ClientRequestTable;
