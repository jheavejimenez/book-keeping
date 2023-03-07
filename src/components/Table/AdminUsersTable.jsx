import React, { useEffect, useState } from "react";
import UsersTableRow from "./UsersTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import DeleteButton from "../../components/Button/DeleteButton";
import { collection, getDocs, orderBy,deleteDoc,doc,query,limit,startAfter,endBefore,limitToLast} from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import dayjs from "dayjs";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function AdminUsersTable() {
    const  notif = () => toast.success("User Deleted", {
        position: "top-center",

    });
    const  notif1 = () => toast.warning("No more documents to show", {
        position: "top-center",

    });
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const titleTable = [
        "Select",
        "First Name",
        "Last Name",
        "Role",
        "Company",
        "Last Active",
        
    ]

    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "users"));
    //     setData(snapshot.docs.map((doc) => doc.data()));
        

       
    // }

    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

   
    const fetchData = async () => {
        const q = query(collection(db, "users"), limit(10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        setList(items);
    };

    const showNextPage = ({item}) => {
        if (list.length === 0) {
            notif1();
            window.location.reload();
        }
        else {
            const fetchNextData = async () => {
                const q = query(collection(db, "users"),orderBy("email", "desc"), limit(5), startAfter(item.email));
                const querySnapshot = await getDocs(q)
                const items = []
                querySnapshot.forEach((doc) => {
                    items.push(doc.data())

                   
                });
                setList(items);
                setPage(page + 1);
                console.log(items[0]);
               
            };
            fetchNextData();
        }
    }

    const showPrevPage = ({item}) => {
        if (list.length === 0) {
            notif1();
            window.location.reload();
        }
        else {
        const fetchPrevData = async () => {
            const q = query(collection(db, "users"),endBefore(item.email), limitToLast(5));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items); 
                setPage(page - 1);
                console.log(items[0]);
        };
        fetchPrevData();
    }
}

    const deleteSelectRow = async() => {
        selectedRow.forEach((item) => {
            deleteDoc(doc(db, "users", item.email));
            notif();
            setTimeout(() => {
                window.location.reload();
            }
            , 3000);
        });
        setSelectedRow([]);
    }
    
    useEffect(() => {
        // getAllRequestDocumments();
        fetchData();
        // getUsersData();
        const interval = setInterval(async () => {
            // await getAllRequestDocumments();
            // await getUsersData();
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    // console.log(selectedRow);

    return (
        <>
            <ToastContainer />
            <button onClick={deleteSelectRow} className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "}>Delete</button>
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
                            {list.map?.((item) => (
                                <UsersTableRow
                                    Checkbox={
                                        <div> 
                                            <input type="checkbox" className={"form-checkbox h-5 w-5 text-gray-600"} checked={selectedRow.includes(item)}
                                             onChange={(event) => {
                                                if (event.target.checked) {
                                                    setSelectedRow([...selectedRow, item]);
                                                } else {
                                                    setSelectedRow(selectedRow.filter((row) => row !== item));
                                                }
                                             }}/>
                                        </div>

                                    }
                                    Column1={item.fname}
                                    Column2={item.lname}
                                    Column3={item.role}
                                    Column4={item.company}
                                    Column5={dayjs.unix(item.Llogin?.seconds).format("hh:mm A, MMMM D, YYYY")}
                                />)

                            )}
                            </tbody>
                        </table>
                    </div>
                    <Pagination 
                            path={showPrevPage}
                            item={showNextPage}
                            list={list}
                            page={page}
                            
                        />
                </div>
            </div>
        </>
    )
}

export default AdminUsersTable;
