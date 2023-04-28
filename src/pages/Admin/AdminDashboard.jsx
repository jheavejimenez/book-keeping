import React from "react";
import AdminSidebar from "../../components/Navigation/AdminSidebar";
import Header from "../../components/Navigation/Header";
import AdminStatisticCards from "../../components/Cards/AdminStatisticCards";
import ClientTable from "../../components/Table/ClientTable";
import FilterDropdown from "../../components/Button/FilterDropdown";
import { useAuth } from "../../hooks/useAuth";
import AdminTable from "../../components/Table/AdminTable";
import ForbiddenPage from "../Error/ForbiddenPage";

function AdminDashboard() {
    const { user } = useAuth();

    if (user.role === "admin") {
        return (
            <>
                <div className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                    {/*header*/}
                    <Header />

                    {/*sidebar*/}
                    <AdminSidebar page={"dashboard"} />

                    <div className={"flex justify-between items-center h-14 bg-white header-right"}></div>
                    
                    <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                        
                        {/*statistics cards*/}
                        <AdminStatisticCards />
                        
                        
                        
                        {/*client table*/}
                            <AdminTable />
                        
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <ForbiddenPage />
        )
    }
}

export default AdminDashboard;