import React from "react";

function TableRow({ DocID, SenderName, fileName, timeStamp, status }) {
    let colors;

    switch (status) {
        case "Pending":
            colors = "text-yellow-700 bg-yellow-100";
            break;
        case "Approved":
            colors = "text-green-700 bg-green-100";
            break;
        case "In Progress":
            colors = "text-blue-700 bg-blue-100";
            break;
        case "New":
            colors = "text-red-700 bg-red-100";
            break;
        default:
            colors = "text-gray-700 bg-gray-100";
    }

    return (
        <tr className={"bg-gray-50 hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{DocID}</td>
            <td className={"px-4 py-3 text-sm"}>{SenderName}</td>
            <td className={"px-4 py-3 text-xs"}>{fileName}</td>
            <td className={"px-4 py-3 text-sm"}>{timeStamp}</td>
            <td className={"px-4 py-3 text-xs"}>
                <span className={`px-2 py-1 font-semibold leading-tight ${colors} rounded-full`}>
                    {status}
                </span>
            </td>
            <td className={"flex justify-center items-center w-14 h-14 transition-all duration-300 transform group-hover:rotate-12"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00A2E8" class="w-6 h-6">
                    <path
                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                    <path
                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
            </td>

        </tr>
    )
}

export default TableRow;
