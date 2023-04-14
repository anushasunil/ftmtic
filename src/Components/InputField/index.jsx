import React from "react";
import "./index.css"
import { Box, TextField, Button } from "@mui/material";
const Form = (props) => {
  return (
    <div>
      <div  style={{borderRadius:"25px"}}>
        <input required={props.required} value={props.value} onChange={props.onChange} className="inputfield" style={{padding:"12px",borderRadius:"25px",border:"1px solid grey",boxSizing: "border-box",background:"transparent",...props.sx}} type={props.type} placeholder={props.placeholder} ></input><br></br>
       
      </div>
    </div>
  );
};

export default Form;
