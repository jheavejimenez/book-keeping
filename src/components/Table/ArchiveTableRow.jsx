import React from "react";

function ArchiveTableRow({ DocID, File, Company, DateCreated, DateArchived,Checkbox}) {
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}> {Checkbox} </td>
            <td className={"px-4 py-3 text-sm"}>{DocID}</td>
            <td className={"px-4 py-3 text-sm"}>{File}</td>
            <td className={"px-4 py-3 text-sm"}>{Company}</td>
            <td className={"px-4 py-3 text-sm"}>{DateCreated}</td>
            <td className={"px-4 py-3 text-sm"}>{DateArchived}</td>
        </tr>
    )
}

export default ArchiveTableRow;
