import React from "react";
import AdminSidebar from "../../components/Navigation/AdminSidebar";
import Header from "../../components/Navigation/Header";
import AdminStatisticCards from "../../components/Cards/AdminStatisticCards";
import ClientTable from "../../components/Table/ClientTable";
import FilterDropdown from "../../components/Button/FilterDropdown";

function AdminDashboard() {
    return (
        <>
            <div className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                {/*header*/}
                <Header />

                {/*sidebar*/}
                <AdminSidebar />

                <div className={"flex justify-between items-center h-14 bg-white header-right"}></div>
                
                <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                    
                    {/*statistics cards*/}
                    <AdminStatisticCards />
                    
                    <div className={"px-7 pt-7 mt-4 text-sm font-medium tracking-wide"}> 
                        Filter by Company <FilterDropdown />
                    </div>   
                    
                    {/*client table*/}
                        <ClientTable />
                    
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;