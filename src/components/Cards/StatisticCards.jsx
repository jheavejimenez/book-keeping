import React from "react";
import {
    CheckCircleIcon,
    DocumentArrowDownIcon,
    DocumentArrowUpIcon,
    ExclamationCircleIcon
} from "@heroicons/react/24/outline";


function StatisticCards() {
    return (
        <div className={" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 "}>
            <div
                className={" bg-blue-300 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group h-28 "}
            >
                <div
                    className={" flex justify-center items-center w-14 h-14 bg-white " +
                        " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}
                >
                    <DocumentArrowDownIcon
                        className={" w-10 h-10 transform transition-transform duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>326</p>
                    <p>All incoming files</p>
                </div>
            </div>
            <div
                className={" bg-lime-200 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group"}
            >
                <div
                    className={" flex justify-center items-center w-14 h-14 bg-white " + 
                    " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}
                >
                    <ExclamationCircleIcon
                        className={" w-10 h-10 transform transition-transform duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>245</p>
                    <p>Total Requested Files</p>
                </div>
            </div>
            <div
                className={" bg-red-300 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group h-28 "}
            >
                <div
                    className={" flex justify-center items-center w-14 h-14 bg-white " + 
                    " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}>

                    <DocumentArrowUpIcon className={" w-10 h-10 transform transition-transform " + 
                    " duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>202</p>
                    <p>All Outgoing Files</p>
                </div>
            </div>
            <div
                className={" bg-green-300 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group"}
            >
                <div
                    className={" flex justify-center items-center w-14 h-14 bg-white rounded-full " +
                    " transition-all duration-300 transform group-hover:rotate-12 "}>
                    <CheckCircleIcon className={"w-10 h-10 transform transition-transform " + 
                    " duration-500 ease-in-out "} />
                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>123</p>
                    <p>Total Files Completed</p>
                </div>
            </div>
        </div>
    )
}


export default StatisticCards;
