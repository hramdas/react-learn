import React from 'react'

export const Square = (props) => {
   
    const classname = props.className
  return (
    <div onClick={props.onClick} className={classname}>
        {props.state}
    </div>
  )
}
