import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClientTable from "../../components/Table/ClientTable";


function Dashboard() {
    return (
        <>
            <div
                className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white"}>

                {/*header*/}
                <div className={"fixed w-full flex items-center justify-between h-14 text-white z-10"}>
                    <div
                        className={"flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none"}>
                        <img className={"w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"}
                            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" />
                        <span className="hidden md:block">ADMIN</span>
                    </div>
                    <div className={"flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right"}>
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
                                <button
                                    aria-hidden="true"
                                    className={"group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"}>
                                    <svg
                                        width="24"
                                        height="24"
                                        className={"fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke=""
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                        />
                                    </svg>
                                    <svg
                                        width="24"
                                        height="24"
                                        className={"fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke=""
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <div className={"block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"}></div>
                            </li>
                            <li>
                                <a href="#" className={"flex items-center mr-4 hover:text-blue-100"}>
                                    <span className={"inline-flex mr-1"}>
                                        <svg className={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
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
                <div className={"flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right"}>
                    <div
                        className={"bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200"}>
                        <button className={"outline-none focus:outline-none"}>
                            <svg className={"w-5 text-gray-600 h-5 cursor-pointer"} fill="none" strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                        <input
                            type="search"
                            placeholder="Search"
                            className={"w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"}
                        />
                    </div>
                </div>
                <div className={"h-full ml-14 mt-14 mb-10 md:ml-64"}>
                    <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4"}>
                        <div
                            className={"bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md" +
                                " flex items-center justify-between p-3 border-b-4 border-blue-600 " +
                                "dark:border-gray-600 text-white font-medium group"
                            }
                        >
                            <div
                                className={"flex justify-center items-center w-14 h-14 bg-white " +
                                    "rounded-full transition-all duration-300 transform group-hover:rotate-12"
                                }
                            >
                                <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className={"stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-2xl"}>1,257</p>
                                <p>Visitors</p>
                            </div>
                        </div>
                        <div
                            className={"bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md" +
                                " flex items-center justify-between p-3 border-b-4 border-blue-600" +
                                " dark:border-gray-600 text-white font-medium group"
                            }>
                            <div
                                className={"flex justify-center items-center" +
                                    " w-14 h-14 bg-white rounded-full transition-all " +
                                    "duration-300 transform group-hover:rotate-12"
                                }>
                                <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className={"stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-2xl"}>557</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div
                            className={"bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md " +
                                "flex items-center justify-between p-3 border-b-4 border-blue-600 " +
                                "dark:border-gray-600 text-white font-medium group"
                            }>
                            <div
                                className={"flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12"}>
                                <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className={"stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-2xl"}>$11,257</p>
                                <p>Sales</p>
                            </div>
                        </div>
                        <div
                            className={"bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md " +
                                "flex items-center justify-between p-3 border-b-4 " +
                                "border-blue-600 dark:border-gray-600 text-white font-medium group"
                            }>
                            <div
                                className={"flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12"}>
                                <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className={"stroke-current text-blue-800 dark:text-gray-800 transform" +
                                        " transition-transform duration-500 ease-in-out"
                                    }>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-2xl"}>$75,257</p>
                                <p>Balances</p>
                            </div>
                        </div>
                    </div>
                    {/*client table*/}
                        <ClientTable />
                    {/*end client table*/}
                </div>
            </div>
        </>
    )
}


export default Dashboard;
