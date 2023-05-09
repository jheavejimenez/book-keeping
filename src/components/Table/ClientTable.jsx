import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import dayjs from "dayjs";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import { collection, getDocs, limit, limitToLast, orderBy, query, startAfter, endBefore, startAt,where} from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "react-query";
import { getAllRequestDocumments } from "../../utils/helper";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import FilterDropdown from "../Button/FilterDropdown";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import NoDataFound from "../../pages/Error/NoDataFound";
import FilterTableLimit from "../Button/FilterTableLimit";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DateRange from "../Button/DateRange";
import SearchDocs from "../Navigation/SearchDocs";

function ClientTable(props) {
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
    const titleTable = [
        "DocID",
        "Requestee",
        "File",
        "",
        "",
        "Date Requested",
        "Status",
        "Action",
        
    ]

    
   
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [search, setSearch] = useState("");

    
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
                setList(items);
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
            const q = query(collection(db, "request"),orderBy("datereq", "desc"),endBefore(item.datereq), limitToLast(5));
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
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "request"),orderBy("datereq", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.file.includes(".xlsx")));
            document.getElementById("audit-table").hidden = true;
            console.log(list.filter((item) => item.file.includes(".xlsx")));
                
        };
        fetchPrevData();


        }
    }
    const filterPdf = () => {
        if (list.length === 0) {
            notify();
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "request"),orderBy("datereq", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.file.includes(".pdf")));
            document.getElementById("audit-table").hidden = true;
            console.log(list.filter((item) => item.file.includes(".pdf")));
                
        };
        fetchPrevData();


        }
    }
    const fetchFiveData = async () => {
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
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchTenData = async () => {
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(10));
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
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(15));
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
        const q = query(collection(db, "request"),orderBy("datereq", "desc"), limit(20));
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

    const dataRange = async () => {
        if (list.length === 0) {
            notify();
        }
        else {
            const startDate = new Date(start)
            const endDate = new Date(end)

            const q = query(collection(db, "request"),orderBy("datereq", "desc"), where("datereq", ">=", startDate), where("datereq", "<=", endDate));
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
        }
    }

    const searchDoc = async () => {
        if (search === "") {
            notify();
        }
        else {
            const q = query(collection(db, "request"),orderBy("datereq", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            });
            setList(items.filter((item) => item.file.toLowerCase().includes(search.toLowerCase())));
            if (items.length === 0) {
                document.getElementById("audit-table").hidden = true;
            }
            else {
                document.getElementById("audit-table").hidden = true;
            }
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
            <div className="flex flex-col sm:flex-row items-center justify-between">

                <div className={"flex flex-col sm:flex-row lg:flex-row px-7 pt-7 mt-4 text-sm font-medium tracking-wide"}> 
                    <div className="mt-2">
                        Show <FilterTableLimit 
                            limit5={fetchFiveData}
                            limit10={fetchTenData}
                            limit15={fetchFifteenData}
                            limit20={fetchTwentyData}
                        /> results
                    </div>
                    
                    <div className={"mt-2 ml-4"}>
                        Filter by Type <FilterDropdown 
                            excel={filterExcel}
                            pdf={filterPdf}
                            all={fetchData}
                        />
                    </div>

                    <div className="mt-2 ml-4">
                                <div class="flex flex-col items-center sm:flex-col lg:flex-row">
                        <div class="relative">
                            <input 
                            name="start"
                            type="date"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5"
                            placeholder="Select date start"
                            onChange={(e) => setStart(e.target.value)}
                            
                            />
                        </div>
                        <div class="mx-4 text-gray-500">to</div>
                        <div class="relative">
                        <input 
                            name="start"
                            type="date"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5"
                            placeholder="Select date start"
                            onChange={(e) => setEnd(e.target.value)}
                            
                            />
                            
                        </div>
                        <div class="relative">
                        <button onClick={dataRange} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Search
                        </button>
                            
                        </div>

                        </div>
                    </div>
                </div>   
                <div className="pt-7 mt-6">
                        <div className="flex justify-end">
                    <div className={"bg-white rounded flex items-center w-52 max-w-xl mr-4 p-2 shadow-sm" + 
                        "border border-gray-300"}
                    >
                        
                        <button onClick={searchDoc} className={"outline-none focus:outline-none"}>
                            <MagnifyingGlassIcon className={"w-5 h-5 text-gray-500"} />
                            
                        </button>
                        
                        <input type="search" name="" id="" placeholder="Search documents" className={"w-full pl-3" + 
                            "text-sm text-black outline-none focus:outline-none bg-transparent"} 
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    </div>
                </div>
            </div>
            

            <div className={"mt-4 mx-4"}>
                <div className={"w-full overflow-hidden rounded-lg shadow-xs"}>
                    <div className={"w-full overflow-x-auto"}>
                        <table className={"w-full"}>
                            <thead>
                                <tr className={" text-sm font-bold font-inter tracking-wide text-left " + 
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
                                    <tr className={"text-sm font-medium text-center text-gray-900"}>
                                        <td colSpan={10} className={"pt-10"}>
                                            <NoDataFound 
                                                text={"No Data"}
                                            />
                                        </td>
                                    </tr>
                                ) : null
                                }
                                {list.map?.((item) => (
                                    <TableRow
                                        Column1={item.documentId}
                                        Column2={item.reqby}
                                        Column3={item.file}
                                        Column6={dayjs.unix(item.datereq.seconds).format("hh:mm:ss A, DD/MM/YYYY")}
                                        status={item.Status}
                                        
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

export default ClientTable;
