import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <button>
        {props.data ? props.data.button: "Loading text..."}
    </button>
  )
}

export default Button