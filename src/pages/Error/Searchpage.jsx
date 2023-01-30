/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ClientSidebar from "../../components/Navigation/ClientSidebar";
import ClientRequestTable from "../../components/Table/ClientRequestTable";
import Header from "../../components/Navigation/Header";
import Tabs from "../../components/Navigation/Tabs";
import Card from "../../components/Cards/Card";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "../Error/ForbiddenPage";
import { useLocation } from "react-router-dom";
import TableHeading from "../../components/Table/TableHeading";
import OutgoingTableRow from "../../components/Table/OutgoingTableRow";
import dayjs from "dayjs";
import { useState } from "react";
import { getDocs, db } from "firebase/firestore";





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

    // const Database = getDocs(db.collection("requests").where("sender", "==", user.email).where("recipient", "==", state));

    

    
    // if (user.role === "client") {

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
                    titleText={"Search Results for: " + state}
                />
            </div>

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
                                <OutgoingTableRow
                                    Column1={item.docid}
                                    Column2={item.email}
                                    Column3={item.filename}
                                    Column4={dayjs.unix(item.date?.seconds).format("YYYY-MM-DD")}
                                    
                                />)
                            )}
                            </tbody>
                        </table>
                    </div>



            


        </div>
        
    )
    // }
    // else {
    //     return (
    //         <ForbiddenPage/>
    //     )
    // }
}


export default Searchpage;
