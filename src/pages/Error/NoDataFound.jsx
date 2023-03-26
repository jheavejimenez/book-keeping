import React from "react";
import EmptyBox from "../../../src/assets/no-data-img.webp";

function NoDataFound ({text}) {

    return (
        <div className="flex items-center justify-center h-40 bg-gray-100 py-32">
            <div class="flex flex-col items-center">
                 <div class="">
                    <img className="w-44 h-40" src={EmptyBox} alt="No Data" />
                </div>

                <div class="text-gray-400 font-medium text-sm md:text-lg lg:text-xl mt-8">{text}</div>

            </div>
        </div> 
    )
}
export default NoDataFound;