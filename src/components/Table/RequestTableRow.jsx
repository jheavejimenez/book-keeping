import React from "react";

function RequestTableRow({ReqID, RequestFrom, RequestBy, File, Purpose, DueDate, DataRequested}) {
    
    return (
        <tr className={"bg-gray-50 hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{ReqID}</td>
            <td className={"px-4 py-3 text-sm"}>{RequestFrom}</td>
            <td className={"px-4 py-3 text-xs"}>{RequestBy}</td>
            <td className={"px-4 py-3 text-sm"}>{File}</td>
            <td className={"px-4 py-3 text-xs"}>{Purpose}</td>
            <td className={"px-4 py-3 text-xs"}>{DueDate}</td>
            <td className={"px-4 py-3 text-xs"}>{DataRequested}</td>    
        </tr>
    )
}

export default RequestTableRow;
