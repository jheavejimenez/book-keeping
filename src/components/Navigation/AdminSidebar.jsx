import { ArchiveBoxArrowDownIcon, BookOpenIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import React from "react";
import LinkToSidebar from "../Links/LinkToSidebar";
import SidebarTitle from "../Title/SidebarTitle";


function AdminSidebar () {
    return (
        <>
            {/* Dashboard */}
            <div
                className={" fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-500 " + 
                " h-full text-white transition-all duration-300 drop-shadow-lg border-none z-10 sidebar "}
            >
                <div className={" overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow "}>
                    <ul className="flex flex-col py-4 space-y-1">
                        
                        <SidebarTitle title={"Main"} />
                        
                        <LinkToSidebar
                            link={"/admin/dashboard"}
                            icon={<HomeIcon className="w-6 h-6"/>}
                            title={"Dashboard"}
                        />
                       
                        <LinkToSidebar
                            link={"/admin/audit-trail"}
                            icon={<BookOpenIcon className="w-6 h-6"/>}
                            title={"Audit Trail"}
                        />

                        <LinkToSidebar
                            link={"/admin/users"}
                            icon={<UsersIcon className="w-6 h-6"/>}
                            title={"Users"}
                        />
                        
                        <LinkToSidebar
                            link={"/admin/archives"}
                            icon={<ArchiveBoxArrowDownIcon className="w-6 h-6"/>}
                            title={"Archives"}
                        />

                    </ul>
                    <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2022</p>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar;