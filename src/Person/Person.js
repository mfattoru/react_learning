import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.func}>Hi, my name is {props.name}, I'm {props.age} years old</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed}/>
    </div>
  )
}

export default person;