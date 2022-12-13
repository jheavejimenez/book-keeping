import React from "react";

function AuditTableRow({ Name, Email, Role, Company, LastActive, Status }) {
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{Name}</td>
            <td className={"px-4 py-3 text-sm"}>{Email}</td>
            <td className={"px-4 py-3 text-sm"}>{Role}</td>
            <td className={"px-4 py-3 text-sm"}>{Company}</td>
            <td className={"px-4 py-3 text-sm"}>{LastActive}</td>
            <td className={"px-4 py-3 text-sm"}>{Status}</td>
        </tr>
    )
}

export default AuditTableRow;
