import React from "react";

function Input({placeHolder, type, value, onChange}) {
    return (
        <div>
            <input
                placeholder={placeHolder}
                type={type}
                value={value}
                onChange={onChange}
                className={"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"}
            />
        </div>
    )
}

export default Input;
