import React, { useEffect, useState } from "react";
import Clientoutgoingrow from "./Clientoutgoingrow";
import dayjs from "dayjs";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import { collection, getDocs, limit, limitToLast, orderBy, query, startAfter, endBefore, startAt} from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import FilterDropdown from "../Button/FilterDropdown";

function ClientOutgoingTable() {
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const titleTable = [
        "DocID",
        "Recipient",
        "File",
        "Date Sent",
        "Action",
        
        
    ]
    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "outgoing"));
    //     if (user) {
    //         setData(snapshot.docs.map((doc) => doc.data()).filter((item) => item.sentby === user.email));
    //     }
        

    //     console.log(data);
    // }
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

  
        
        
        const fetchData = async () => {
            const q = query(collection(db, "outgoing"),orderBy("datesend", "desc"), limit(5));
           if (user) {
               const querySnapshot = await getDocs(q)
               const items = []
               querySnapshot.forEach((doc) => {
                     items.push(doc.data())
                     
                     
               });
                setList(items.filter((item) => item.sentby === user.email));
                
                

           }
         
        };

    

    const showNextPage = ({item}) => {
        if (list.length === 0) {
            alert("Thats all we have for now !")
            window.location.reload();
        }
        else {
            const fetchNextData = async () => {
                const q = query(collection(db, "outgoing"),orderBy("datesend", "desc"), limit(5), startAfter(item.datesend));
                if (user) {
                    const querySnapshot = await getDocs(q)
                    const items = []
                    querySnapshot.forEach((doc) => {
                        items.push(doc.data())
        
                    });
                    setList(items.filter((item) => item.sentby === user.email));
                    setPage(page + 1);
                    console.log(items);
                }
               
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
            const q = query(collection(db, "outgoing"),orderBy("datesend", "desc"),endBefore(item.datesend), limitToLast(5) );
            if (user) {
                const querySnapshot = await getDocs(q)
                const items = []
                querySnapshot.forEach((doc) => {
                    items.push(doc.data())
                });
                setList(items.filter((item) => item.sentby === user.email));
                console.log();
                setPage(page - 1);
                console.log(items);
            }
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
            const q = query(collection(db, "outgoing"),orderBy("datesend", "desc"),limit(5));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.file.includes(".xlsx") && item.sentby === user.email));
            
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
            const q = query(collection(db, "outgoing"),orderBy("datesend", "desc"),limit(5));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.file.includes(".pdf") && item.sentby === user.email));
           
            console.log(list.filter((item) => item.file.includes(".pdf")));
                
        };
        fetchPrevData();


        }
    }






    useEffect(() => {
        // getAllRequestDocumments();
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
                            {list.map?.((item) => (
                                <Clientoutgoingrow
                                    Column1={item.docid}
                                    Column2={item.email}
                                    Column3={item.filename}
                                    Column4={dayjs.unix(item.datesend?.seconds).format("YYYY-MM-DD")}
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

export default ClientOutgoingTable;
