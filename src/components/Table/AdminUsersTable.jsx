import React, { useEffect, useState } from "react";
import UsersTableRow from "./UsersTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import DeleteButton from "../../components/Button/DeleteButton";
import { collection, getDocs, orderBy,deleteDoc,doc,query,limit,startAfter,endBefore,limitToLast,setDoc,serverTimestamp, } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import dayjs from "dayjs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "nanoid";



function AdminUsersTable() {
    const auth = useAuth();
    const docid = nanoid(5);
    const  notif = () => toast.success("User Deleted", {
        position: "top-center",

    });
    const  notif1 = () => toast.warning("No more documents to show", {
        position: "top-center",
        autoClose: 3000, // auto close after 5 seconds
        onClose: () => {
            setTimeout(() => {
            window.location.reload(); // reload window after toast is closed
            }, 3000);
        },

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
        "Contract Expiry",
        
    ]

    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "users"));
    //     setData(snapshot.docs.map((doc) => doc.data()));
        

       
    // }
    const now = new Date();
    let fiveYearsFromNow = new Date(now.getTime() + 5 * 365 * 24 * 60 * 60 * 1000);
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const auditTrailCollectionRef = collection(db, "audittrail",);
   
    const fetchData = async () => {
        const q = query(collection(db, "users"),orderBy("email", "desc"), limit(5));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        setList(items.filter((item) => item.email !== auth.user.email));
        if (items.filter((item) => item.email !== auth.user.email).length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = false;
        }
        
    };

    const showNextPage = ({item}) => {
        if (list.length === 0) {
            notif1();
           
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
           
        }
        else {
        const fetchPrevData = async () => {
            const q = query(collection(db, "users"),orderBy("email", "desc"), endBefore(item.email), limitToLast(5));
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
            setDoc(doc(auditTrailCollectionRef,docid ), {
                time : serverTimestamp(),
                user : 'Admin',
                activity : "Deleted a user:  " + item.email,
                });
            deleteDoc(doc(db, "users", item.email));
            notif();
            
        });
        setSelectedRow([]);
    }
    const extendContract = async() => {
        selectedRow.forEach((item) => {
            setDoc(doc(auditTrailCollectionRef,docid ), {
                time : serverTimestamp(),
                user : 'Admin',
                activity : "Extended a user's contract:  " + item.email,
                });
            setDoc(doc(db, "users", item.email), {
                ...item,
                contractexpired: new Date(fiveYearsFromNow.getTime() + 5 * 365 * 24 * 60 * 60 * 1000), // add 5 years to current date
            }, { merge: true });
            notif();
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
    console.log(fiveYearsFromNow);
    
    return (
        <>
            <ToastContainer />
            <div className={" flex flex-row px-7 pt-4 mt-4 text-sm font-medium tracking-wide gap-4"}> 
            <button onClick={extendContract} className={" px-6 py-2 mt-4 text-white bg-[#00A2E8] rounded-lg hover:bg-[#00A2E8]"}>Extend Contract</button>
                <button onClick={deleteSelectRow} className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "}>Delete</button>
            </div>
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
                            {list.length === 0 ? ( 
                                <tr className={"text-sm font-medium text-center text-gray-900 dark:text-gray-100"}>
                                    <td colSpan={5} className={"py-20 pl-56 text-6xl  font-bold font-inter tracking-wide text-gray-200 dark:text-gray-100"}>No Data</td>
                                </tr>
                            ) : null
                            }
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
                                    Column6={dayjs.unix(item.contractexpired?.seconds).format("hh:mm A, MMMM D, YYYY")}
                                    
                                />)

                            )}
                            </tbody>
                        </table>
                    </div>
                    <div id = "audit-table" >
                        <Pagination 
                            path={showPrevPage}
                            item={showNextPage}
                            list={list}
                            page={page}
                            
                        />
                    </div>  
                </div>
            </div>
        </>
    )
}

export default AdminUsersTable;
