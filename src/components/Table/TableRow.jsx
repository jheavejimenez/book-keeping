import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

function TableRow({ DocID, SenderName, fileName, timeStamp, status }) {
    let colors;

    switch (status) {
        case "Pending":
            colors = "text-yellow-700 bg-yellow-100";
            break;
        case "Approved":
            colors = "text-green-700 bg-green-100";
            break;
        case "In Progress":
            colors = "text-blue-700 bg-blue-100";
            break;
        case "New":
            colors = "text-red-700 bg-red-100";
            break;
        default:
            colors = "text-gray-700 bg-gray-100";
    }

    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{DocID}</td>
            <td className={"px-4 py-3 text-sm"}>{SenderName}</td>
            <td className={"px-4 py-3 text-xs"}>{fileName}</td>
            <td className={"px-4 py-3 text-sm"}>{timeStamp}</td>
            <td className={"px-4 py-3 text-xs"}>
                <span className={`px-2 py-1 font-semibold leading-tight ${colors} rounded-full`}>
                    {status}
                </span>
            </td>
            <td className={"flex justify-center items-center w-14 h-14 transition-all duration-300 transform group-hover:rotate-12"}>
               <button>
               <PencilSquareIcon className={"w-6 h-6 text-blue-500 group-hover:text-blue-700"}/>
               </button>
            </td>

        </tr>
    )
}

export default TableRow;
