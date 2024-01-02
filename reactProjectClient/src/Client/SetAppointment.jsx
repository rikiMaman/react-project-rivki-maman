import { useForm } from "react-hook-form";
import axios from 'axios';
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MobxData from '../Admin/MobxData'
import addMeeting from '../mbox/MeetingStore'

export default function SetAppointment() {
  let nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const [massege, setmassege] = useState("");
  const [good, setGood] = useState(false);
  const [timeAvailable, setTimeAvailable] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (timeAvailable) {
      setOpen(false);
    }
  };

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8787/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (good) {
      
      // Trigger page refresh if a service is successfully scheduled
      window.location.reload();
    }
  }, [good]);

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSetMeeting = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8787/appointment`, data);
      setmassege(response.data);
      setGood(true);
      setTimeAvailable(true); // Reset to true when the meeting is successfully scheduled
      setShowMessage(false); // Reset to false when the meeting is successfully scheduled

    } catch (error) {
      setmassege(error.response.data);
      setTimeAvailable(false); // Mark the time as unavailable
      setShowMessage(true); // Show the message to the user
    }
  };

  return (
    localStorage.setItem("buttonVisible", "false"),

    <React.Fragment>
    <button onClick={handleClickOpen}  > + </button>

    {/* <Button variant="outlined" onClick={handleClickOpen}>
      +
    </Button> */}
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          enter datail about the appointment you want in {MobxData.serviceType}
        </DialogContentText>
        <form onSubmit={handleSubmit((data) => {

          //  const   goToAerver=(data)=>{
          axios.post(`http://localhost:8787/appointment`, data)
            .then(res => {
              // addMeeting(data)
              const r = res.data;
              console.log(r)
              setmassege(r)
              setGood(true)
              setTimeAvailable(true)
              // MobxData.setServiceType()
              

            }).catch(err =>
              setmassege(err.response.data),
              setTimeAvailable(false)
            )
        }
        )}>
          <label>id</label>
          <input {...register("id")} placeholder="id" />

          



          <br />
          <Select
            label="Select Service"
            value={selectedService}
            onChange={handleServiceChange}
            displayEmpty
          >
            

            <MenuItem value="" disabled>
            Service Type 
            </MenuItem>
            {services.map((service) => (
              <MenuItem key={service.id} value={service.id}>
                {service.name}
              </MenuItem>
            ))}
          </Select>
          <br />
          <label>dateTime</label>
          <input  {...register("dateTime")} type="datetime-local" placeholder="dateTime" />
          <br />
          <label>clientName</label>
          <input  {...register("clientName")} placeholder="clientName" />
          <br />
          <label>clientPhone</label>
          <input  {...register("clientPhone")} placeholder="clientPhone" />
          <br />
          <label>clientEmail</label>
          <input  {...register("clientEmail")} type="email" placeholder="clientEmail" />
           {showMessage && <p>The time you requested is taken - try another time!</p>}
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </form>
        {good }
        <p>{massege}</p>
      </DialogContent>
    </Dialog>
  </React.Fragment>

    
   
  );
}

