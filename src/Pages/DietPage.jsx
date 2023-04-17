import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import food from "../Assest/health.png";
import InputFeild from "../Components/InputField";
import Buttons from "../Components/Buttons";
import { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";

const DietPage = () => {
  const [userDets, setUserDets] = useState(null);
  const [bmi, setBmi] = useState(null);
  console.log(userDets);

  const handleClick = () => {
    fetch("/api/bmi", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userDets),
    })
      .then((response) => response.json())
      .then((processedData) => {
        setBmi(processedData);
        console.log("success", processedData);
      })
      .catch((error) => {
        console.error("process error", error);
      });
  };

  return (
    <>
      <Header />
      <div
        className="DietPage"
        style={{ background: "rgb(17, 23, 32)", display: "flex", gap: "2rem" }}
      >
        {/* <img src={food}
                style={{width: "40%", border: "1px solid white"}}
                /> */}

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
                  placeholder="age"
                  required={true}
                  onChange={(e) => {
                    setUserDets({ ...userDets, age: e.target.value });
                  }}
                />
                <InputFeild
                  sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
                  placeholder="height"
                  required={true}
                  onChange={(e) => {
                    setUserDets({ ...userDets, height: e.target.value });
                  }}
                />
                <InputFeild
                  sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
                  placeholder="weight"
                  required={true}
                  onChange={(e) => {
                    setUserDets({ ...userDets, weight: e.target.value });
                  }}
                />
                <Buttons
                  className={"btn"}
                  sx={{ width: "100%", color: "#cfd1d4" }}
                  onClick={handleClick}
                >
                  Calculate
                </Buttons>
                <h1>user bmi below</h1>
                <h3>{bmi}</h3>
              </Box>
            </div>
          </Grid>
          <Grid item sm={6} xs={8} md={6}>
            <div></div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default DietPage;
