import React from "react";
import ClientSidebar from "../../components/Navigation/ClientSidebar";
import ClientIncomingTable from "../../components/Table/ClientIncomingTable";
import Dropdown from "../../components/Button/FilterDropdown";
import Header from "../../components/Navigation/Header";
import Card from "../../components/Cards/Card";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "../Error/ForbiddenPage";

function ClientIncoming() {
    const { user } = useAuth();

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
                    titleText={"Incoming Documents"}
                />

                <div className="mt-4 mx-4 pt-7">
                    <span className="ml-2 text-sm font-medium tracking-wide truncate">
                        Filter by Type <Dropdown />
                    </span>
                </div>

                {/*client table*/}
                <ClientIncomingTable />
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

export default ClientIncoming;