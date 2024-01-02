import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { observer } from "mobx-react"
import MobxData from './MobxData'


const Login= observer(()=> {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { register, handleSubmit } = useForm();
  const [ddata, setData] = useState({});
  const [massege, setmassege] = useState("");
  const naviga = useNavigate()
  const [showPersonalDetails, setShowPersonalDetails] = useState("");

  const goToAerver = (data) => {
    axios.post(`http://localhost:8787/login`, data)
      .then(res => {
        const r = res.data;
        console.log(r)
        naviga("/Admin")
        setmassege(r)
        setData(JSON.stringify(data))
        MobxData.setIsAdmin(true);
      }
      ).catch(err =>
        setmassege(err.response.data)
      )
  }
  return (
    <>
      {/* {showPersonalDetails ? <PersonalDetails /> : */}

        <form onSubmit={handleSubmit((data) => {
          goToAerver(data)
        })}>
          {/* type="password" */}
          {/* <input   {...register("name")} placeholder="name" />
          <input  {...register("password")} placeholder="password" /> */}
          <div id='enter'>
            <TextField id="outlined-basic" label="name" {...register("name")} placeholder="name" variant="outlined" />
            <TextField id="filled-basic" label="password" {...register("password")} placeholder="password" variant="filled" />
          {/* <TextField type="submit" variant="filled" placeholder="password" /> */}
          {/* <input  /> */}
          <Stack spacing={0} direction="row">
            {/* <Button variant="text">Text</Button> */}
            <Button type="submit" variant="outlined" >Connected</Button>
          </Stack>
          <p>{massege}</p>
          </div>
        </form>
    </>
  )

});
export default Login;




