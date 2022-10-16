import React from "react";
import TitleCard from "../../components/Cards/TitleCard";
import ClientSidebar from "../../components/Navigation/ClientSidebar";
import ClientIncomingTable from "../../components/Table/ClientIncomingTable";
import Dropdown from "../../components/Button/FilterDropdown";
import Header from "../../components/Navigation/Header";

function ClientIncoming() {
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
                    titleText={"Incoming Documents"}
                />

                <div className="mt-4 mx-4 pt-7">
                    <span className="ml-2 text-sm font-medium tracking-wide truncate">Filter by Type <Dropdown /></span>
                </div>

                {/*client table*/}
                <ClientIncomingTable />
            </div>

                
        </div>
    )
}

export default ClientIncoming;