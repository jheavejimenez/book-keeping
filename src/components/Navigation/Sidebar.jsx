/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArchiveBoxArrowDownIcon, Cog8ToothIcon, DocumentArrowDownIcon, DocumentArrowUpIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";
import React from "react";
import LinkToSidebar from "../Links/LinkToSidebar";
import SidebarTitle from "../Title/SidebarTitle";

function Sidebar({page}) {
    return (
        <>
            <div
                className={" fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-500 " +
                    " h-full text-white transition-all duration-300 drop-shadow-lg border-none z-10 sidebar "}
            >
                <div className={" overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow "}>
                    <ul className="flex flex-col py-4 space-y-1">

                        <SidebarTitle title={"Main"} />

                        {/* Dashboard */}
                        <LinkToSidebar 
                            link={"/bookkeeper/dashboard"} 
                            current={page === "dashboard"}
                            icon={<HomeIcon className="w-6 h-6" />} 
                            title={"Dashboard"} />

                        {/* Request */}
                        <LinkToSidebar 
                            link={"/bookkeeper/request"} 
                            current={page === "request"}
                            icon={<EnvelopeIcon className="w-6 h-6" />} 
                            title={"Request"} />

                        {/* Incoming */}
                        <LinkToSidebar 
                            link={"/bookkeeper/incoming"} 
                            current={page === "incoming"}
                            icon={<DocumentArrowDownIcon className="w-6 h-6" />} 
                            title={"Incoming"} />

                        {/* Outgoing */}
                        <LinkToSidebar 
                            link={"/bookkeeper/outgoing"} 
                            current={page === "outgoing"}
                            icon={<DocumentArrowUpIcon className="w-6 h-6" />} 
                            title={"Outgoing"} />
                        
                        {/* Archive */}
                        <LinkToSidebar 
                            link={"/bookkeeper/archives"} 
                            current={page === "archives"}
                            icon={<ArchiveBoxArrowDownIcon className="w-6 h-6" />} 
                            title={"Archives"} />

                        <SidebarTitle title={"Settings"} />

                        {/* Account Settings */}
                        <LinkToSidebar 
                            link={"/bookkeeper/account-settings"} 
                            current={page === "settings"}
                            icon={<Cog8ToothIcon className="w-6 h-6" />} 
                            title={"Account Settings"} />

                    </ul>
                    <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2022</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar;