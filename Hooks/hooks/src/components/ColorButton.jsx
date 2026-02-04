import React from 'react'
import './ColorBlock.css'

function ColorButton(props) {
  return (
    <div>
        <button id='color-button' onClick={props.setColor} type="button">{props.children}</button>
    </div>
  )
}

export default ColorButton