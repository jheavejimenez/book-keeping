import React from 'react'
import {useNavigate} from "react-router-dom";

function Button({text, path}) {
  const navigate = useNavigate();
  return (
    <button
        className={"px-6 py-2 mt-4 text-white bg-[#00A2E8] rounded-lg hover:bg-[#00A2E8] w-32 "}
        onClick={() => navigate(path)}
    >
        {text}
    </button>

  )

    
}

export default Button;
