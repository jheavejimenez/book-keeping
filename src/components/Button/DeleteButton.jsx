import React from 'react'
import {useNavigate} from "react-router-dom";

function DeleteButton({text,path}) {
  const navigate = useNavigate();
  return (
    <button
        type={"button"}
        className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "}
        onClick={() => navigate(path)}
    >
        {text}
    </button>

  )
}

export default DeleteButton;
