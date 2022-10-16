/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ClientSidebar from "../../components/Navigation/ClientSidebar";
import ClientRequestTable from "../../components/Table/ClientRequestTable";
import Header from "../../components/Navigation/Header";
import TitleCard from "../../components/Cards/TitleCard";
import Tabs from "../../components/Navigation/Tabs";

function ClientDashboard() {
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
                <TitleCard 
                    titleText={"To-Do / Reminders"}
                />

                {/*Tabs*/}
                <div className="mt-4 mx-4 pt-2">
                    <Tabs />
                </div>
                
                {/*client table*/}
                <ClientRequestTable/>    
            </div>


        </div>
        
    )
}


export default ClientDashboard;
