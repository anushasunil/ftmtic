import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./index.css"
const SocialMedia = (props) => {
  const className = props.className ? `list ${props.className}` : "list"
  return (
  

        <ul  className={className} style={{...props.sx}} >
          <li><FacebookIcon/></li>
          <li><TwitterIcon/></li>
          <li><YouTubeIcon/></li>
          <li><LinkedInIcon/></li>
          <li><InstagramIcon/></li>
        </ul>
     
   
  );
};

export default SocialMedia;
