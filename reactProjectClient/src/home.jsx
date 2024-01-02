import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState , useEffect} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router } from 'react-router-dom';
import Client from "./Client/Client";
import Admin from "./Admin/Admin";
import { useLocation } from 'react-router-dom';
import styled from "@emotion/styled";
import { useLocalStorage } from "@rehooks/local-storage";

localStorage.setItem("buttonVisible", "true");
function checkButtonVisibility() {
  const storedVisibility = localStorage.getItem("buttonVisible");
  return storedVisibility === "true";
}

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [buttonVisible, setButtonVisible] = useState(true);



  const handleNavigation = (path) => {
    localStorage.setItem("buttonVisible", "false");
    navigate(path);
    // setButtonVisible(false)
    hideButtons();
  };
  useEffect(() => {
    if (!checkButtonVisibility()) {
      setButtonVisible(false);
    }
  }, []);
  const hideButtons = () => {
    setButtonVisible(false);
  };
  // useEffect(() => {
  //   const storage = useLocalStorage("buttonVisible");
  //   setButtonVisible(storage.getItem("buttonVisible") || true);
  // }, []);



  return (
    <div id="home" >
     
   
      {buttonVisible&&<Button id="ff" className="home"  type="submit" variant="outlined" onClick={() => handleNavigation('./client')} style={{ fontSize: '1.5rem',margin:'5%',  padding: '10px 20px' }} >
       לכניסה כלקוח פרטי
      </Button>}
      {buttonVisible&& <Button className="home" type="submit"  variant="outlined" onClick={() => handleNavigation('/login')  } style={{ fontSize: '1.5rem', margin:'5%', padding: '10px 20px' }}>
      לכניסה כמנהל
      </Button>}
      
    </div>
  );
}
export default HomePage;