import React, { useEffect, useState } from "react";
import RequestTableRow from "./RequestTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import dayjs from "dayjs";

function RequestTable() {
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
        setData(snapshot.docs.map((doc) => doc.data()));
    }

    useEffect(() => {
        getAllRequestDocumments();
        const interval = setInterval(() => {
            getAllRequestDocumments();
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    console.log(data);

    return (
        <>
            <div className={"mt-10 mx-4"}>
                <div className={"w-full overflow-hidden rounded-lg shadow-xs"}>
                    <div className={"w-full overflow-x-auto"}>
                        <table className={"w-full"}>
                            <thead>
                            <tr className={"text-xs font-bold font-inter tracking-wide text-left text-gray-500 border-b border-gray-700 bg-gray-50"}>
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
                                    ReqID={item.documentId}
                                    RequestedFrom={item.reqfrom}
                                    File={item.file}
                                    Purpose={item.purpose}
                                    DueDate={item.dueDate}
                                    DateRequested={dayjs.unix(item.dateReq.seconds).format("YYYY-MM-DD")}
                                />)

                            )}
                            </tbody>
                        </table>
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default RequestTable;
