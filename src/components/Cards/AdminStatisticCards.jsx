import React from "react";
import { ArchiveBoxArrowDownIcon, BuildingOffice2Icon, DocumentTextIcon, UserGroupIcon } from "@heroicons/react/24/outline";
// import { useAuth } from "../../hooks/useAuth";

function AdminStatisticCards() {

    return (
        <div className={" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 "}>
            <div
                className={" bg-blue-400 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group h-28 "}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white " +
                        " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}
                >
                    <DocumentTextIcon
                        className={" w-12 h-12 transform transition-transform duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>326</p>
                    <p>Total Files Collected</p>
                </div>
            </div>
            <div
                className={" bg-blue-400 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group "}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white " + 
                    " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}
                >
                    <BuildingOffice2Icon className={" w-12 h-12 transform transition-transform" + 
                    " duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>45</p>
                    <p>Business Firms Held</p>
                </div>
            </div>
            <div
                className={" bg-blue-400 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group h-28 "}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white " + 
                    " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}>

                    <ArchiveBoxArrowDownIcon className={" w-12 h-12 transform transition-transform " + 
                    " duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>202</p>
                    <p>Archived Files</p>
                </div>
            </div>
            <div
                className={" bg-blue-400 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group"}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white rounded-full " +
                    " transition-all duration-300 transform group-hover:rotate-12 "}>
                    <UserGroupIcon className={"w-12 h-12 transform transition-transform " + 
                    " duration-500 ease-in-out "} />
                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>123</p>
                    <p>Total Users</p>
                </div>
            </div>
        </div>
    )
}


export default AdminStatisticCards;
