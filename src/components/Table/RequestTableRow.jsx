import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/Firebase";

function RequestTableRow() {
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            {data.map((item) => (
                <>
                    <td className={"px-4 py-3 text-sm"}>
                        {item.documentId}
                    </td>
                    <td className={"px-4 py-3 text-sm"}>
                        {item.reqfrom}
                    </td>
                </>
            ))}
        </tr>
    )
}

export default RequestTableRow;
