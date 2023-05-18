import React, {useEffect, useState} from "react";
import BkprArchiveTableRow from "./BkprArchiveTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { collection, getDocs, orderBy, serverTimestamp, deleteDoc,doc,query,limit,startAfter,endBefore,limitToLast,setDoc,where} from "firebase/firestore";
import { db } from "../../utils/Firebase";
import dayjs from "dayjs";
import { useAuth } from "../../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import FilterDropdown from "../../components/Button/FilterDropdown";
import Button from "../../components/Button/Button";

import 'react-toastify/dist/ReactToastify.css';
import NoDataFound from "../../pages/Error/NoDataFound";
import DeleteButton from "../Button/DeleteButton";
import FilterTableLimit from "../Button/FilterTableLimit";
import DateRange from "../Button/DateRange";
import SearchDocs from "../Navigation/SearchDocs";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


function BkprArchiveTable() {
    const  notif = () => toast.success("File has been Deleted", {
        position: "top-center",

    });
    const user = useAuth();
    const  notif1 = () => toast.warning("No more documents to show", {
        position: "top-center",
        autoClose: 3000, // auto close after 5 seconds
        onClose: () => {
            setTimeout(() => {
            window.location.reload(); // reload window after toast is closed
            }, 3000);
        },

    });
    const  notif2 = () => toast.success("File Unarchived", {
        position: "top-center",
        autoClose: 3000,
        onClose: () => {
            setTimeout(() => {
            window.location.reload(); // reload window after toast is closed
            }, 3000);
        },

    });
    const auditTrailCollectionRef = collection(db, "audittrail",);
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const titleTable = [
        "Select",
        "DocID",
        "File",
        "Recipient",
        "Date Created",
        "Date Archived",
        
    ]

    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "archive"));
    //     setData(snapshot.docs.map((doc) => doc.data()));
    // }
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [search, setSearch] = useState("");

   
    const fetchData = async () => {
        const q = query(collection(db, "archive"),orderBy("docid", "desc"), limit(5));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        setList(items.filter((items)=> items.sentby === user.user.email));
        if (items.length === 0) {
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
                const q = query(collection(db, "archive"),orderBy("docid", "desc"), limit(5), startAfter(item.docid));
                const querySnapshot = await getDocs(q)
                const items = []
                querySnapshot.forEach((doc) => {
                    items.push(doc.data())

                   
                });
                setList(items.filter((items)=> items.sentby === user.user.email));
                setPage(page + 1);
                // console.log(items[0]);
               
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
            const q = query(collection(db, "archive"),orderBy("docid", "desc"),endBefore(item.docid), limitToLast(5));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((items)=> items.sentby === user.user.email));
                setPage(page - 1);
                // console.log(items[0]);
        };
        fetchPrevData();
    }
}

    const unArchive = async() => {
        selectedRow.forEach((item) => {
            if(item.sentfrom === 'Outgoing'){
                 setDoc(doc(db, "incoming",  item.docid), {
                    docid: item.docid ? item.docid : "",
                    email:   item.email ? item.email : "",
                    file:  item.file ? item.file : "",
                    filename: item.filename ? item.filename : "",
                    fileexpiry:  item.fileexpiry ? item.fileexpiry : "",
                    company: item.company ? item.company : "",
                    purpose: item.purpose ? item.purpose : "",
                    sentby: item.sentby ? item.sentby : "",
                    datearchive: item.datearchive ? item.datearchive : serverTimestamp(),
                    date : item.date ? item.date : serverTimestamp(),
                    });
                 

                 setDoc(doc(auditTrailCollectionRef, item.docid), {
                    time : serverTimestamp(),
                    user : 'Admin',
                    activity : "Unarchived a file:  " + item.filename,
                 });
                 deleteDoc(doc(db, "archive",item.docid));
                 notif2();
            }
            else if(item.sentfrom === 'Incoming'){
            }
            else{
                setDoc(doc(db, "outgoing", item.docid), {
                    docid: item.docid ? item.docid : "",
                    email:  item.email ? item.email : "",
                    file:  item.file ? item.file : "",
                    filename: item.filename ? item.filename : "",
                    fileexpiry:  item.fileexpiry ? item.fileexpiry : "",
                    company:  item.company ? item.company : "",
                    purpose: item.purpose ? item.purpose : "",
                    sentby:  item.sentby ? item.sentby : "",
                    sentfrom: item.sentfrom ? item.sentfrom : "",
                    datearchive: item.datearchive ? item.datearchive : serverTimestamp(),
                    date: item.date ? item.date : serverTimestamp(),
                    });
                    
                setDoc(doc(auditTrailCollectionRef, item.docid), {
                    time : serverTimestamp(),
                    user : 'Admin',
                    activity : "Unarchived a file:  " + item.filename,
                    });
                deleteDoc(doc(db, "archive",item.docid));
                notif2();
                }
            
           
           
        });
    }

    const filterExcel = () => {
        if (list.length === 0) {
            notif1();
            
        }
        else {  
            
        const fetchPrevData = async () => {
            const q = query(collection(db, "archive"),orderBy("datearchive", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.file.includes(".xlsx")));
            document.getElementById("audit-table").hidden = true;
            // console.log(list.filter((item) => item.file.includes(".xlsx")));
                
        };
        fetchPrevData();


        }
    }
    const filterPdf = () => {
        if (list.length === 0) {
            notif1();
            
        }
        else {

        const fetchPrevData = async () => {
            const q = query(collection(db, "archive"),orderBy("datearchive", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.file.includes(".pdf")));
            document.getElementById("audit-table").hidden = true;
            // console.log(list.filter((item) => item.file.includes(".pdf")));
                
        };
        fetchPrevData();


        }
    }
    const checkFileExpire = async () => {
        const q = query(collection(db, "archive"));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.log("No matching documents.");
        }
        else {
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
        }
        
    }
    const fetchFiveData = async () => {
        const q = query(collection(db, "archive"),orderBy("docid", "desc"), limit(5 ? 6 : 5));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items.filter((items)=> items.sentby === user.user.email));
        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchTenData = async () => {
        const q = query(collection(db, "archive"),orderBy("docid", "desc"), limit(10 ? 11 : 10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items.filter((items)=> items.sentby === user.user.email));
        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchFifteenData = async () => {
        const q = query(collection(db, "archive"),orderBy("docid", "desc"), limit(15 ? 16 : 15));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items.filter((items)=> items.sentby === user.user.email));
        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchTwentyData = async () => {
        const q = query(collection(db, "archive"),orderBy("docid", "desc"), limit(20 ? 21 : 20));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items.filter((items)=> items.sentby === user.user.email));
        if (items.length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const dataRange = async () => {
        if (list.length === 0) {
            notif1();
        }
        else {
            const startDate = new Date(start)
            const endDate = new Date(end)

            const q = query(collection(db, "archive"),orderBy("datearchive", "desc"), where("datearchive", ">=", startDate), where("datearchive", "<=", endDate));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            });
            setList(items.filter((items)=> items.sentby === user.user.email));
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
            notif1();
        }
        else {
            const q = query(collection(db, "archive"),orderBy("datearchive", "desc"));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            });
            setList(items.filter((item) => item.filename.toLowerCase().includes(search.toLowerCase()) && item.sentby === user.user.email)); 
            if (items.length === 0) {
                document.getElementById("audit-table").hidden = true;
            }
            else {
                document.getElementById("audit-table").hidden = true;
            }
        }
    }
      
    useEffect(() => {
        checkFileExpire();
       
        // checkData();
        fetchData();
        // getArchiveData();
        const interval = setInterval(async () => {
            // console.log(data);
            data.forEach((item) => {
                if (item.datearchive > item.archiveexpiry){
                    deleteDoc(doc(db, "archive", item.docid));
                }
            })
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    //console log selected row docid
    // console.log(selectedRow);
    

    return (
        <>
            <ToastContainer />
            <div className={"flex flex-row px-7 pt-4 mt-4 text-sm font-medium tracking-wide gap-4"}>
                <div>
                    <button onClick={unArchive} className={" px-4 py-2.5 mt-4 text-white bg-blue-500 rounded-lg " + 
                    " hover:bg-blue-600 w-full font-medium text-sm "}>Unarchive</button>
                </div>
            </div>

            <div className={"flex flex-col sm:flex-row items-center justify-between"}>
                <div className={"flex flex-col sm:flex-row lg:flex-row px-7 pt-3 mt-2 text-sm font-medium tracking-wide"}> 
                        
                    <div>
                        Show <FilterTableLimit 
                        limit5={fetchFiveData}
                        limit10={fetchTenData}
                        limit15={fetchFifteenData}
                        limit20={fetchTwentyData}
                        /> results
                    </div>

                    <div className={"ml-4"}>
                        Filter by Type <FilterDropdown 
                            excel={filterExcel}
                            pdf={filterPdf}
                            all={fetchData}
                        />
                    </div>

                    <div className="ml-4">
                        <div className="flex flex-col items-center sm:flex-col lg:flex-row">
                            <div className="relative">
                                <input 
                                    name="start"
                                    type="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5"
                                    placeholder="Select date start"
                                    onChange={(e) => setStart(e.target.value)}
                                />
                            </div>
                            <div className="mx-4 text-gray-500">to</div>
                            <div className="relative">
                                <input 
                                    name="start"
                                    type="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5"
                                    placeholder="Select date start"
                                    onChange={(e) => setEnd(e.target.value)}
                                />
                                
                            </div>
                            <div className="relative">
                                <button onClick={dataRange} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Search
                                </button>
                            </div>

                        </div>
                    </div>
                </div>   
                <div className="pt-7 ">
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
                                    <td colSpan={10} className={"pt-10"}>
                                        <NoDataFound 
                                            text={"No Data"}
                                        />
                                    </td>
                                </tr>
                            ) : null
                            }
                            {list.map?.((item) => (
                                
                                    <BkprArchiveTableRow
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
                                        DocID={item.docid}
                                        File={item.filename}
                                        Recipient={item.email}
                                        DateCreated={dayjs.unix(item.date?.seconds).format("hh:mm:ss A, DD/MM/YYYY")}
                                        DateArchived={dayjs.unix(item.datearchive?.seconds).format("hh:mm:ss A, DD/MM/YYYY")}
                                    />
                                )
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

export default BkprArchiveTable;