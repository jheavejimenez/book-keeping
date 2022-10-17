import React from "react";

function ClientOutgoingTableRow ({DocID, Recipient, File, DateSent}) {
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{DocID}</td>
            <td className={"px-4 py-3 text-sm"}>{Recipient}</td>
            <td className={"px-4 py-3 text-sm"}>{File}</td>
            <td className={"px-4 py-3 text-sm"}>{DateSent}</td>
        </tr>
    )
}

export default ClientOutgoingTableRow;