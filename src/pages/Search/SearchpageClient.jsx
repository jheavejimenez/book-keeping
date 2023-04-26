/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createContext } from "react";
import ClientSidebar from "../../components/Navigation/ClientSidebar";
import ClientRequestTable from "../../components/Table/ClientRequestTable";
import Header from "../../components/Navigation/Header";
import Tabs from "../../components/Navigation/Tabs";
import Card from "../../components/Cards/Card";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "../Error/ForbiddenPage";
import { useLocation } from "react-router-dom";
import TableHeading from "../../components/Table/TableHeading";
import SearchTableRow from "../../components/Table/SearchTableRow";
import dayjs from "dayjs";
import { useState } from "react";
import { collection, getDocs, query, orderBy, limit, where, startAt, endAt } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import NoDataFound from "../Error/NoDataFound";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';






function Searchpage() {
    const notfiyWarning = (text) => toast.warning(text, {
        position: "top-center",

    });
    const titleTable = [
        "DocID",
        "Recipient",
        "File",
        "Date Sent",
        "Location",

        
        
    ]
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);

    const { state } = useLocation();
    const { user } = useAuth();


    const fetchData = async () => {
        if (state === "") {
            notfiyWarning("Please enter a search term")
        }
        else{
        const q = query(collection(db, "outgoing"), where("sentby", "==", user.email));
        const q1 = query(collection(db, "incoming"), where("email", "==", user.email));

         if (q !== 0 ) {
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
                setList([...items.filter((item) => item.filename.toLowerCase().includes(state.toLowerCase())) && items.filter((item) => item.sentby === user.email)])
            }
        } 
    };

    useEffect(() => {
        fetchData();
        


    }, [state]);

    

    
    if (user.role === "client") {

    return (
        <>
        <ToastContainer />
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
                    titleText={"Search results for filename: " + state}
                />
            </div>
            
            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                        <table className={"w-full"}>
                            <thead>
                            <tr className={" text-xs font-bold font-inter tracking-wide text-left " + 
                            " text-gray-500 border-b border-gray-700 " +
                            " bg-gray-100 dark:text-gray-400 "}>
                                {titleTable.map((item) => (
                                    <TableHeading
                                        text={item}
                                    />

                                ))}
                            </tr>
                            </thead>
                            <tbody className={"font-inter divide-y"}>

                            {list.length === 0 ? ( 
                                <tr>
                                    <td colSpan={5} className={"py-10"}>
                                        <NoDataFound
                                            text={"No results found. Try a different keyword."}
                                        />
                                    </td>
                                </tr>
                            ) : null
                            }

                            {list.map?.((item) => (
                                <SearchTableRow
                                    Column1={item.docid}
                                    Column2={item.email}
                                    Column3={item.filename}
                                    Column4={dayjs.unix(item.date?.seconds || item.date?.seconds).format("hh:mm:ss A, MMM DD, YYYY")}
                                    Column5={item.location}
                                    
                                />)
                            )}
                            </tbody>
                        </table>
                    </div>



            


        </div>
        </>
        
    )
    }
    else {
        return (
            <ForbiddenPage/>
        )
    }
}


export default Searchpage;
