import React from "react";

function SidebarTitle({ title }) {
    return (
        <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-blue-50 uppercase">{title}</div>
            </div>
        </li>
    )
}
export default SidebarTitle;
