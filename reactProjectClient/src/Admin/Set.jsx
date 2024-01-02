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




  export default function Setservices() {
    let nav = useNavigate();
    const { register, handleSubmit } = useForm();
    const [massege, setmassege] = useState("");
    const [good, setGood] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [timeAvailable, setTimeAvailable] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    const [refreshServices, setRefreshServices] = useState(false);
    

useEffect(() => {
  if (refreshServices) {
    // כאשר refreshServices משתנה לtrue, נבצע רענון של רשימת השירותים
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8787/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchData();
    setRefreshServices(false); // נאפס את המשתנה ל-false כדי שלא יופעל יותר מדי
  }
}, [refreshServices]);

useEffect(() => {
  if (good) {
    // alert("dfgdddd")
    
    window.location.reload();
    localStorage.setItem("buttonVisible", "false");

  }
}, [good]);


  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      if (timeAvailable) {
        setOpen(false);
      }
    };



  return (
    localStorage.setItem("buttonVisible", "false"),
    <React.Fragment>
      <button id="SetService" onClick={handleClickOpen}>
        Add Service
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            enter datail about the new Service:
          </DialogContentText>
          <form onSubmit={handleSubmit(async (data) => {
            //  const   goToAerver=(data)=>{
            axios.post(`http://localhost:8787/service`, data)
              .then(res => {
                const r = res.data;
                console.log(r)
                setmassege(r)
                setGood(true)
                console.log("refreshing!!!!1")
                localStorage.setItem("buttonVisible", "false");


                setServices(prevServices => [...prevServices, data]);
              }).catch(err =>
                setmassege(err.response)
              )
          }
          )}>
            <label>id</label>
            <input   {...register("id")} placeholder="id" />
            <br />
            <label>name</label>
            <input  {...register("name")} placeholder="name" />
            <br />
            <label>description</label>
            <input  {...register("description")} placeholder="description" />
            <br />
            <label>price</label>
            <input  {...register("price")} placeholder="price" />
            <br />
            <label>duration</label>
            <input  {...register("duration")} placeholder="duration" />
            <br />
            {/* <input type="submit" /> */}
            {showMessage && <p>The time you requested is taken - try another time!</p>}
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleClose}>Subscribe</Button>
            </DialogActions>
            {good && nav('/admin')}
            <p>{massege}</p>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
