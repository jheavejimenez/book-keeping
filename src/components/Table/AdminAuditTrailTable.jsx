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
import { query , limit , startAfter, endBefore,limitToLast } from "firebase/firestore";
import FilterDropdownAction from "../Button/FilterDropdownAction";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import NoDataFound from "../../pages/Error/NoDataFound";
import FilterTableLimit from "../Button/FilterTableLimit";


function AdminAuditTable() {
    const [data, setData] = useState([]);
    const titleTable = [
        "Timestamp",
        "User",
        "Activity"
    ]

    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "audittrail"));
    //     setData(snapshot.docs.map((doc) => doc.data()));
    // }
    const  notif = () => toast.warning("No more documents to show", {
        position: "top-center",
        autoClose: 3000, // auto close after 5 seconds
        onClose: () => {
            setTimeout(() => {
            window.location.reload(); // reload window after toast is closed
            }, 3000);
        },

    });

    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

   
    const fetchData = async () => {
        const q = query(collection(db, "audittrail"),orderBy("time", "desc"), limit(5));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        
        setList(items);

        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = false;
        }
        
        
    
    };
    
    const showNextPage = ({item}) => {
        if (list.length === 0) {
            notif();
            
        }
        else {
            const fetchNextData = async () => {
                const q = query(collection(db, "audittrail"),orderBy("time", "desc"), limit(5), startAfter(item.time));
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
            notif();
            
        }
        else {
        const fetchPrevData = async () => {
            const q = query(collection(db, "audittrail"),orderBy("time", "desc"),endBefore(item.time), limitToLast(5) );
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
    const filterRequest = () => {
        if (list.length === 0) {
            notif();
            
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "audittrail"),orderBy("time", "desc"));
            const querySnapshot = await getDocs(q)
            
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                
            });
            // setList(items.filter((item) => item.file.includes(".pdf") && item.email === user.email));
            // document.getElementById("audit-table").hidden = true;
            
            // console.log(querySnapshot.docs.map((doc) => doc.data()).filter((item) => item.activity.includes("Request")));
            
            setList(querySnapshot.docs.map((doc) => doc.data()).filter((item) => item.activity.includes("Request")));
            document.getElementById("audit-table").hidden = true;
            
           
                
        };
        fetchPrevData();


        }
    }
    const filterSent = () => {
        if (list.length === 0) {
            notif();
            
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "audittrail"),orderBy("time", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                
            });
            // document.getElementById("audit-table").hidden = true;
            setList(querySnapshot.docs.map((doc) => doc.data()).filter((item) => item.activity.includes("Sent")));
            document.getElementById("audit-table").hidden = true;
                
        };
        fetchPrevData();


        }
    }
    const filterArchived = () => {
        if (list.length === 0) {
            notif();
           
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "audittrail"),orderBy("time", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                
            });
            // document.getElementById("audit-table").hidden = true;
            setList(querySnapshot.docs.map((doc) => doc.data()).filter((item) => item.activity.includes("Archived")));
            document.getElementById("audit-table").hidden = true;
        };
        fetchPrevData();


        }
    }
    const filterEdit = () => {
        if (list.length === 0) {
            notif();
           
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "audittrail"),orderBy("time", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                
            });
            // document.getElementById("audit-table").hidden = true;
            setList(querySnapshot.docs.map((doc) => doc.data()).filter((item) => item.activity.includes("Edit")));
            document.getElementById("audit-table").hidden = true;
        };
        fetchPrevData();


        }
    }
    const filterUnarchive = () => {
        if (list.length === 0) {
            notif();
           
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "audittrail"),orderBy("time", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                
            });
            // document.getElementById("audit-table").hidden = true;
            setList(querySnapshot.docs.map((doc) => doc.data()).filter((item) => item.activity.includes("Unarchive")));
            document.getElementById("audit-table").hidden = true;
        };
        fetchPrevData();


        }
    }
    const filterDeleteFile = () => {
        if (list.length === 0) {
            notif();
           
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "audittrail"),orderBy("time", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                
            });
            // document.getElementById("audit-table").hidden = true;
            setList(querySnapshot.docs.map((doc) => doc.data()).filter((item) => item.activity.includes("Deleted a file")));
            document.getElementById("audit-table").hidden = true;
        };
        fetchPrevData();


        }
    }
    const filterDeleteUser = () => {
        if (list.length === 0) {
            notif();
           
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "audittrail"),orderBy("time", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                
            });
            // document.getElementById("audit-table").hidden = true;
            setList(querySnapshot.docs.map((doc) => doc.data()).filter((item) => item.activity.includes("Deleted a user")));
            document.getElementById("audit-table").hidden = true;
        };
        fetchPrevData();


        }
    }
    const fetchFiveData = async () => {
        const q = query(collection(db, "audittrail"),orderBy("time", "desc"), limit(5));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items);
        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchTenData = async () => {
        const q = query(collection(db, "audittrail"),orderBy("time", "desc"), limit(10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items);
        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchFifteenData = async () => {
        const q = query(collection(db, "audittrail"),orderBy("time", "desc"), limit(15));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items);
        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchTwentyData = async () => {
        const q = query(collection(db, "audittrail"),orderBy("time", "desc"), limit(20));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items);
        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };




    useEffect(() => {
        // getAllRequestDocumments();
        fetchData();
        const interval = setInterval(async () => {
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    // console.log(data);

    return (
        <>
            <ToastContainer />
            <div  className={"flex flex-row px-7 pt-7 mt-4 text-sm font-medium tracking-wide gap-4"}>
                <div className={"mt-4"}>
                    Show <FilterTableLimit 
                        limit5={fetchFiveData}
                        limit10={fetchTenData}
                        limit15={fetchFifteenData}
                        limit20={fetchTwentyData}
                    /> results
                </div>
                <div className={"ml-4 mt-4"}>
                    Filter by Action <FilterDropdownAction 
                        request={filterRequest}
                        sent={filterSent}
                        all={fetchData}
                        archived={filterArchived}
                        edit={filterEdit}
                        unarchived={filterUnarchive}
                        deleteFile={filterDeleteFile}
                        deleteUser={filterDeleteUser}
                    />
                </div>
                
            </div>
            <div className={"mt-10 mx-4"}>
                <div className={"w-full overflow-hidden rounded-lg shadow-xs"}>
                    <div className={"w-full overflow-x-auto"}>
                        <table className={"w-full"}>
                            <thead>
                            <tr className={" text-sm font-bold font-inter tracking-wide text-left " +
                                " text-gray-500 border-b border-gray-700 "}>
                                {titleTable.map((item) => (
                                    <TableHeading
                                        text={item}
                                    />

                                ))}
                            </tr>
                            </thead>
                            <tbody className={"font-inter divide-y"}>
                            {list.length === 0 ? ( 
                                <tr className={"text-sm font-medium text-center text-gray-900"}>
                                    <td colSpan={5} className={"pt-10"}>
                                        <NoDataFound 
                                            text={"No Data"}
                                        />
                                    </td>
                                </tr>
                            ) : null
                            }
                            {list.map?.((item) => (
                                <AuditTableRow
                                    Column1={dayjs.unix(item.time?.seconds).format("hh:mm:ss A, DD/MM/YYYY")}
                                    Column2={item.user}
                                    Column3={item.activity}
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

export default AdminAuditTable;
