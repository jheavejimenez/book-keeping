import React from "react";

function AuditTableRow({ Time, User, Activity }) {
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{Time}</td>
            <td className={"px-4 py-3 text-sm"}>{User}</td>
            <td className={"px-4 py-3 text-sm"}>{Activity}</td>
        </tr>
    )
}

export default AuditTableRow;
