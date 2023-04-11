import React, {useEffect, useState} from "react";
import ArchiveTableRow from "./ArchiveTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { collection, getDocs, orderBy, serverTimestamp, deleteDoc,doc,query,limit,startAfter,endBefore,limitToLast,setDoc} from "firebase/firestore";
import { db } from "../../utils/Firebase";
import dayjs from "dayjs";
import { useAuth } from "../../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import FilterDropdown from "../../components/Button/FilterDropdown";
import Button from "../../components/Button/Button";

import 'react-toastify/dist/ReactToastify.css';
import NoDataFound from "../../pages/Error/NoDataFound";



function AdminArchiveTable() {
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

    });
    const auditTrailCollectionRef = collection(db, "audittrail",);
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const titleTable = [
        "Select",
        "DocID",
        "File",
        "Company",
        "Date Archived",
        
    ]

    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "archive"));
    //     setData(snapshot.docs.map((doc) => doc.data()));
    // }
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

   
    const fetchData = async () => {
        const q = query(collection(db, "archive"),orderBy("docid", "desc"), limit(5));
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
            const q = query(collection(db, "archive"),orderBy("docid", "desc"),endBefore(item.docid), limitToLast(5));
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

    

    const deleteSelectRow = async() => {
        selectedRow.forEach((item) => {
            setDoc(doc(auditTrailCollectionRef, item.docid), {
                time : serverTimestamp(),
                user : 'Admin',
                activity : "Deleted a file:  " + item.filename,
            });
            deleteDoc(doc(db, "archive", item.docid));
            notif();
            setTimeout(() => {
                window.location.reload();
            }
            , 3000);
        });
        
        setSelectedRow([]);
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
            console.log(list.filter((item) => item.file.includes(".xlsx")));
                
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
            console.log(list.filter((item) => item.file.includes(".pdf")));
                
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
    
      
    useEffect(() => {
        checkFileExpire();
       
        // checkData();
        fetchData();
        // getArchiveData();
        const interval = setInterval(async () => {
            console.log(data);
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
             <div className={" flex flex-row px-7 pt-4 mt-4 text-sm font-medium tracking-wide gap-4"}> 
                    
             <div className={"mt-4"}>
                Filter by Type <FilterDropdown 
                    excel={filterExcel}
                    pdf={filterPdf}
                    all={fetchData}
            />
            
            </div>

                <div>
                    <button onClick={unArchive} className={" px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg " + 
                    " hover:bg-blue-600 w-full "}>Unarchive</button>
                </div>

                <div>
                    <button onClick={deleteSelectRow} className={"text-gray-900 bg-gray-100 hover:bg-gray-200 " + 
                    " border border-gray-400 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm " + 
                    " px-5 py-2.5 ml-4 mt-4 focus:outline-none "}>Delete</button>
                </div>
                
            </div>
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
                                
                                    <ArchiveTableRow
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
                                        Company={item.company}
                                        DateArchived={dayjs.unix(item.datearchive?.seconds).format("hh:mm A, MMMM D, YYYY")}
                                        
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

export default AdminArchiveTable;
