import React from 'react'

export const Result = (props) => {
    console.log(props)
  return (
    <div className="result">
        <p>{props.res} is winner</p>
    </div>
  )
}
