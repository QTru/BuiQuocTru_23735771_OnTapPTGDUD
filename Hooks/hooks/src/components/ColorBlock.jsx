import React from 'react'
import './ColorBlock.css'

function ColorBlock(props) {
  return (
    <div id="color-block" className={props.color}>{props.children}</div>
  )
}

export default ColorBlock