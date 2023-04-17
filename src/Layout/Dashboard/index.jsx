import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Card from "../../Components/Card";
import Grid from "@mui/material/Grid";
import food from "../../Assest/health.png";
import workout from "../../Assest/Workout-amico.png";
import physio from "../../Assest/Phisiotherapy-amico.png";
import { useNavigate } from "react-router-dom";
const index = (props) => {
  const navigate = useNavigate();
  return (
    <div style={{ background: "rgb(21,26,36)" }}>
      <Header />
      <br></br>
      <br></br>

      <div style={{ paddingTop: "3%", paddingBottom: "2%", paddingLeft: "9%" }}>
        <Grid container spacing={2} sx={{ background: "rgb(21,26,36)" }}>
          <Grid item xs={8} sm={4} md={4}>
            <div
              onClick={
                (window.location.href =
                  "https://diet-recommendation-system.streamlit.app/")
              }
            >
              <Card
                image={food}
                text="Diet & Calorie Tracking"
                onClick={navigate(
                  "https://diet-recommendation-system.streamlit.app/"
                )}
                style={{ cursor: "pointer", backgroundColor: "red" }}
              />
            </div>
          </Grid>
          <Grid item xs={8} sm={4} md={4}>
            <Card image={workout} text="Excersie Recommendation" />
          </Grid>
          <Grid item xs={8} sm={4} md={4}>
            <Card image={physio} text="Physiotherapic Assessments" />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
};

export default index;
