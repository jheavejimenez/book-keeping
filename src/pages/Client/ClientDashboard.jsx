/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ClientSidebar from "../../components/Navigation/ClientSidebar";
import ClientRequestTable from "../../components/Table/ClientRequestTable";
import Header from "../../components/Navigation/Header";
import Tabs from "../../components/Navigation/Tabs";
import Card from "../../components/Cards/Card";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "../Error/ForbiddenPage";

function ClientDashboard() {


    const { user } = useAuth();

    if (user.role === "client") {


    return (
        
        <div 
            className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                
            {/*header*/}
            <Header />
                
            {/*sidebar*/}
            <ClientSidebar page={"dashboard"} />
            
            <div className={"flex justify-between items-center h-14 bg-white header-right"}>
                    
            </div>
            
            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                <Card
                    titleText={"To-Do / Reminders"}
                />
                
                
                {/*client table*/}
                <ClientRequestTable />    
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


export default ClientDashboard;
