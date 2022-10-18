import React from 'react';


function RequestForm({titleFor, title, titleID, placeholderTitle, typeName, targetValue}) {
    
    return (
        <div>
            <label htmlFor={titleFor} className={"text-black"}>{title}</label>
            <input id={titleID}
                className={"border rounded-md mb-3 mt-1 h-10 pl-3" +
                    "border-gray-400 font-normal placeholder-gray-400" +
                    "text-black text-base w-full"}
                placeholder={placeholderTitle} type={typeName}
                onChange={targetValue} />
        </div>
    );
}
export default RequestForm;
