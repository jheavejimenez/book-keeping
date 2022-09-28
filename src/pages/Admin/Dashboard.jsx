/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClientTable from "../../components/Table/ClientTable";
import Dropdown from "../../components/Button/Dropdown";



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
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 60 60" stroke="currentColor"
                                    className={"stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"}>                                
                                    <g>
                                        <path strokeWidth="3" d="M37,22H12c-0.552,0-1,0.448-1,1s0.448,1,1,1h25c0.552,0,1-0.448,1-1S37.552,22,37,22z"/>
                                        <path strokeWidth="3" d="M12,16h10c0.552,0,1-0.448,1-1s-0.448-1-1-1H12c-0.552,0-1,0.448-1,1S11.448,16,12,16z"/>
                                        <path strokeWidth="3" d="M38,31c0-0.552-0.448-1-1-1H12c-0.552,0-1,0.448-1,1s0.448,1,1,1h25C37.552,32,38,31.552,38,31z"/>
                                        <path strokeWidth="3" d="M30,39c0-0.552-0.448-1-1-1H12c-0.552,0-1,0.448-1,1s0.448,1,1,1h17C29.552,40,30,39.552,30,39z"/>
                                        <path strokeWidth="3" d="M12,46c-0.552,0-1,0.448-1,1s0.448,1,1,1h14c0.552,0,1-0.448,1-1s-0.448-1-1-1H12z"/>
                                        <path strokeWidth="3" d="M3,2h29v14h14v17h2V14.586L33.414,0H1v60h31v-2H3V2z M34,3.414L44.586,14H34V3.414z"/>
                                        <path strokeWidth="3" d="M35,36v24h24V36H35z M57,58H37V38h9v12.586l-4.293-4.293l-1.414,1.414L47,54.414l6.707-6.707l-1.414-1.414L48,50.586V38h9   V58z"/>
                                    </g>
                                </svg>
   
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-2xl"}>326</p>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 490 490" stroke="currentColor"
                                    className={"stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"}>       
                                    <g id="bold_copy_37_">
                                        <path strokeWidth="2" d="M245,0C109.684,0,0,109.684,0,245s109.684,245,245,245s245-109.684,245-245S380.316,0,245,0z M245,459.375   c-118.213,0-214.375-96.163-214.375-214.375S126.787,30.625,245,30.625S459.375,126.787,459.375,245S363.212,459.375,245,459.375z"/>
                                        <polygon points="266.836,286.987 275.196,114.874 214.788,114.874 223.532,286.987  "/>
                                        <path strokeWidth="2" d="M245.184,305.974c-20.136,0-34.178,14.424-34.178,34.576c0,19.738,13.674,34.576,34.178,34.576   c20.503,0,33.825-14.823,33.825-34.576C278.611,320.399,265.304,305.974,245.184,305.974z"/>
                                    </g>
                                </svg>

                            </div>
                            <div className={"text-right"}>
                                <p className={"text-2xl"}>245</p>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 60 60" stroke="currentColor"
                                    className={"stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"}>
                                    <g>
                                        <path strokeWidth="3" d="M37,22H12c-0.552,0-1,0.448-1,1s0.448,1,1,1h25c0.552,0,1-0.448,1-1S37.552,22,37,22z"/>
                                        <path strokeWidth="3" d="M12,16h10c0.552,0,1-0.448,1-1s-0.448-1-1-1H12c-0.552,0-1,0.448-1,1S11.448,16,12,16z"/>
                                        <path strokeWidth="3" d="M38,31c0-0.552-0.448-1-1-1H12c-0.552,0-1,0.448-1,1s0.448,1,1,1h25C37.552,32,38,31.552,38,31z"/>
                                        <path strokeWidth="3" d="M30,39c0-0.552-0.448-1-1-1H12c-0.552,0-1,0.448-1,1s0.448,1,1,1h17C29.552,40,30,39.552,30,39z"/>
                                        <path strokeWidth="3" d="M12,46c-0.552,0-1,0.448-1,1s0.448,1,1,1h14c0.552,0,1-0.448,1-1s-0.448-1-1-1H12z"/>
                                        <path strokeWidth="3" d="M3,2h29v14h14v17h2V14.586L33.414,0H1v60h31v-2H3V2z M34,3.414L44.586,14H34V3.414z"/>
                                        <path strokeWidth="3" d="M35,36v24h24V36H35z M57,58h-9V45.414l4.293,4.293l1.414-1.414L47,41.586l-6.707,6.707l1.414,1.414L46,45.414V58h-9V38h20   V58z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-2xl"}>202</p>
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
                                <p className={"text-2xl"}>123</p>
                                <p>Total Files Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className={"px-7 py-5 text-xs font-semibold text-black dark:border-gray-700 bg-gray-50 dark:text-black dark:bg-gray-100"}> Filter by Type <Dropdown /></div>
                             
                    {/*client table*/}
                        <ClientTable />
                    {/*end client table*/}
                </div>
            </div>
        </>
    )
}


export default Dashboard;
