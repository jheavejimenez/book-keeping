/* eslint-disable jsx-a11y/anchor-is-valid */
import { Cog8ToothIcon, DocumentArrowDownIcon, DocumentArrowUpIcon, HomeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import LinkToSidebar from "../Links/LinkToSidebar";
import SidebarTitle from "../Title/SidebarTitle";


function ClientSidebar () {
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
                            link={"/dashboard"}
                            icon={<HomeIcon className="w-6 h-6"/>}
                            title={"Dashboard"}
                        />
                       
                        <LinkToSidebar
                            link={"/incoming"}
                            icon={<DocumentArrowDownIcon className="w-6 h-6"/>}
                            title={"Incoming"}
                        />

                        <LinkToSidebar
                            link={"/outgoing"}
                            icon={<DocumentArrowUpIcon className="w-6 h-6"/>}
                            title={"Outgoing"}
                        />
                       
                        <SidebarTitle title={"Settings"} />
                        
                        <LinkToSidebar
                            link={"/admin/account-settings"}
                            icon={<Cog8ToothIcon className="w-6 h-6"/>}
                            title={"Account Settings"}
                        />

                    </ul>
                    <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2022</p>
                </div>
            </div>
        </>
    )
}

export default ClientSidebar;