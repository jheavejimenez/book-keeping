import React from 'react'
import {useNavigate} from "react-router-dom";
import {  PlusCircleIcon } from "@heroicons/react/24/outline";

function RequestButton({text, path}) {
  const navigate = useNavigate();
  return (
    <button
        className={"bg-white text-blue-500 font-bold px-6 py-2 rounded inline-flex items-center"}
        onClick={() => navigate(path)}
    >
    <PlusCircleIcon className= " w-7 h-7 mr-1 text-blue-500 "/>
    {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
         */}
        {text}
    </button>

  )

    
}

export default RequestButton;
