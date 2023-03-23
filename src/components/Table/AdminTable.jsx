import React, { useEffect, useState } from "react";
import AdminTableRow from "./AdminTableRow";
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
import NoDataFound from "../../pages/Error/NoDataFound";

function AdminTable(props) {
    const { user } = useAuth();
    const titleTable = [
        "DocID",
        "File",
        "",
        "Sender",
        "Company",
        "Date",
        
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
        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = false;
        }
        

            
        
    };
    
    
    

    const showNextPage = ({item}) => {
        if (list.length === 0) {
            alert("Thats all we have for now !")
            
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
            alert("Thats all we have for now !")
           
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
            alert("Thats all we have for now !")
            
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
            alert("Thats all we have for now !")
            
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
        // await fetchData();
    }, 5000)
    return () => {
        clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
    };
}, []);



    return (
        <>
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
                                    <td colSpan={7} className={"pt-10"}>
                                        <NoDataFound 
                                            text={"No Data"}
                                        />
                                    </td>
                                </tr>
                            ) : null
                            }
                            {list.map?.((item) => (
                                <AdminTableRow
                                    Column1={item.documentId}
                                    Column2={item.file}
                                    Column4={item.reqby}
                                    Column5={item.company}
                                    Column6={dayjs.unix(item.datereq.seconds).format("YYYY-MM-DD")}
                                    
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

export default AdminTable;
