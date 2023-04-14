import React from "react";
import "./index.css";
const HeadingText = (props) => {
  const className = props.className ? `text ${props.className}` : "text";
  return <div style={props.sx} className={className}>{props.children}</div>;
};

export default HeadingText;
