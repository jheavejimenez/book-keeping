import React from "react";

function Input({placeHolder, type}) {
    return (
        <div>
            <input
                placeholder={placeHolder}
                type={type}
                className={"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"}
            />
        </div>
    )
}

export default Input;
