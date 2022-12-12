/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import ClientTable from "../../components/Table/ClientTable";
import FilterDropdown from "../../components/Button/FilterDropdown";
import StatisticCards from "../../components/Cards/StatisticCards";
import Header from "../../components/Navigation/Header";
import { useAuth } from "../../hooks/useAuth";
import ForbiddenPage from "../Error/ForbiddenPage";

function Dashboard() {
    const { user } = useAuth();

    if (user.role === "admin") {
        
    
        return (
            <>
                <div className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                    {/*header*/}
                    <Header />

                    {/*sidebar*/}
                    <Sidebar />

                    <div className={"flex justify-between items-center h-14 bg-white header-right"}></div>
                    
                    <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                        
                        {/*statistics cards*/}
                        <StatisticCards />
                        
                        <div className={"px-7 pt-7 mt-4 text-sm font-medium tracking-wide"}> 
                            Filter by Type <FilterDropdown />
                        </div>   
                        
                        {/*client table*/}
                            <ClientTable />
                        
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <ForbiddenPage/>
        )
    }

}


export default Dashboard;
