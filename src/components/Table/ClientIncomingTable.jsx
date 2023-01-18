import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import { collection, getDocs, limit, limitToLast, orderBy, query, startAfter, endBefore, startAt} from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import IncomingTableRow from "./IncomingTableRow";
import FilterDropdown from "../Button/FilterDropdown";


function ClientIncomingTable() {
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const titleTable = [
        "DocID",
        "Sender",
        "File",
        "Purpose",
        "Date Received",
        "Action",
        
    ]

    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "incoming"));
    //     if (user) {
    //         setData(snapshot.docs.map((doc) => doc.data()).filter((item) => item.email === user.email));
    //     }
        

    //     console.log(data);
    // }

    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

   
    const fetchData = async () => {
        const q = query(collection(db, "incoming"),orderBy("date", "desc"), limit(10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        setList(items.filter((item) => item.email === user.email));
    };

    const showNextPage = ({item}) => {
        if (list.length === 0) {
            alert("Thats all we have for now !")
            window.location.reload();
        }
        else {
            const fetchNextData = async () => {
                const q = query(collection(db, "incoming"),orderBy("date", "desc"), limit(5), startAfter(item.date));
                const querySnapshot = await getDocs(q)
                const items = []
                querySnapshot.forEach((doc) => {
                    items.push(doc.data())

                   
                });
                setList(items.filter((item) => item.email === user.email));
                setPage(page + 1);
                console.log(items[0]);
               
            };
            fetchNextData();
        }
    }

    const showPrevPage = ({item}) => {
        if (list.length === 0) {
            alert("Thats all we have for now !")
            window.location.reload();
        }
        else {
        const fetchPrevData = async () => {
            const q = query(collection(db, "incoming"),orderBy("date", "desc"),endBefore(item.date), limitToLast(5) );
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.email === user.email));
                setPage(page - 1);
                console.log(items[0]);
        };
        fetchPrevData();
    }
}
const filterExcel = () => {
    if (list.length === 0) {
        alert("Thats all we have for now !")
        window.location.reload();
    }
    else {

    const fetchPrevData = async () => {
        const q = query(collection(db, "incoming"),orderBy("date", "desc"),limit(10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
            
        });
        setList(items.filter((item) => item.file.includes(".xlsx") && item.email === user.email));
        
        console.log(list.filter((item) => item.file.includes(".xlsx")));
            
    };
    fetchPrevData();


    }
}
const filterPdf = () => {
    if (list.length === 0) {
        alert("Thats all we have for now !")
        window.location.reload();
    }
    else {

    const fetchPrevData = async () => {
        const q = query(collection(db, "incoming"),orderBy("date", "desc"),limit(10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
            
        });
        setList(items.filter((item) => item.file.includes(".pdf") && item.email === user.email));
       
        console.log(list.filter((item) => item.file.includes(".pdf")));
            
    };
    fetchPrevData();


    }
}



    useEffect(() => {
    //    getAllRequestDocumments();
        fetchData();
        const interval = setInterval(async () => {
            // await getAllRequestDocumments();
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    console.log(data);

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
                                <tr className={" text-xs font-bold font-inter tracking-wide " + 
                                " text-left text-gray-500 border-b dark:border-gray-700 " + 
                                " bg-gray-50 dark:text-gray-400 dark:bg-gray-100 "}>
                                    {titleTable.map((item) => (
                                        <TableHeading
                                            text={item}
                                        />

                                    ))}
                                </tr>
                            </thead>
                            <tbody className={"font-inter divide-y"}>
                            {list.map?.((item) => (
                                <IncomingTableRow
                                    Column1={item.docid}
                                    Column2={item.sentby}
                                    Column3={item.filename}
                                    Column4={item.purpose}
                                    Column5={dayjs.unix(item.date?.seconds).format("YYYY-MM-DD")}
                                    Column6={
                                        <div className={"flex items-center space-x-4"}>
                                                <button className={"flex items-center justify-center w-8 h-8 text-blue-500 transition-colors duration-150 bg-white rounded-full hover:bg-blue-100"}>
                                                    <a href={item.file} target = "_blank" download>
                                                        <ArrowDownTrayIcon className={"w-5 h-5"} />
                                                    </a>
                                                </button>
                                        </div>
                                    }
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

export default ClientIncomingTable;