import React from 'react'
import {Grid} from "@mui/material"

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import Logo from '../../Components/Logo';
import Icontext from '../../Components/IconsText';
import Buttons from '../../Components/Buttons';

import "./index.css"

const Header = (props) => {
  return (
    
    <div style={{...props.sx,background:"#111720", paddingLeft:"5%", paddingRight:"5%"}}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={5} xs={12}>
          <div>
        <Logo sx={{ marginLeft:"-15px",width:"50%"}}/>
          </div>
        </Grid>
        <Grid  className='responsiveHide' item  sm={12} md={7} xs={12} >
          <div>
            <Grid container spacing={8}>
   
             {/**  <Grid  item xs={12} sm={6} md={6} style={{marginTop:"2%"}} >
              
              <Buttons sx={{border:"2px solid grey",color:"#cfd1d4"}}>Register</Buttons>
              </Grid>
              <Grid  item xs={12} sm={6} md={6} style={{marginTop:"2%"}}><Buttons sx={{border:"2px solid grey",color:"#cfd1d4"}}>Login</Buttons></Grid>*/}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
    
    
  )
}

export default Header