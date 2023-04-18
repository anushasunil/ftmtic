import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import food from "../Assest/health.png";
import InputFeild from "../Components/InputField";
import Buttons from "../Components/Buttons";
import { useState, useEffect } from "react";
import {
  Grid,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import axios from "axios";

const DietPage = () => {
  const [userDets, setUserDets] = useState(null);
  const [bmi, setBmi] = useState(null);
  console.log(userDets);

  const [age, setAge] = React.useState("");
  const [excersise, setExcersise] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChangeExcerise = (event) => {
    setExcersise(event.target.value);
  };
  const handleCloseExcerise = () => {
    setOpen(false);
  };

  const handleOpenExcerise = () => {
    setOpen(true);
  };

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
          <Grid item sm={12} xs={12} md={12}>
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
                  placeholder="Age"
                  required={true}
                  onChange={(e) => {
                    setUserDets({ ...userDets, age: e.target.value });
                  }}
                />
                <InputFeild
                  sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
                  placeholder="Height(cm)"
                  required={true}
                  onChange={(e) => {
                    setUserDets({ ...userDets, height: e.target.value });
                  }}
                />
                <InputFeild
                  sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
                  placeholder="Weight(kg)"
                  required={true}
                  onChange={(e) => {
                    setUserDets({ ...userDets, weight: e.target.value });
                  }}
                />
                <FormControl
                  sx={{
                    width: "100%",
                    position: "relative",
                    color: "#cfd1d4",
                    borderRadius: "50%",
                  }}
                >
                  <InputLabel
                    id="demo-controlled-open-select-label"
                    sx={{ color: "#cfd1d4" }}
                  >
                    Gender
                  </InputLabel>
                  <Select
                    sx={{
                      color: "white",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cfd1d4",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cfd1d4",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cfd1d4",
                      },
                    }}
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    placeholder="Gender"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel
                    id="demo-controlled-open-select-label"
                    sx={{ color: "#cfd1d4" }}
                  >
                    Excersise
                  </InputLabel>
                  <Select
                    sx={{
                      color: "white",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cfd1d4",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cfd1d4",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cfd1d4",
                      },
                    }}
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleCloseExcerise}
                    onOpen={handleOpenExcerise}
                    value={excersise}
                    label="Excersise"
                    onChange={handleChangeExcerise}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                </FormControl>

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
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default DietPage;
