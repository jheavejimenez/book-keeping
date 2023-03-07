import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import dayjs from "dayjs";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import { collection, getDocs, limit, limitToLast, orderBy, query, startAfter, endBefore, startAt} from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "react-query";
import { getAllRequestDocumments } from "../../utils/helper";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import FilterDropdown from "../Button/FilterDropdown";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function ClientTable(props) {
    const notify = () => toast.warning("No more documents to show", {
        position: "top-center",

    });
    const { user } = useAuth();
    const titleTable = [
        "DocID",
        "Requestee",
        "File",
        "",
        "",
        "Date Received",
        "Status",
        "Action",
        
    ]

    
   
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

    
    const fetchData = async () => {
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(5));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        setList(items);
        console.log();
            
        
    };
    
    

    const showNextPage = ({item}) => {
        if (list.length === 0) {
            notify();
            window.location.reload();
        }
        else {
            const fetchNextData = async () => {
                const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(5), startAfter(item.datereq));
                const querySnapshot = await getDocs(q)
                const items = []
                querySnapshot.forEach((doc) => {
                    items.push(doc.data())

                    
                });
                setList(items);
                setPage(page + 1);
                
            };
            fetchNextData();
        }
    }

    const showPrevPage = ({item}) => {
        if (list.length === 0) {
            notify();
            window.location.reload();
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "request"),orderBy("datereq", "desc"),endBefore(item.datereq), limitToLast(5) );
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items);
                setPage(page - 1);
                
        };
        fetchPrevData();
    }
}


    const filterExcel = () => {
        if (list.length === 0) {
            notify();
            window.location.reload();
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "request"),orderBy("datereq", "desc"),limit(5));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.file.includes(".xlsx")));
            
            console.log(list.filter((item) => item.file.includes(".xlsx")));
                
        };
        fetchPrevData();


        }
    }
    const filterPdf = () => {
        if (list.length === 0) {
            notify();
            window.location.reload();
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "request"),orderBy("datereq", "desc"),limit(5));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.file.includes(".pdf")));
           
            console.log(list.filter((item) => item.file.includes(".pdf")));
                
        };
        fetchPrevData();


        }
    }

useEffect(() => {
    fetchData();
    const interval = setInterval(async () => {
        
    }, 5000)
    return () => {
        clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
    };
}, []);



    return (
        <>
        <ToastContainer />
        <div className={"px-7 pt-7 mt-4 text-sm font-medium tracking-wide"}> 
        Filter by Type <FilterDropdown 
                excel={filterExcel}
                pdf={filterPdf}
                all={fetchData}
           />
           
        </div>   
            <div className={"mt-4 mx-4"}>
                <div className={"w-full overflow-hidden rounded-lg shadow-xs"}>
                    <div className={"w-full overflow-x-auto"}>
                        <table className={"w-full"}>
                            <thead>
                            <tr className={" text-xs font-bold font-inter tracking-wide text-left " + 
                            " text-gray-500 border-b dark:border-gray-700 "+
                            " bg-gray-50 dark:text-gray-400 dark:bg-gray-100 "}>
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
                                <TableRow
                                    Column1={item.documentId}
                                    Column2={item.reqby}
                                    Column3={item.file}
                                    Column6={dayjs.unix(item.datereq.seconds).format("YYYY-MM-DD")}
                                    status={item.Status}
                                    
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

export default ClientTable;
