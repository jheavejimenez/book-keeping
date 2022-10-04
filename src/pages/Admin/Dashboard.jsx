/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import ClientTable from "../../components/Table/ClientTable";
import Dropdown from "../../components/Button/Dropdown";
import { CheckCircleIcon, DocumentArrowDownIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Header from "../../components/Navigation/Header";



function Dashboard() {
    return (
        <>
            <div className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>
                {/*header*/}
                <Header />
                {/*end of header*/}

                {/*sidebar*/}
                <Sidebar />
                {/*end of sidebar*/}
                <div className={"flex justify-between items-center h-14 bg-white header-right"}>
                    
                </div>
                <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                    {/*statistics cards*/}
                    <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4"}>
                        <div
                            className={"bg-blue-300 text-black shadow-lg rounded-md" +
                                " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                                " text-white font-medium group h-28"
                            }
                        >
                            <div
                                className={"flex justify-center items-center w-14 h-14 bg-white " +
                                    "rounded-full transition-all duration-300 transform group-hover:rotate-12"
                                }
                            >
                                <DocumentArrowDownIcon className={"w-10 h-10 transform transition-transform duration-500 ease-in-out"}/>
   
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-3xl"}>326</p>
                                <p>All incoming files</p>
                            </div>
                        </div>
                        <div
                            className={"bg-lime-200 text-black shadow-lg rounded-md" +
                                " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                                " text-white font-medium group"
                            }>
                            <div
                                className={"flex justify-center items-center" +
                                    " w-14 h-14 bg-white rounded-full transition-all " +
                                    "duration-300 transform group-hover:rotate-12"
                                }
                            >
                                <ExclamationCircleIcon className={"w-12 h-12 transform transition-transform duration-500 ease-in-out"}/>

                            </div>
                            <div className={"text-right"}>
                                <p className={"text-3xl"}>245</p>
                                <p>Total Requested Files</p>
                            </div>
                        </div>
                        <div
                            className={"bg-red-300 text-black shadow-lg rounded-md" +
                                " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                                " text-white font-medium group h-28"
                            }>
                            <div
                                className={"flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    class="w-10 h-10 transform transition-transform duration-500 ease-in-out">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-3xl"}>202</p>
                                <p>All Outgoing Files</p>
                            </div>
                        </div>
                        <div
                            className={"bg-green-300 text-black shadow-lg rounded-md" +
                                " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                                " text-white font-medium group"
                            }>
                            <div
                                className={"flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12"}>
                                <CheckCircleIcon className="w-12 h-12 transform transition-transform duration-500 ease-in-out"/>
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-3xl"}>123</p>
                                <p>Total Files Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className={"px-7 pt-7 mt-4 text-sm font-medium tracking-wide"}> Filter by Type <Dropdown /></div>
                             
                    {/*client table*/}
                        <ClientTable />
                    {/*end client table*/}
                    
                </div>
            </div>
        </>
    )
}


export default Dashboard;
