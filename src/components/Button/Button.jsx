import React from 'react'

function Button({text, onClick}) {
  return (
    <button
        className={"px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"}
    >
        {text}
      
    </button>

  )

    
}

export default Button;
