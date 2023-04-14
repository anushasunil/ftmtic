import { Grid } from "@mui/material";
import React from "react";
import pickservice from "../../Assest/Fitness stats-amico.png";
import HeadingText from "../../Components/HeadingText";
import BodyText from "../../Components/BodyText";
import Buttons from "../../Components/Buttons";
import "./index.css";
const Section = () => {
  return (
    <div style={{ background: "rgb(21,26,36)", paddingLeft:"5%", paddingRight:"5%", paddingTop:"4%" ,paddingBottom:"5%" }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} xs={12} order={{xs:2, sm:2, md:1}}  sx={{}}>
        <div  >
          <img className={"img-responsive"} src={pickservice} alt="pickservice" />
          </div>
        </Grid>
        <Grid item sm={12} md={6} xs={12} order={{xs:1, sm:1,md:2}} sx={{}} >
        <div style={{paddingTop:"15%"}}>
          <HeadingText className={"heading-responsive"}>
            Focused on <br></br>Time Saving
          </HeadingText>
          <br></br>
     <BodyText className={"body-text-responsive"}>
            We develop an AI web based automated healthcare supervision and <br></br>monitoring app using ML. This system will bring you the healthcare system <br></br>of tomorrow..{" "}
          </BodyText>
          <br></br>
          <div className="btn-responsive">
          </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section;
