import React, { useState } from "react";
import {Grid,Box} from "@mui/material";
import login from "../../Assest/signup.png"
import Button from "@mui/material/Button";
import { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import InputFeild from "../../Components/InputField";
import Buttons from "../../Components/Buttons";
const Login = () => {
  return (
    <div style={{ background: "rgb(21,26,36)" }}>
      <Header />
<Grid container spacing={2}>

<Grid item sm={6} xs={8} md={6}>
      <div style={{ margin: "25% 25% 15% 25%" }}>
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
            placeholder="Email"
            required={true}
          />
          <InputFeild
            sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
            placeholder="Password"
            type="password"
            required={true}
          />

          <Buttons className={"btn"} sx={{ width: "100%", color: "#cfd1d4" }} onClick={()=>window.location.href="/dashboard"}>
            Login
          </Buttons>
        </Box>
      </div>
      </Grid>
      <Grid item sm={6} xs={8} md={6}><div><img src={login}  width="90%" /></div></Grid>
      
      </Grid>
     
      <Footer />
    </div>
  );
};

export default Login;
