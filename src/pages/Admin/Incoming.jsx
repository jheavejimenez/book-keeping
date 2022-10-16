/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import IncomingTable from "../../components/Table/IncomingTable";
import Dropdown from "../../components/Button/FilterDropdown";
import Header from "../../components/Navigation/Header";
import Card from "../../components/Cards/Card";

function Incoming() {
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

                <div className="mt-4 mx-4 pt-7">
                    <span className="ml-2 text-sm font-medium tracking-wide truncate">Filter by Type <Dropdown /></span>
                </div>

                {/*client table*/}
                <IncomingTable />
            </div>

        </div>
    )
}

export default Incoming;