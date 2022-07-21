import React from "react";
import MuiButton from "@mui/material/Button";

export default Button = (props) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};
