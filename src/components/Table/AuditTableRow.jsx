import React from "react";

function AuditTableRow({ Column1, Column2, Column3 }) {
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{Column1}</td>
            <td className={"px-4 py-3 text-sm"}>{Column2}</td>
            <td className={"px-4 py-3 text-sm"}>{Column3}</td>
        </tr>
    )
}

export default AuditTableRow;
