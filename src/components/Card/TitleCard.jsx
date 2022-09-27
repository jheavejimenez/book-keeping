import React from "react";

function TitleCard({titleText}) {
    return (
        <div className="mt-4 mx-4">
            <div className={"bg-blue-500 text-white shadow-lg rounded-md" +
                    " flex items-center justify-between p-3 " +
                    " text-white font-medium group h-20"}>
                    <span className="ml-2 text-3xl font-medium tracking-wide truncate">{titleText}</span>
            </div>
        </div>
    )
}

export default TitleCard;