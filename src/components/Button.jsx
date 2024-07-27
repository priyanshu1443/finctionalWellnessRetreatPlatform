import React from 'react'

function Button({ text, func, disable }) {
    return (
        <button
            type='button'
            className={`px-4 py-1 ${disable ? "bg-backgroundOneDisabled" : "bg-backgroundOne"}   text-white rounded-md `}
            onClick={func}
            disabled={disable}
        >
            {text}
        </button>
    )
}

export default Button
