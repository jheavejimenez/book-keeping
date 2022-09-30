/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClientTable from "../../components/Table/ClientTable";
import Dropdown from "../../components/Button/Dropdown";
import { DocumentArrowDownIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";



function Dashboard() {
    return (
        <>
            <div
                className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black"}>

                {/*header*/}
                <div className={"fixed w-full flex items-center justify-between h-14 text-white bg-blue-400 z-10"}>
                    <div
                        className={"flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-400 text-white border-none"}>
                        <img className={"w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"}
                            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" alt="" />
                        <span className="hidden md:block">ADMIN</span>
                    </div>

                    <div
                        className={"flex items-center justify-start md:justify-center text-3xl pl-3 w-14 md:w-64 h-14 bg-blue-400 text-white border-none"}>
                        <span className="hidden md:block">Dashboard</span>
                    </div>
                    <div className={"flex justify-between items-center h-14 bg-blue-400 text-black header-right"}>
                        <div
                            className={"bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200"}>
                            <button className={"outline-none focus:outline-none"}>
                                <svg className={"w-5 text-gray-600 h-5 cursor-pointer"} fill="none" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                            <input type="search" name="" id="" placeholder="Search"
                                className={"w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"} />
                        </div>
                        <ul className={"flex items-center"}>
                            <li>
                                <a href="#" className={"flex items-center mr-4 text-white hover:text-blue-800"}>
                                    <span className={"inline-flex mr-1"}>
                                        <svg className={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">

                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                            </path>
                                        </svg>
                                    </span>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
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

                            <DocumentArrowDownIcon className="h-10 w-10 text-gray-900 group-hover:text-gray-400"/>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    class="w-10 h-10 transform transition-transform duration-500 ease-in-out">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg> */}
                                
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
                                <ExclamationCircleIcon className="h-10 w-10 text-gray-900 group-hover:text-gray-400"/>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 330 330" stroke="currentColor"
                                    className={"stroke-current text-blue-800 dark:text-gray-800 transform" +
                                        " transition-transform duration-500 ease-in-out"
                                    }>                                    
                                    <g>
                                        <path strokeWidth="3" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300   c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
                                        <path strokeWidth="3" d="M226.872,106.664l-84.854,84.853l-38.89-38.891c-5.857-5.857-15.355-5.858-21.213-0.001   c-5.858,5.858-5.858,15.355,0,21.213l49.496,49.498c2.813,2.813,6.628,4.394,10.606,4.394c0.001,0,0,0,0.001,0   c3.978,0,7.793-1.581,10.606-4.393l95.461-95.459c5.858-5.858,5.858-15.355,0-21.213   C242.227,100.807,232.73,100.806,226.872,106.664z"/>
                                    </g>
                                </svg>
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
