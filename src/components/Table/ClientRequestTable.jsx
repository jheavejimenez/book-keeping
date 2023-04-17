import React, { useEffect, useState } from "react";
import RequestTableRow from "./RequestTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import { db } from "../../utils/Firebase";
import { collection, getDocs, limit, limitToLast, orderBy, query, startAfter, endBefore, startAt} from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import dayjs from "dayjs";
import Tabs from "../../components/Navigation/Tabs";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import NoDataFound from "../../pages/Error/NoDataFound";
import FilterTableLimit from "../Button/FilterTableLimit";


function ClientRequestTable() {
    const notify = () => toast.warning("No more documents to show", {
        position: "top-center",
        autoClose: 3000, // auto close after 5 seconds
        onClose: () => {
            setTimeout(() => {
            window.location.reload(); // reload window after toast is closed
            }, 3000);
        },

    });
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const titleTable = [
        "ReqID",
        "Requested By",
        "File",
        "Purpose",
        "Due Date",
        "Date Requested"
        
    ]
    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "request"));
    //     if (user) {
    //         setData(snapshot.docs.map((doc) => doc.data()).filter((item) => item.reqfrom === user.email));
    //     }
        

    //     console.log(data);
    // }
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

    
    const fetchData = async () => {
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        setList(items.filter((item) => item.reqfrom === user.email && item.Status !== "Completed"));
        if (items.filter((item) => item.reqfrom === user.email && item.Status !== "Completed")) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = false;
        }
        
    };

    const showNextPage = ({item}) => {
        if (list.length === 0) {
            notify();
            
        }
        else {
            const fetchNextData = async () => {
                const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(5), startAfter(item.datereq));
                const querySnapshot = await getDocs(q)
                const items = []
                querySnapshot.forEach((doc) => {
                    items.push(doc.data())

                    
                });
                setList(items.filter((item) => item.reqfrom === user.email && item.Status !== "Completed"));
                setPage(page + 1);
                
            };
            fetchNextData();
        }
    }

    const showPrevPage = ({item}) => {
        if (list.length === 0) {
            notify();
            
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "request"),orderBy("datereq", "desc"),endBefore(item.datereq), limitToLast(5) );
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.reqfrom === user.email && item.Status !== "Completed"));
                setPage(page - 1);
                
        };
        fetchPrevData();
    }
}

    const done = async () => {
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        setList(items.filter((item) => item.reqfrom === user.email && item.Status === "Completed"));
    }
    const fetchFiveData = async () => {
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(5));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        setList(items.filter((item) => item.reqfrom === user.email && item.Status !== "Completed"));
        if (items.filter((item) => item.reqfrom === user.email && item.Status !== "Completed")) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = false;
        }
        
    };
    const fetchTenData = async () => {
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
                
        });
        setList(items.filter((item) => item.sentby === user.email));
        if (items.filter((item) => item.sentby === user.email).length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchFifteenData = async () => {
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(15));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
                items.push(doc.data())
     
        });
        setList(items.filter((item) => item.sentby === user.email));
        if (items.filter((item) => item.sentby === user.email).length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
    };
    const fetchTwentyData = async () => {
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(20));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
                items.push(doc.data())   
        });
        setList(items.filter((item) => item.sentby === user.email));
        if (items.filter((item) => item.sentby === user.email).length === 0) {
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
            // await  fetchData();
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    // console.log(data);

    return (
        <>
            <ToastContainer />
            <div className="mt-4 mx-4 pt-2">
                <Tabs 
                    path={fetchData}
                    attr={done}
                />

                <div>
                    Show <FilterTableLimit 
                        limit5={fetchFiveData}
                        limit10={fetchTenData}
                        limit15={fetchFifteenData}
                        limit20={fetchTwentyData}
                    /> results
                </div>
            </div>
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
                                {list.length === 0 ? ( 
                                    <tr className={"text-sm font-medium text-center text-gray-900"}>
                                        <td colSpan={8} className={"pt-10"}>
                                            <NoDataFound 
                                                text={"No Data"}
                                            />
                                        </td>
                                    </tr>
                                ) : null
                                }
                                {list.map?.((item) => (
                                    <RequestTableRow
                                        Column1={item.documentId}
                                        Column2={item.reqby}
                                        Column3={item.file}
                                        Column4={item.purpose}
                                        Column5={dayjs.unix(item.dueDate?.seconds).format("hh:mm:ss A, DD/MM/YYYY")}
                                        Column6={dayjs.unix(item.datereq?.seconds).format("hh:mm:ss A, DD/MM/YYYY")}
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

export default ClientRequestTable;
