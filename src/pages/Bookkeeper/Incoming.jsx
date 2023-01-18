/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import IncomingTable from "../../components/Table/IncomingTable";
import Dropdown from "../../components/Button/FilterDropdown";
import Header from "../../components/Navigation/Header";
import Card from "../../components/Cards/Card";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "../Error/ForbiddenPage";

function Incoming() {
    const { user } = useAuth();

    if (user.role === "admin") {
    return (
        <div
            className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
            
            {/*header*/}
            <Header />

            {/*sidebar*/}
            <Sidebar />

            <div className={"flex justify-between items-center h-14 bg-white header-right"}>
                    
            </div>
                
            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                <Card
                    titleText={"Incoming Documents"}
                />

                

                {/*client table*/}
                <IncomingTable />
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

export default Incoming;