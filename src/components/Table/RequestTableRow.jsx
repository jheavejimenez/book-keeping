import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/Firebase";

function RequestTableRow() {
    const [data, setData] = useState([]);

    const getAllRequestDocumments = async () => {
        const snapshot = await getDocs(collection(db, "request"));
        setData(snapshot.docs.map((doc) => doc.data()));
    }

    useEffect(() => {
        getAllRequestDocumments();
        const interval = setInterval(() => {
            getAllRequestDocumments();
        }, 10000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    console.log(data);
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            {/*{data.map((item) => (*/}
            {/*    <td className={"px-4 py-3 text-sm"}>*/}
            {/*        {item.}*/}
            {/*    </td>*/}
            {/*))}*/}
        </tr>
    )
}

export default RequestTableRow;
