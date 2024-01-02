import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Admin/login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormPropsTextFields from './Admin/FormPropsTextFields.jsx'
import Admin from './Admin/Admin.jsx'
import ListServices from './Client/ListServices.jsx'
import Setservices from './Admin/Set.jsx'
import ListAppointments from './Admin/ListAppointments.jsx'
// import SetSetService from './SetAppointment.jsx'
import SetAppointment from './Client/SetAppointment.jsx'
import Client from './Client/Client.jsx'
import HomePage from './home.jsx'
import NewAppointment from './Client/NewAppointment.jsx'
import UsersAppointment from './Admin/userAppointment.jsx'
// import getDataBusiness from './mbox/BusinessDataStore.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='admin' element={<Admin></Admin>} ></Route>
      <Route path='client' element={<Client></Client>}> </Route>
      <Route path='login' element={<Login></Login>}> </Route>
     

      {/* <Route path='listServices' element={<ListServices></ListServices>} > </Route> */}
      {/* <Route path='ListAppointments' element={<ListAppointments></ListAppointments>}></Route> */}
    </Routes>
    
    {/* <Login/> */}
    <HomePage/>
  
    </BrowserRouter>
    {/* <App/> */}
  </React.StrictMode>,
)


