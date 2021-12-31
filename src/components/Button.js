import React from 'react'

const Button = ({isActive,clicked}) => {
   
    return (
      <div>
        <button onClick={clicked}>{isActive ? "Get anathor User":"get user"}</button>
      </div>
    )
}

export default Button
