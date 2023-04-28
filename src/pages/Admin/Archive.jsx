import React from "react";
import AdminSidebar from "../../components/Navigation/AdminSidebar";
import Header from "../../components/Navigation/Header";
import Card from "../../components/Cards/Card";
import { useAuth } from "../../hooks/useAuth";
import AdminArchiveTable from "../../components/Table/AdminArchiveTable";
import ForbiddenPage from "../Error/ForbiddenPage";


function Archive() {
    const { user } = useAuth();

    if(user.role === "admin") {
        return (
            
            <div 
                className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                    
                {/*header*/}
                <Header />
                    
                {/*sidebar*/}
                <AdminSidebar page={"archives"} />
                
                <div className={"flex justify-between items-center h-14 bg-white header-right"}>
                        
                </div>
                
                <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                    <Card
                        titleText={"Archived Documents"}
                    />
                    <AdminArchiveTable/>
                </div>
            </div>
        )
    }
    else {
        return (
            <ForbiddenPage />
        )
    }
}

export default Archive;