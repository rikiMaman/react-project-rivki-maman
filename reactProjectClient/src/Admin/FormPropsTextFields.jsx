import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState, userRole,useEffect } from 'react';
import { observer } from "mobx-react"


 const FormPropsTextFields= observer(({ userRole }) =>
 {
  const [readOnly, setReadOnly] = React.useState(true);
  const [formData, setFormData] = useState({
    id: 123,
    name: "Coding Academy",
    address: "Rothschild 60 Tel Aviv",
    phone: "03-1234567",
    owner: "Yariv Katz",
    logo: "logo",
    description: "The best coding academy in the world",
  });
  const [message, setMessage] = useState("");
  const [good, setGood] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [services, setServices] = useState([]);


  const handleInputChange = (fieldName, value) => {
    // Update the form data when an input field changes
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    // Fetch business data when the component mounts
    getDataBusiness();
  }, []);


  function getDataBusiness() {
    axios.get(`http://localhost:8787/businessData`)
      .then(res => {
        setFormData(res.data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }

  const sendDataToServer = async () => {
    // Replace this with your actual data and server communication logic
    axios.post(`http://localhost:8787/businessData`, formData)
      .then(res => {
        const r = res.data;
        console.log(r);
        setMessage(r);
        setGood(true);
      })
      .catch(err => setMessage(err.response.data));
  };

  const handleChangeDetailsClick = () => {
    // Toggle the read-only state
    setReadOnly(!readOnly);
    if (!readOnly) {
      // Save changes to the server
      sendDataToServer();
    }
  };

  // const handleChangeDetailsClick = () => {
  //   // Toggle the read-only state
  //   setReadOnly(!readOnly);
  //   if(!readOnly)
  //   {
  //     sendDataToServer();
  //   }
  //   getDataBusiness(); 
    
  // };

  return (
    <>
    
      {/* <span><button onClick={handleChangeDetailsClick}> Change Personal Details </button></span> */}
      {userRole === 'admin' && (
        <span><button onClick={handleChangeDetailsClick}> Change Personal Details </button></span>
      )}

      <Box id='AdminDetails'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="פרטיים על בעל העסק"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="filled-read-only-input-id"
            value={formData.id}
            onChange={(e) => handleInputChange('id', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
          <TextField
            id="filled-read-only-input-name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
        </div>
        <div>
          <TextField
            id="filled-read-only-input-address"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
          <TextField
            id="filled-read-only-input-phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
        </div>
        <div>
          <TextField
            id="filled-read-only-input-owner"
            value={formData.owner}
            onChange={(e) => handleInputChange('owner', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
          <TextField
            id="filled-read-only-input-logo"
            value={formData.logo}
            onChange={(e) => handleInputChange('logo', e.target.value)}
            variant="filled"
            InputProps={{
              readOnly: readOnly,
            }}
          />
        </div>
        <TextField
          id="filled-read-only-input-description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          variant="filled"
          InputProps={{
            readOnly: readOnly,
          }}
        />
      </Box>
    </>
  );
});
export default FormPropsTextFields;
