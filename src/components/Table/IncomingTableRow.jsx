import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

function IncomingTableRow({Column1, Column2, Column3, Column4, Column5, Column6}) {
    
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{Column1}</td>
            <td className={"px-4 py-3 text-sm"}>{Column2}</td>
            <td className={"px-4 py-3 text-sm"}>{Column3}</td>
            <td className={"px-4 py-3 text-sm"}>{Column4}</td>
            <td className={"px-4 py-3 text-sm"}>{Column5}</td> 
            <td className={" flex justify-center items-center w-14 h-14 transition-all duration-300 " + 
            " transform group-hover:rotate-12 "}>{Column6}
               
            </td>
   
        </tr>
    )
}

export default IncomingTableRow;
