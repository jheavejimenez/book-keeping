import React from "react";
import { Link } from "react-router-dom";

function Tabs ({path, name, current}) {
    return (
        <>
           
            <div 
                className={" text-sm font-medium text-center text-gray-500 "}
                
            >
                <ul className={"flex flex-wrap w-full md:w-max"}>
                    <li className="mr-1" aria-current={current ? "page" : undefined}>

                        <Link to={path}
                            className={`${current && "border-blue-500 text-blue-500"}
                            inline-block p-4 rounded-t-xl border-b-2 w-24
                            text-gray-600 hover:border-blue-500 hover:text-blue-500`}>
                            <p>
                                {name}
                            </p>
                        </Link>
                    </li>
                    {/* <li className="mr-1">
                        <Link to="" 
                            onClick={attr}
                            className={`${attr && 'border-blue-500 text-blue-500'} text-black
                            inline-block p-4 rounded-t-lg border-b-2 border-transparent 
                            text-gray-600 hover:border-blue-500 hover:text-blue-500`}>
                            Done
                        </Link>
                    </li> */}
                </ul>
            </div>
 
        </>
    )
}
export default Tabs;