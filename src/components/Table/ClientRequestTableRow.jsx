import React from "react";

function ClientRequestTableRow({ReqID, RequestedBy, RequestedFile, Purpose, DueDate, DateReceived}) {
    
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{ReqID}</td>
            <td className={"px-4 py-3 text-sm"}>{RequestedBy}</td>
            <td className={"px-4 py-3 text-sm"}>{RequestedFile}</td>
            <td className={"px-4 py-3 text-xs"}>{Purpose}</td>
            <td className={"px-4 py-3 text-xs"}>{DueDate}</td>
            <td className={"px-4 py-3 text-xs"}>{DateReceived}</td>    
        </tr>
    )
}

export default ClientRequestTableRow;
