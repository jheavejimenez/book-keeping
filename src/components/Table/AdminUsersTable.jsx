import React, { useEffect, useState } from "react";
import UsersTableRow from "./UsersTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import dayjs from "dayjs";



function AdminUsersTable() {
    const [data, setData] = useState([]);
    const titleTable = [
        "First Name",
        "Last Name",
        "Role",
        "Company",
        "Last Active",
        "Status",
        
    ]

    const getAllRequestDocumments = async () => {
        const snapshot = await getDocs(collection(db, "users"));
        setData(snapshot.docs.map((doc) => doc.data()));
        

       
    }
    

    useEffect(() => {
        getAllRequestDocumments();
        // getUsersData();
        const interval = setInterval(async () => {
            await getAllRequestDocumments();
            // await getUsersData();
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
                    <div className={"w-full overflow-hidden"}>
                        <table className={"w-full"}>
                            <thead>
                            <tr className={" text-xs font-bold font-inter tracking-wide text-left " + 
                            " text-gray-500 border-b border-gray-700 "}>
                                {titleTable.map((item, index) => (
                                    <TableHeading
                                        key={index}
                                        text={item}
                                    />

                                ))}
                            </tr>
                            </thead>
                            <tbody className={"font-inter divide-y"}>
                            {data.map?.((item) => (
                                <UsersTableRow
                                    Column1={item.fname}
                                    Column2={item.lname}
                                    Column3={item.role}
                                    Column4={item.company}
                                    Column5={dayjs.unix(item.Llogin?.seconds).format("hh:mm A, MMMM D, YYYY")}
                                    Column6={item.status}
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

export default AdminUsersTable;
