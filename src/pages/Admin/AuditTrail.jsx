import React from "react";
import AdminSidebar from "../../components/Navigation/AdminSidebar";
import Header from "../../components/Navigation/Header";
import Card from "../../components/Cards/Card";
import FilterDropdown from "../../components/Button/FilterDropdown";
import AdminAuditTable from "../../components/Table/AdminAuditTrailTable";

function AuditTrail() {
    return (
        
        <div 
            className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                
            {/*header*/}
            <Header />
                
            {/*sidebar*/}
            <AdminSidebar />
            
            <div className={"flex justify-between items-center h-14 bg-white header-right"}>
                    
            </div>
            
            <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                <Card
                    titleText={"Audit Trail"}
                />
                
                <div className={" flex flex-row px-7 pt-4 mt-4 text-sm font-medium tracking-wide gap-4"}> 
                    <div>
                    Filter by User <FilterDropdown />
                    </div>
                    
                    <div>
                    Filter by Action <FilterDropdown />
                    </div>
                </div>

                <AdminAuditTable/>


            </div>

        </div>
    )
}

export default AuditTrail;