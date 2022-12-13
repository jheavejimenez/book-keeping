import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function ArchiveFile() {
    return (
        <>
            <button
                type="button"
            >
                <ArchiveBoxArrowDownIcon className=" w-6 h-6 text-blue-500 group-hover:text-blue-700 "/>
            </button>
        </>
    )
}

export default ArchiveFile;