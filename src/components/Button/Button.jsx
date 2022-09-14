import React from 'react'
import {useNavigate} from "react-router-dom";

function Button({text, path}) {
  const navigate = useNavigate();
  return (
    <button
        className={"px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 w-1/2"}
        onClick={() => navigate(path)}
    >
        {text}
    </button>

  )

    
}

export default Button;
