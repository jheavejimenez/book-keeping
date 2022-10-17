import React from "react";
import { Link } from "react-router-dom";

function Tabs () {
    return (
        <>
           
            <div 
                className={"text-sm font-medium text-center text-gray-500 border-b" + 
                "border-gray-400 dark:text-gray-400 dark:border-gray-300"}
            >
                <ul className={"flex flex-wrap -mb-px"}>
                    <li className="mr-2">
                        <Link to="" 
                            className={"text-black inline-block p-4 rounded-t-lg border-b-2 border-transparent" + 
                            "hover:text-gray-600 hover:border-blue-500 dark:hover:text-blue-500"}>
                            Requested
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link to="" 
                            className={"text-black inline-block p-4 rounded-t-lg border-b-2 border-transparent" + 
                            "hover:text-gray-600 hover:border-blue-500 dark:hover:text-blue-500"}>
                            Done
                        </Link>
                    </li>
                </ul>
            </div>
 
        </>
    )
}
export default Tabs;