import React,{useState} from "react";
import { Grid, IconButton } from "@mui/material";
import HeadingText from "../../Components/HeadingText";
import InputFeild from "../../Components/InputField";
import Buttons from "../../Components/Buttons";
import SocialMedia from "../../Components/SocialMedia";
import BodyText from "../../Components/BodyText";
import "./index.css";
import workout from "../../Assest/Personalized workouts-amico.png";
import axios from "axios"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

const Main = () => {

  const [arrow, setArrow] = useState(<KeyboardArrowUpIcon  fontSize="large" sx={{color:"white"}}/>)


const [name,setName]=useState(null)
const [email,setEmail]=useState(null)
const [open, setOpen] = useState(false);
const [snackbarMsg, setSnackbarMsg] = useState("");



const handleClose = (e) => {
 

  setOpen(false);
};

const handleSubmit = () => {
  function validateEmail(email) 
  {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

console.log(name==="")
  let proceed = false

  if(name === null || name.trim() === "") {
    setSnackbarMsg("Name is required")
    setOpen(true)
  } else if(email === null || email.trim() === "") {
    setSnackbarMsg("Email is required")
    setOpen(true)
  } else if(!validateEmail(email)) {
    setSnackbarMsg("Please enter valid email")
    setOpen(true)
  } else {
    proceed = true
  }


if(proceed) {
axios.post("http://localhost:5000/register", {
  name : name,
  email : email
}).then(r => {
  console.log(r)
  setSnackbarMsg("Your details are saved successfully")
  setOpen(true)
}).catch(e=>{
  setSnackbarMsg("Their was an error saving your details")
  setOpen(true)

})}
}

 
  return (
    <div
      style={{
        background: "#111720",
        paddingLeft: "7%",
        paddingRight: "7%",
        
       
      }}
    >
      <Grid container spacing={6}>
        <Grid item sm={12} md={5} xs={12}>
          <div style={{ paddingTop: "20%" }}>
            <HeadingText className={"heading-responsive"}>
          
            A web based automated<br></br> healthcare supervision and monitoring app using ML. <br></br>
            </HeadingText>
            <br></br>
            <BodyText className={"body-text-responsive"}>
            Flexible, efficient and affordable solution.
            </BodyText>
            <br></br>
            <br></br>
            <div className="input-responsive" style={{}}>
            <Buttons className={"btn"} sx={{ width: "100%", color: "#cfd1d4"
          }} onClick={()=>window.location.href="/register"} >
            Register
          </Buttons>
          <br></br>
          <br></br>
          <Buttons className={"btn"} sx={{ width: "100%", color: "#cfd1d4"
        }} onClick={()=>window.location.href="/login"}>
          Login
        </Buttons>
            
           {/**  <InputFeild
                sx={{ width: "100%", position: "relative", color: "#cfd1d4" }}
                placeholder="Enter your name"
                name="name"
                value={name}
                required={true}
                 onChange={e => setName(e.target.value)}
              />
              <br />
              <InputFeild
                sx={{ width: "100%", color: "#cfd1d4" }}
                placeholder="Enter your email"
                name="email"
                value={email}
                required={true}

                onChange={e => setEmail(e.target.value)}
              />
              <br />
              <Buttons onClick={handleSubmit} className={"btn"} sx={{ width: "100%", color: "#cfd1d4"
              }} >
                Submit
              </Buttons>*/} 
             
            </div>
          </div>
        </Grid>
        <Grid item sm={12} md={7} xs={12}>
          <div style={{marginTop:"-4%",paddingLeft:"8%" }}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <img
                style={{ width: "80%" }}
                src={workout}
                alt="pickupillustration"
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <div >
      <div style={{marginTop:"40px"}}>
      <Grid container>
      <Grid item xs={12} sm={12} md={4}></Grid>
      <Grid itemxs={12} sm={12} md={4}> <div onMouseEnter={()=>{
        setArrow(<KeyboardArrowDownIcon  fontSize="large" sx={{color:"white"}}/>)
      }}

      onMouseLeave={()=>{
        setArrow(<KeyboardArrowUpIcon  fontSize="large" sx={{color:"white"}}/>)
      }}
      
      onClick={()=>{
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
      }}
      className={"arrow"} style={{textAlign:"center", marginTop:"10px"}}>{arrow}</div></Grid>
      <Grid item xs={12} sm={12} md={4}><SocialMedia className="social-icon-responsive" /></Grid>

     
        
        </Grid>
        </div>
      </div>
      <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      message={snackbarMsg}
     action={ <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>}
    />
    </div>
  );
};

export default Main;
