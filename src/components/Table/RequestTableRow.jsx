import React from "react";

function RequestTableRow({ ReqID, RequestedFrom, File, Purpose, DueDate, DateRequested }) {
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{ReqID}</td>
            <td className={"px-4 py-3 text-sm"}>{RequestedFrom}</td>
            <td className={"px-4 py-3 text-sm"}>{File}</td>
            <td className={"px-4 py-3 text-xs"}>{Purpose}</td>
            <td className={"px-4 py-3 text-xs"}>{DueDate}</td>
            <td className={"px-4 py-3 text-xs"}>{DateRequested}</td>
        </tr>
    )
}

export default RequestTableRow;
