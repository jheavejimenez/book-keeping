import React from "react";
import ClientSidebar from "../../components/Navigation/ClientSidebar";
import Header from "../../components/Navigation/Header";
import Dropdown from "../../components/Button/FilterDropdown";
import Card from "../../components/Cards/Card";
import ClientOutgoingButton from "../../components/Button/ClientOutgoingButton";
import ClientOutgoingTable from "../../components/Table/ClientOutgoingTable";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "../Error/ForbiddenPage";

function ClientOutgoing () {
    const { user } = useAuth();

    if (user.role === "client") {

    return (
        <div
            className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
            
            {/*header*/}
            <Header />

            {/*sidebar*/}
            <ClientSidebar page={"outgoing"} />

            <div className={"flex justify-between items-center h-14 bg-white header-right"}>
                    
            </div>
                
            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                <Card
                    titleText={"Outgoing Documents"}
                    // button={<ClientOutgoingButton text={"Send Files"}/>}
                />

                

                {/*client table*/}
               <ClientOutgoingTable />
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

export default ClientOutgoing;