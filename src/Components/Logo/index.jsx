import React from 'react'
import logo from "../../Assest/fitomatic_logo.png"
const Logo = (props) => {
  return (
    <div style={{...props.sx}}>
    <img src={logo} alt="openautologo" width="100%"/>
    </div>)
}

export default Logo