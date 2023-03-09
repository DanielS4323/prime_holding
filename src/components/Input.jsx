import React from 'react'

const Input = (props) => {
  return (
    <React.Fragment>
        <label htmlFor={props.for}>{props.label}</label>
        <input onChange={props.onChange} type={props.type} id={props.for} name={props.for}/>
    </React.Fragment>
  )
}

export default Input
