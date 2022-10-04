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
    <PlusCircleIcon className= " w-7 h-7 mr-1 text-blue-500 "/>{text}
    </button>

  )

    
}

export default RequestButton;
