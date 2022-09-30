import React, { useEffect, useState } from "react";
import RequestTableRow from "./RequestTableRow";
import axios from "axios";
import TableHeading from "./TableHeading";

function RequestTable() {
    const [data, setData] = useState([]);
    const [titleTable, setTitleTable] = useState([]);

    const fakeData = async () => {
        const response = await axios.get("http://localhost:3000/requestData");
        setData(response.data);
    }

    const fakeTitleTable = async () => {
        const response = await axios.get("http://localhost:3000/requestHeader");
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
                            <tr className={"text-xs font-bold font-inter tracking-wide text-left text-gray-500 border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-100"}>
                                {titleTable.map((item) => (
                                    <TableHeading
                                        text={item}
                                    />

                                ))}
                            </tr>
                            </thead>
                            <tbody className={"bg-white font-inter divide-y"}>
                            {data.map((item) => (
                                <RequestTableRow
                                    ReqID={item.reqID}
                                    RequestFrom={item.requestFrom}
                                    RequestBy={item.requestBy}
                                    File={item.file}
                                    Purpose={item.purpose}
                                    DueDate={item.dueDate}
                                    DataRequested={item.dataRequested}
                                />)
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div
                        className={"grid px-4 py-3 text-xs font-semibold tracking-wide text-black uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-black dark:bg-gray-100"}>
                        <span className={"flex items-center col-span-3"}> Showing 21-30 of 100 </span>
                        <span className={"col-span-2"}></span>
                        <span className={"flex col-span-4 mt-2 sm:mt-auto sm:justify-end"}>
                            <nav aria-label={"Table navigation"}>
                                <ul className={"inline-flex items-center"}>
                                    <li>
                                        <button
                                            className={"px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"}
                                            aria-label="Previous">
                                            <svg aria-hidden="true" className="w-4 h-4 fill-current"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                    clipRule="evenodd" fillRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}>1</button>
                                    </li>
                                    <li>
                                        <button
                                            className={"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}>2</button>
                                    </li>
                                    <li>
                                        <button
                                            className={"px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple"}>3</button>
                                    </li>
                                    <li>
                                        <button
                                            className={"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}>4</button>
                                    </li>
                                    <li>
                                        <span className={"px-3 py-1"}>...</span>
                                    </li>
                                    <li>
                                        <button
                                            className={"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}>8</button>
                                    </li>
                                    <li>
                                        <button
                                            className={"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"}>9</button>
                                    </li>
                                    <li>
                                        <button
                                            className={"px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"}
                                            aria-label="Next">
                                            <svg className={"w-4 h-4 fill-current"} aria-hidden="true"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd" fillRule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestTable;
