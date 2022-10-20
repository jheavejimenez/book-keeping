import React from "react";

function FillUpFrom({titleFor, title, titleID, placeholderTitle}) {
    return (
        <div>
            <div className="flex flex-start">
                <label
                    htmlFor={titleFor}
                    className={"justify-start flex text-black"}
                >
                    {title}
                </label>
                <label className="text-red-500">*</label>
            </div>
            <input id={titleID}
                className={" border rounded-md mb-3 mt-1 h-10 pl-3 " +
                    " border-gray-400 font-normal placeholder-gray-400 " +
                    " text-black text-base w-full "}
                placeholder={placeholderTitle}

            />
        </div>
    );
}
export default FillUpFrom;