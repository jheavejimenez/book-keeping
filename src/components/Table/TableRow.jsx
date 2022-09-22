import React from "react";

function TableRow({documentID, SenderName, fileName, timeStamp, status}) {
    return (
        <tr className={"bg-gray-50 hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3"}>
                <div className={"flex items-center text-sm"}>
                    <div className={"relative hidden w-8 h-8 mr-3 rounded-full md:block"}>
                        <img className={"object-cover w-full h-full rounded-full"}
                             src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                             alt="" loading="lazy" />
                        <div className={"absolute inset-0 rounded-full shadow-inner"}
                             aria-hidden="true"></div>
                    </div>
                    <div>
                        <p className={"font-semibold"}>{SenderName}</p>
                        <p className={"text-xs text-black"}>{fileName}</p>
                    </div>
                </div>
            </td>
            <td className={"px-4 py-3 text-sm"}>{timeStamp}</td>
            <td className={"px-4 py-3 text-xs"}>
                <span className={"px-2 py-1 font-semibold leading-tight " +
                    "text-green-700 bg-green-100 rounded-full "
                }>{status}</span>
            </td>
            <td className={"px-4 py-3 text-sm"}>15-01-2021</td>
        </tr>
    )
}

export default TableRow;
