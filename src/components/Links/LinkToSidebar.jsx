import React from "react";
import { Link } from "react-router-dom";

function LinkToSidebar({ link, icon, title }) {
    return (
        <li>
            <Link to={link}
                className={" relative flex flex-row items-center h-11 focus:outline-none hover:bg-white " +
                    " text-white-600 hover:text-blue-500 border-l-4 border-transparent hover:border-blue-500 pr-6 "}
            >
                <span className=" inline-flex justify-center items-center ml-2.5 ">
                    {icon}
                </span>
                <span className=" ml-2 text-sm font-medium tracking-wide truncate ">{title}</span>
            </Link>
        </li>

    )
}

export default LinkToSidebar;