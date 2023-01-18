import React, { useEffect, useState } from "react";
import RequestTableRow from "./RequestTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import { collection, getDocs, limit, limitToLast, orderBy, query, startAfter, endBefore, startAt} from "firebase/firestore";
import { db } from "../../utils/Firebase";
import dayjs from "dayjs";

function RequestTable() {
    
    const titleTable = [
        "ReqID",
        "Requested From",
        "File",
        "Purpose",
        "Due Date",
        "Date Requested"
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
       
            setPage(page + 1);
        
        
    };


    const showNextPage = ({item}) => {
        if (list.length === 0) {
            alert("Thats all we have for now !")
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
            alert("Thats all we have for now !")
            window.location.reload();
        }
        else {
        const fetchPrevData = async () => {
            const q = query(collection(db, "request"),orderBy("datereq", "desc"),endBefore(item.datereq), limitToLast(8) );
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

    useEffect(() => {
        fetchData();
        const interval = setInterval(async () => {
            await fetchData();
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);

    return (
        <>
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
                            {list.map?.((item) => (
                                <RequestTableRow
                                    Column1={item.documentId}
                                    Column2={item.reqfrom}
                                    Column3={item.file}
                                    Column4={item.purpose}
                                    Column5={dayjs.unix(item.dueDate?.seconds).format("YYYY-MM-DD")}
                                    Column6={dayjs.unix(item.datereq?.seconds).format("YYYY-MM-DD")}
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

export default RequestTable;
