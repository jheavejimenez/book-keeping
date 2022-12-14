import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import {useNavigate} from "react-router-dom";

function ForbiddenPage () {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-48">
            <div class="flex flex-col items-center">
                 <div class="text-blue-500 font-extrabold text-7xl xl:text-9xl">
                    403
                </div>

                <div class="font-bold text-3xl xl:text-6xl lg:text-5xl md:text-4xl mt-10">
                    You are not authorized.
                </div>

                <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                    You tried to access a page you did not have
                </div>
                <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl ">
                    prior authorization for.
                </div>

                <button
                    className={"bg-blue-500 text-white rounded w-32 p-2 mt-9 " + 
                    " hover:bg-blue-400 font-medium flex flex-row"}
                    type="button"
                    onClick={() => navigate("/")}
                >
                    <ArrowLeftIcon className="w-6 h-6 mr-2 ml-2"/> Go back
                </button>
            </div>
        </div> 
    )
}
export default ForbiddenPage;