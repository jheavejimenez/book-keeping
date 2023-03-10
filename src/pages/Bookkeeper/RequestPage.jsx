/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import RequestButton from "../../components/Button/RequestButton";
import Card from "../../components/Cards/Card";
import Header from "../../components/Navigation/Header";
import Sidebar from "../../components/Navigation/Sidebar";
import RequestTable from "../../components/Table/RequestTable";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "../Error/ForbiddenPage";

function RequestPage() {
    const { user } = useAuth();

    if (user.role === "bookkeeper") {
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
                        titleText={"Requested Documents"}
                        button={<RequestButton text={"Request"}/>}

                    />
        
                    {/*request table*/}
                    <RequestTable />
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

export default RequestPage;