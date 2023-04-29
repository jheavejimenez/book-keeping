import React from "react";
import AdminSidebar from "../../components/Navigation/AdminSidebar";
import Header from "../../components/Navigation/Header";
import Card from "../../components/Cards/Card";
import { useAuth } from "../../hooks/useAuth";
import FilterDropdownAction from "../../components/Button/FilterDropdownAction";
import AdminAuditTable from "../../components/Table/AdminAuditTrailTable";
import ForbiddenPage from "../Error/ForbiddenPage";

function AuditTrail() {
    const { user } = useAuth();

    if(user.role === "admin") {
        return (
            
            <div 
                className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                    
                {/*header*/}
                <Header />
                    
                {/*sidebar*/}
                <AdminSidebar page={"audit-trail"} />
                
                <div className={"flex justify-between items-center h-14 bg-white header-right"}>
                        
                </div>
                
                <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                    <Card
                        titleText={"Audit Trail"}
                    />
                    
                    

                    <AdminAuditTable/>


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

export default AuditTrail;