import React from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import Header from "../../components/Navigation/Header";
import Card from "../../components/Cards/Card";
import { useAuth } from "../../hooks/useAuth";
import BkprArchiveTable from "../../components/Table/BkprArchiveTable";
import ForbiddenPage from "../Error/ForbiddenPage";


function BkprArchive() {
    const { user } = useAuth();

    if(user.role === "bookkeeper") {
        return (
            
            <div 
                className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                    
                {/*header*/}
                <Header />
                    
                {/*sidebar*/}
                <Sidebar page={"archives"} />
                
                <div className={"flex justify-between items-center h-14 bg-white header-right"}>
                        
                </div>
                
                <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                    <Card
                        titleText={"Archived Documents of " + user.email} //include the email or name here
                    />
                    <BkprArchiveTable/>
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

export default BkprArchive;