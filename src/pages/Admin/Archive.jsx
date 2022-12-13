import React from "react";
import AdminSidebar from "../../components/Navigation/AdminSidebar";
import Header from "../../components/Navigation/Header";
import Card from "../../components/Cards/Card";
import AdminArchiveTable from "../../components/Table/AdminArchiveTable";
import FilterDropdown from "../../components/Button/FilterDropdown";
import Button from "../../components/Button/Button";
import DeleteButton from "../../components/Button/DeleteButton";

function Archive() {
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
                    titleText={"Archived Documents"}
                />

                <div className={" flex flex-row px-7 pt-4 mt-4 text-sm font-medium tracking-wide gap-4"}> 
                    
                    <div className={"mt-4"}>
                        Filter by Company <FilterDropdown />
                    </div>

                    <div>
                        <Button text={"Unarchive"}/>
                    </div>

                    <div>
                        <DeleteButton 
                            text={"Delete"}
                            className={"bg-white text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "} 

                        />
                    </div>
                    
                </div>
                
                <AdminArchiveTable/>
            </div>
        </div>
    )
}

export default Archive;