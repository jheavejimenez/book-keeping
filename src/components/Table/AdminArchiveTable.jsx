import React, {useEffect, useState} from "react";
import ArchiveTableRow from "./ArchiveTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { collection, getDocs, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import dayjs from "dayjs";
import { useAuth } from "../../hooks/useAuth";


function AdminArchiveTable() {
    const [data, setData] = useState([]);
    const titleTable = [
        "DocID",
        "File",
        "Company",
        "DateCreated",
        "DateArchived"
    ]

    const getAllRequestDocumments = async () => {
        const snapshot = await getDocs(collection(db, "archive"));
        setData(snapshot.docs.map((doc) => doc.data()));
    }

    

    useEffect(() => {
        getAllRequestDocumments();
        // getArchiveData();
        const interval = setInterval(async () => {
            await getAllRequestDocumments();
            // await getArchiveData();
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
                            <tr className={" text-xs font-bold font-inter tracking-wide text-left " +
                                " text-gray-500 border-b border-gray-700 "}>
                                {titleTable.map((item) => (
                                    <TableHeading
                                        text={item}
                                    />

                                ))}
                            </tr>
                            </thead>
                            <tbody className={"font-inter divide-y"}>
                            {data.map?.((item) => (
                                <ArchiveTableRow
                                    DocID={item.docid}
                                    File={item.file}
                                    Company={item.company}
                                    DateCreated={item.datesent}
                                    DateArchived={dayjs.unix(item.datearchive?.seconds).format("hh:mm A, MMMM D, YYYY")}
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

export default AdminArchiveTable;
