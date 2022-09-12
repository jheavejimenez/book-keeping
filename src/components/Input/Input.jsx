import React from "react";

function Input({placeHolder, type}) {
    return (
        <div>
            <input
                placeholder={placeHolder}
                type={type}
            />
        </div>
    )
}

export default Input;
