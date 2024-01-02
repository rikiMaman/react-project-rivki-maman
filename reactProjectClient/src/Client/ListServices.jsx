import React from 'react'
import axios from "axios";
import { useState, useEffect,userRole } from 'react'
import { useNavigate } from 'react'
import SetService from './SetAppointment'
import { Button } from '@mui/material';

export default function ListServices({ userRole }) {
  const [showServices, setShowServices] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

  function getServices() {
    axios.get(`http://localhost:8787/services`)
      .then(res => {
        setServices(res.data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }

  function display() {
    setShowServices(!showServices);
  }

  return (
    <>
    <>
      <button className='InAdmin' onClick={display}>
        <h3 className='Ser'>ALL SERVICES:</h3>
      </button>
    </>
      {showServices && (
        <p>
          {services && services.map(i => (
            <Service key={i.id} name={i.name} description={i.description} />
          ))}
        </p>
      )}
      

      {/* {userRole === 'admin' && <SetService />} */}
      <SetService />
    </>
  );

  function Service(props) {
    return (
      <>
        <Button>
          <div className='service'>
            <b>NAME: </b>  {props.name}
            <b>    DESCRIPTION: </b>  {props.description}
          </div>
        </Button>
        <br />
      </>
    );
  }
}

