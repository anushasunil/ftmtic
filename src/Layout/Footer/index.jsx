import { Grid } from "@mui/material";
import React from "react";
import Logo from "../../Components/Logo";
import IconText from "../../Components/IconsText";
import SocialMedia from "../../Components/SocialMedia";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BodyText from "../../Components/BodyText";
import "./index.css";
const Footer = () => {
  return (
    <div
      style={{
        background: "#111720",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "4%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} className='logo-responsive' >
          <Logo sx={{ marginLeft: "-15px",width:"50%" }} />
        </Grid>
          <Grid item xs={12} sm={12} md={6} >
          <Grid container spacing={2}  >
            <Grid item  xs={6} sm={6} md={8}> 
            <div  style={{marginTop:"20px"}}   >{/**<IconText className="icons-responsive"  
            color="#cfd1d4"
    icon={<PhoneIcon sx={{ fontSize: "12px" }} />} 
          >
           
          </IconText>**/}</div></Grid>
            <Grid item   xs={6} sm={6} md={4}><div style={{marginTop:"20px"}}> </div></Grid>

          </Grid>
           
           
          </Grid>
        </Grid>
      
        <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={4}  >
          <BodyText className="bodytext-responsive" sx={{ color: "#cfd1d4" }}>
            Fitomatic @ 2022 copyright
          </BodyText>
        </Grid>
        <Grid item xs={12} sm={12} md={4} >
        <ul  className="list-responsive">

        <li>Privacy Policy </li>
        <li>Terms of Use</li>
       <li> Cookies Policy</li>
       </ul></Grid>
      
     
      <Grid item xs={12} sm={12} md={4}  > <SocialMedia className={"social-icon-responsive"}/></Grid>
      
      </Grid>
    </div>
  );
};

export default Footer;
