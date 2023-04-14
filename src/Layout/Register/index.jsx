import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import InputFeild from "../../Components/InputField";
import Buttons from "../../Components/Buttons";
import register from "../../Assest/loginpng.png"
const SignUp = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[password2,setPassword2]=useState("")


  return (
    <div style={{ background: "rgb(21,26,36)" }}>
      <Header />
      <br></br>
      <br></br>
      <Grid container spacing={2}>
      <Grid item xs={8} sm={6} md={6}><div style={{marginTop:"-2%"}}>
      <img src={register} alt="register" width={"100%"}/ >
      </div></Grid>
        <Grid item xs={8} sm={6} md={6}>
          <div style={{ margin: "15% 25% 15% 25%" }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 2, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <InputFeild
                sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
                placeholder="Name"
                required={true}
              />
              <InputFeild
                sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
                placeholder="Email"
                required={true}
              />
              <InputFeild
                sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
                placeholder="Password"
                type="password"
                required={true}
              />
              <InputFeild
                sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
                placeholder=" Confirm Password"
                type="password"
                required={true}
              />
              <Buttons
                className={"btn"}
                sx={{ width: "100%", color: "#cfd1d4" }}
                onClick={()=>window.location.href="/login"}
              >
                Sign Up
              </Buttons>
              <Buttons
              className={"btn"}
              sx={{ width: "100%", color: "#cfd1d4" }}
              onClick={()=>window.location.href="/login"}
            >
              Login
            </Buttons>
            </Box>
          </div>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default SignUp;
