import React from 'react'
import {useNavigate} from "react-router-dom";

function Button({text, path}) {
  const navigate = useNavigate();
  return (
    <button
        type={"submit"}
        className={" px-6 py-2 mt-4 text-white bg-[#00A2E8] rounded-lg hover:bg-[#00A2E8] w-full "}
        onClick={() => navigate(path)}
    >
        {text}
    </button>

  )
}

export default Button;
