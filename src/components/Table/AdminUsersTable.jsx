import React, { useEffect, useState } from "react";
import UsersTableRow from "./UsersTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
// import { collection, getDocs, orderBy } from "firebase/firestore";
// import { db } from "../../utils/Firebase";
// import { useAuth } from "../../hooks/useAuth";



function AdminUsersTable() {
    const [data, setData] = useState([]);
    const titleTable = [
        "Name",
        "Email",
        "Role",
        "Company",
        "Last Active",
        "Status"
    ]

    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "request"));
    //     setData(snapshot.docs.map((doc) => doc.data()));
    // }

    async function getUsersData() {
        const response = await axios.get("http://localhost:3000/users")
        setData(response.data)
        console.log(response.data)
        return response.data    
    }

    useEffect(() => {
        // getAllRequestDocumments();
        getUsersData();
        const interval = setInterval(async () => {
            // await getAllRequestDocumments();
            await getUsersData();
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
                                <UsersTableRow
                                    Name={item.name}
                                    Email={item.email}
                                    Role={item.role}
                                    Company={item.company}
                                    LastActive={item.lastActive}
                                    Status={item.status}
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
