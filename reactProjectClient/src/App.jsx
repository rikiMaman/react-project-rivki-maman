import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';


function addAppointment() {
  console.log("rikiii")
  const input = prompt("הזן שורה: ");
  const element = document.getElementById("l1");
  element.setAttribute("id", "l2");
}


import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
     <BrowserRouter></BrowserRouter>
      <h1>Final Project Of Riki</h1>
      <h2>its go to be perfect & beautiful!!!!!!</h2>
    </>
  );
}
function privateCustomers()
{

    //לשלוח לדף שמתאים לפרטיים
  const a= prompt("I'm private!");
  console.log(a);

}

function BusinessCustomers()
{
  //לשלוח לדף שמתאים לבעל העסק
  const b= prompt("I'm business!");
  console.log(b);

}

export default App
