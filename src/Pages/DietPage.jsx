import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import food from "../Assest/health.png";
import InputFeild from "../Components/InputField";
import Buttons from "../Components/Buttons";
import { useState, useEffect } from 'react';
import axios from 'axios';

const DietPage = () => {
    const [userDets, setUserDets] = useState(null)
    const [bmi, setBmi] = useState(null)
    
    const handleClick = () =>{

        fetch("/api/bmi", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userDets)
        })
        .then(response=>response.json())
        .then(processedData => {
            setBmi(processedData);
            console.log("success", processedData);
        })
        .catch(error => {
            console.error("process error", error)
        })
    }

    return (
        <>
        <Header/>
        <div className="DietPage"
        style={{background: 'rgb(17, 23, 32)', display: "flex", gap: "2rem"}}>
                {/* <img src={food}
                style={{width: "40%", border: "1px solid white"}}
                /> */}
            
            <div className="form-details"
            style={{border: "1px solid white", flexGrow: "1"}}
            >
                <InputFeild
                    sx={{ width: "50%", position: "relative", color: "#cfd1d4" }}
                    placeholder="age"
                    required={true}
                    onChange={(e)=>{
                        setUserDets({...userDets, age: e.target.value})
                    }}
                /> 
                <InputFeild
                sx={{ width: "50%", position: "relative", color: "#cfd1d4" }}
                placeholder="height"
                required={true}
                onChange={(e)=>{
                    setUserDets({...userDets, height: e.target.value})
                }}
              />
              <InputFeild
                sx={{ width: "50%", position: "relative", color: "#cfd1d4" }}
                placeholder="weight"
                required={true}
                onChange={(e)=>{
                    setUserDets({...userDets, weight: e.target.value})
                }}
              />
            </div>
            <Buttons onClick={handleClick} sx={{ width: "100%", color: "#cfd1d4"
          }}/>
          <h2>user bmi below</h2>
          <h3>{bmi}</h3>

        </div>
        <Footer/>
        </>
    )

    
}



export default DietPage