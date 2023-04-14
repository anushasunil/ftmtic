import React from "react";
import "./index.css";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";

const index = (props) => {
  return (
    <div>
     
      <Card sx={{height:"400px",width:"300px",background:"rgb(21,26,36)"}} >
      <CardMedia
        component="img"
       image={props.image}
     
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" sx={{color:"#cfd1d4",textAlign:"center"}}>
         {props.text}
        </Typography>
      </CardContent>
      </Card>
    
    </div>
  );
};

export default index;
