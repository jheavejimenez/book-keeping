import React from "react";
import ChangeStatus from "../Button/ChangeStatus";

function TableRow({ DocID, SenderName, fileName, timeStamp, status }) {
    let colors;

    switch (status) {
        case "Pending":
            colors = "text-white bg-[#EBB000]";
            break;
        case "Completed":
            colors = "text-white bg-[#28A745]";
            break;
        case "In Progress":
            colors = "text-white bg-[#1F6CDE]";
            break;
        case "New":
            colors = "text-white bg-[#DC3545]";
            break;
        default:
            colors = "text-gray-700 bg-gray-100";
    }

    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{DocID}</td>
            <td className={"px-4 py-3 text-sm"}>{SenderName}</td>
            <td className={"px-4 py-3 text-sm"}>{fileName}</td>
            <td className={"px-4 py-3 text-sm"}>{timeStamp}</td>
            <td className={"px-4 py-3 text-sm"}>
                <span className={`px-2 py-1 font-semibold leading-tight ${colors} rounded-none`}>
                    {status}
                </span>
            </td>
            <td className={"flex justify-center items-center w-14 h-14"}>
               <button>
               <ChangeStatus/>
               </button>
            </td>

        </tr>
    )
}

export default TableRow;
