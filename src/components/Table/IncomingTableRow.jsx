import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

function IncomingTableRow({DocID, Sender, File, DateReceived}) {
    
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{DocID}</td>
            <td className={"px-4 py-3 text-sm"}>{Sender}</td>
            <td className={"px-4 py-3 text-sm"}>{File}</td>
            <td className={"px-4 py-3 text-xs"}>{DateReceived}</td> 
            <td className={"flex justify-center items-center w-14 h-14 transition-all duration-300 transform group-hover:rotate-12"}>
               <button>
               <ArrowDownTrayIcon className={"w-6 h-6 text-blue-500 group-hover:text-blue-700"}/>
               </button>
            </td>
   
        </tr>
    )
}

export default IncomingTableRow;
