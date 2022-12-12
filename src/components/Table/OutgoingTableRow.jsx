import React from "react";
import ArchiveFile from "../Button/ArchiveFile";
import EditFile from "../Button/EditFile";

function OutgoingTableRow({Column1, Column2, Column3, Column4}) {
    
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{Column1}</td>
            <td className={"px-4 py-3 text-sm"}>{Column2}</td>
            <td className={"px-4 py-3 text-sm"}>{Column3}</td>
            <td className={"px-4 py-3 text-sm"}>{Column4}</td>
            <td className={"flex justify-center items-center w-14 h-14 ml-3"}>
                <button>
                    <EditFile />
                </button>
                <button className="pl-2">
                    <ArchiveFile />
                </button>
            </td>   
        </tr>
    )
}

export default OutgoingTableRow;
