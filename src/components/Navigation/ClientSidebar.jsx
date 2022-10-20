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
                        {/* <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-blue-50 uppercase">Main</div>
                            </div>
                        </li> */}
                        <LinkToSidebar
                            link={"/client/dashboard"}
                            icon={<HomeIcon className="w-6 h-6"/>}
                            title={"Dashboard"}
                        />
                        {/* <li>
                            <Link to="/client/dashboard"
                                className={"relative flex flex-row items-center h-11 focus:outline-none"+ 
                                "hover:bg-white text-white-600 hover:text-blue-500 border-l-4" + 
                                "border-transparent hover:border-blue-500 pr-6"}
                            >
                                <span className="inline-flex justify-center items-center ml-2.5">
                                    <HomeIcon className="w-6 h-6"/>
                                </span>
                                <span className="ml-2 text-sm font-medium tracking-wide truncate">
                                    Dashboard
                                </span>
                            </Link>
                        </li> */}

                        <LinkToSidebar
                            link={"/client/incoming"}
                            icon={<DocumentArrowDownIcon className="w-6 h-6"/>}
                            title={"Incoming"}
                        />

                        {/* <li>
                            <Link to="/client/incoming"
                                className={"relative flex flex-row items-center h-11 focus:outline-none" + 
                                "hover:bg-white text-white-600 hover:text-blue-500 border-l-4" + 
                                "border-transparent hover:border-blue-500 pr-6"}
                            >
                                <span className="inline-flex justify-center items-center ml-2.5">
                                    <DocumentArrowDownIcon className="w-6 h-6"/>
                                </span>
                                <span className="ml-2 text-sm font-medium tracking-wide truncate">
                                    Incoming
                                </span>
                                {/* <span
                                    className={"hidden md:block px-2 py-0.5 ml-auto text-xs font-medium " +
                                    "tracking-wide text-red-500 bg-red-50 rounded-full"}
                                >1.2k</span> 
                            </Link>
                        </li> */}

                        <LinkToSidebar
                            link={"/client/outgoing"}
                            icon={<DocumentArrowUpIcon className="w-6 h-6"/>}
                            title={"Outgoing"}
                        />
                        {/* <li>
                            <Link to="/client/outgoing"
                                className={"relative flex flex-row items-center h-11 focus:outline-none"+ 
                                "hover:bg-white text-white-600 hover:text-blue-500 border-l-4" + 
                                "border-transparent hover:border-blue-500 pr-6"}
                            >
                                <span className="inline-flex justify-center items-center ml-2.5">
                                    <DocumentArrowUpIcon className="w-6 h-6"/>
                                </span>
                                <span className="ml-2 text-sm font-medium tracking-wide truncate">
                                    Outgoing
                                </span>
                            </Link>
                        </li> */}
                        
                        <SidebarTitle title={"Settings"} />
                        
                        {/* <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center mt-5 h-8">
                                <div className="text-sm font-light tracking-wide text-blue-50 uppercase">
                                    Settings
                                </div>
                            </div>
                        </li> */}

                        <LinkToSidebar
                            link={"/admin/account-settings"}
                            icon={<Cog8ToothIcon className="w-6 h-6"/>}
                            title={"Account Settings"}
                        />

                        {/* <li>
                            <Link to="/admin/account-settings"
                                className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-white " + 
                                "text-white-600 hover:text-blue-500 border-l-4 border-transparent hover:border-blue-500 pr-6"}
                            >
                                <span className="inline-flex justify-center items-center ml-2.5">
                                    <Cog8ToothIcon className="w-6 h-6"/>
                                </span>
                                <span className="ml-2 text-sm font-medium tracking-wide truncate">
                                    Account Settings
                                </span>
                            </Link>
                        </li> */}
                    </ul>
                    <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2022</p>
                </div>
            </div>
        </>
    )
}

export default ClientSidebar;