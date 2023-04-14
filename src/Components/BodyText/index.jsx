import { Typography } from '@mui/material'
import React from 'react'
import "./index.css"
const BodyText = (props) => {
  const className = props.className ? `body-text ${props.className}` : "body-text";
  return (
    <div className={className} style={props.sx} ><Typography variant="body1">{props.children}</Typography></div>
  )
}

export default BodyText