import React from 'react'
import LandingPage from "./Pages/LandingPage";
import DietPage from './Pages/DietPage';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Layout/Register";
import Login from "./Layout/Login"
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Section from "./Layout/Section"
import Footer from "./Layout/Footer"
import Dashboard from "./Layout/Dashboard";
function App() {
  return (
    <Router >
    <div>
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/Diet-and-Calorie-check" element={<DietPage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
