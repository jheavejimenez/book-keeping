/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import OutgoingTable from "../../components/Table/OutgoingTable";
import Header from "../../components/Navigation/Header";
import Card from "../../components/Cards/Card";
import OutgoingButton from "../../components/Button/OutgoingButton";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "../Error/ForbiddenPage";
import FilterDropdown from "../../components/Button/FilterDropdown";
function Outgoing() {
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
                    titleText={"Outgoing Documents"}
                    button={<OutgoingButton text={"Send Files"}/>}
                />
                
                {/*outgoing table*/}
                <OutgoingTable />
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

export default Outgoing;