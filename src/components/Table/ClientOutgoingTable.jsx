import React, { useEffect, useState } from "react";
import OutgoingTableRow from "./OutgoingTableRow";
import axios from "axios";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";

function ClientOutgoingTable() {
    const [data, setData] = useState([]);
    const [titleTable, setTitleTable] = useState([]);

    const fakeData = async () => {
        const response = await axios.get("http://localhost:3000/clientOutgoingData");
        setData(response.data);
    }

    const fakeTitleTable = async () => {
        const response = await axios.get("http://localhost:3000/clientOutgoingHeader");
        setTitleTable(response.data[0].title);
    }

    useEffect(() => {
        fakeData();
        fakeTitleTable();
        const interval = setInterval(() => {
            fakeData();
            fakeTitleTable();
        }, 10000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);


    return (
        <>
            <div className={"mt-4 mx-4"}>
                <div className={"w-full overflow-hidden rounded-lg shadow-xs"}>
                    <div className={"w-full overflow-x-auto"}>
                        <table className={"w-full"}>
                            <thead>
                            <tr className={" text-xs font-bold font-inter tracking-wide text-left " + 
                            " text-gray-500 border-b dark:border-gray-700 " + 
                            " bg-gray-50 dark:text-gray-400 dark:bg-gray-100 "}>
                                {titleTable.map((item) => (
                                    <TableHeading
                                        text={item}
                                    />

                                ))}
                            </tr>
                            </thead>
                            <tbody className={"font-inter divide-y"}>
                            {data.map((item) => (
                                <OutgoingTableRow
                                    Column1={item.outID}
                                    Column2={item.recipient}
                                    Column3={item.file}
                                    Column4={item.dateSent}
                                />)
                            )}
                            </tbody>
                        </table>
                    </div>
                    <Pagination/>
                </div>
            </div>
        </>
    )
}

export default ClientOutgoingTable;
