import React, {useEffect, useState} from "react";
import dayjs from "dayjs";
import AuditTableRow from "./AuditTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { collection, getDocs, orderBy } from/* A firebase function that is used to get data from
firebase. */
 "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";


function AdminAuditTable() {
    const [data, setData] = useState([]);
    const titleTable = [
        "Time",
        "User",
        "Activity"
    ]

    const getAllRequestDocumments = async () => {
        const snapshot = await getDocs(collection(db, "audittrail"));
        setData(snapshot.docs.map((doc) => doc.data()));
    }

    

    useEffect(() => {
        getAllRequestDocumments();
        // getAuditTrailData();
        const interval = setInterval(async () => {
            await getAllRequestDocumments();
            // await getAuditTrailData();
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
                                <AuditTableRow
                                    Column1={dayjs.unix(item.time?.seconds).format("hh:mm A, MMMM D, YYYY")}
                                    Column2={item.user}
                                    Column3={item.activity}
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

export default AdminAuditTable;
