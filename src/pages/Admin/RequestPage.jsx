/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import RequestCard from "../../components/Card/RequestCard"; 
import Header from "../../components/Navigation/Header";
import Sidebar from "../../components/Navigation/Sidebar";
import RequestTable from "../../components/Table/RequestTable";


function RequestPage() {
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
                <RequestCard 
                    titleText={"Requested Documents"}
                       
                />
    
                {/*request table*/}
                <RequestTable />
            </div>

                
        </div>
    )
}

export default RequestPage;