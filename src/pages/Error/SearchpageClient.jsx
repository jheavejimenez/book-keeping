/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createContext } from "react";
import ClientSidebar from "../../components/Navigation/ClientSidebar";
import ClientRequestTable from "../../components/Table/ClientRequestTable";
import Header from "../../components/Navigation/Header";
import Tabs from "../../components/Navigation/Tabs";
import Card from "../../components/Cards/Card";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "./ForbiddenPage";
import { useLocation } from "react-router-dom";
import TableHeading from "../../components/Table/TableHeading";
import OutgoingTableRow from "../../components/Table/OutgoingTableRow";
import dayjs from "dayjs";
import { useState } from "react";
import { collection, getDocs, query, orderBy, limit, where, startAt, endAt } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useEffect } from "react";





function Searchpage() {

    const titleTable = [
        "DocID",
        "Recipient",
        "File",
        "Date Sent",
        "Action",

        
        
    ]
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

    const { state } = useLocation();
    const { user } = useAuth();


    const fetchData = async () => {
        if (state === "") {
            alert("Please enter a search term")
        }
        else{
        const q = query(collection(db, "outgoing"), orderBy("datesend", "desc"), where("sentby", "==", user.email));
        const q1 = query(collection(db, "incoming"), orderBy("date", "desc"), where("email", "==", user.email));

         if (q && q1 !== 0 ) {
                const querySnapshot = await getDocs(q)
                const querySnapshot1 = await getDocs(q1)
                const items1 = []

                querySnapshot1.forEach((doc) => {
                        items1.push(doc.data())
                });

                const items = []
                querySnapshot.forEach((doc) => {
                        items.push(doc.data())
                        

                });
                setList([...items.filter((item) => item.filename.toLowerCase().includes(state.toLowerCase())), ...items1.filter((item) => item.filename.toLowerCase().includes(state.toLowerCase()))]);
            }
        } 
    };

    useEffect(() => {
        fetchData();
        


    }, [state]);

    

    
    if (user.role === "client") {

    return (
        
        <div 
            className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                
            {/*header*/}
            <Header />
                
            {/*sidebar*/}
            <ClientSidebar />
            
            <div className={"flex justify-between items-center h-14 bg-white header-right"}>
                    
            </div>
            
            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                <Card
                    titleText={"Search Filename Results for: " + state}
                />
            </div>
            
            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
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
                                <tr className={"text-sm font-medium text-center text-gray-900 dark:text-gray-100"}>
                                    <td colSpan={5} className={"py-4"}>No results found</td>
                                </tr>
                            ) : null
                            }

                            {list.map?.((item) => (
                                <OutgoingTableRow
                                    Column1={item.docid}
                                    Column2={item.email}
                                    Column3={item.filename}
                                    Column4={dayjs.unix(item.datesend?.seconds).format("YYYY-MM-DD")}
                                    
                                />)
                            )}
                            </tbody>
                        </table>
                    </div>



            


        </div>
        
    )
    }
    else {
        return (
            <ForbiddenPage/>
        )
    }
}


export default Searchpage;
