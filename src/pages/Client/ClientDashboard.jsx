/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ClientSidebar from "../../components/Navigation/ClientSidebar";
import ClientRequestTable from "../../components/Table/ClientRequestTable";
import Dropdown from "../../components/Button/Dropdown";
import Header from "../../components/Navigation/Header";
import TitleCard from "../../components/Card/TitleCard";

function ClientDashboard() {
    return (
        <>
            <div className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                <Header />
                {/*sidebar*/}
                <ClientSidebar />
                {/*end of sidebar*/}
                <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                <TitleCard 
                    titleText={"To-Do / Reminders"}
                />
                    <div className={"px-7 pt-7 mt-4 text-sm font-medium tracking-wide"}> Filter by Type <Dropdown /></div>           
                    {/*client table*/}
                        <ClientRequestTable/>
                    {/*end client table*/}
                    
                </div>
            </div>
        </>
    )
}


export default ClientDashboard;
