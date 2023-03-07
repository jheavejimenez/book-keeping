import React from "react";
import ChangeStatusED from "../Button/ChangeStatusED";


function AuditTableRow({ Column1, Column2, Column3, Column4, Column5, Column6, Checkbox }) {
    let colors;

    switch (Column6) {
        case "Enabled":
            colors = "text-gray-700 bg-gray-300";
            break;
        case "Disabled":
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
            <td className={"px-4 py-3 text-sm"}> {Checkbox} </td>
            <td className={"px-4 py-3 text-sm"}>{Column1}</td>
            <td className={"px-4 py-3 text-sm"}>{Column2}</td>
            <td className={"px-4 py-3 text-sm"}>{Column3}</td>
            <td className={"px-4 py-3 text-sm"}>{Column4}</td>
            <td className={"px-4 py-3 text-sm"}>{Column5}</td>
            
        </tr>
    )
}

export default AuditTableRow;
