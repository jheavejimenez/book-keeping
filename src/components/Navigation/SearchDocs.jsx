import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchDocs() {
    return (
        <div className="flex justify-end">
            <div className={"bg-white rounded flex items-center w-52 max-w-xl mr-4 p-2 shadow-sm" + 
                "border border-gray-300"}
            >
                
                <button onClick={"handleSearch"} className={"outline-none focus:outline-none"}>
                    <MagnifyingGlassIcon className={"w-5 h-5 text-gray-500"} />
                </button>
                
                <input type="search" name="" id="" placeholder="Search documents" className={"w-full pl-3" + 
                    "text-sm text-black outline-none focus:outline-none bg-transparent"} 
                    //onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchDocs;