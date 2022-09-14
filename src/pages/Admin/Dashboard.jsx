import React from "react";
import ClientTable from "../../components/Table/ClientTable";


function Dashboard() {
    return (
        <>
            <div
                className={"min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white"}>

                {/*sidebar*/}
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

                <div
                    className={"fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar"}>
                    <div className={"overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow"}>
                        <ul className={"flex flex-col py-4 space-y-1"}>
                            <li className={"px-5 hidden md:block"}>
                                <div className={"flex flex-row items-center h-8"}>
                                    <div className={"text-sm font-light tracking-wide text-gray-400 uppercase"}>Main</div>
                                </div>
                            </li>
                            <li>
                                <a href="#"
                                    className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"}>
                                    <span className={"inline-flex justify-center items-center ml-4"}>
                                        <svg className={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    </span>
                                    <span className={"ml-2 text-sm tracking-wide truncate"}>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"}>
                                    <span className={"inline-flex justify-center items-center ml-4"}>
                                        <svg className={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                    </span>
                                    <span className={"ml-2 text-sm tracking-wide truncate"}>Board</span>
                                    <span
                                        className={"hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full"}>New</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"}>
                                    <span className={"inline-flex justify-center items-center ml-4"}>
                                        <svg className={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                    </span>
                                    <span className={"ml-2 text-sm tracking-wide truncate"}>Messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"}>
                                    <span className={"inline-flex justify-center items-center ml-4"}>
                                        <svg className={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                    </span>
                                    <span className={"ml-2 text-sm tracking-wide truncate"}>Notifications</span>
                                    <span
                                        className={"hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full"}>1.2k</span>
                                </a>
                            </li>
                            <li className={"px-5 hidden md:block"}>
                                <div className={"flex flex-row items-center mt-5 h-8"}>
                                    <div className={"text-sm font-light tracking-wide text-gray-400 uppercase"}>Settings
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#"
                                    className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"}>
                                    <span className={"inline-flex justify-center items-center ml-4"}>
                                        <svg className={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span>
                                    <span className={"ml-2 text-sm tracking-wide truncate"}>Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className={"relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"}>
                                    <span className={"inline-flex justify-center items-center ml-4"}>
                                        <svg className={"w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </span>
                                    <span className={"ml-2 text-sm tracking-wide truncate"}>Settings</span>
                                </a>
                            </li>
                        </ul>
                        <p className={"mb-14 px-5 py-3 hidden md:block text-center text-xs"}>Copyright @2021</p>
                    </div>
                </div>
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
