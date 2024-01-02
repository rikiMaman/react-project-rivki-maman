import { useState,userRole } from "react";
import { useNavigate } from 'react-router-dom'
import { observer } from "mobx-react"
import ListAppointments from './ListAppointments'
import FormPropsTextFields from './FormPropsTextFields'
import ListServices from "../Client/ListServices";
import Setservices from './Set'
import UsersAppointment from "./userAppointment";
// export const ThemeContext = createContext(null);


 const Admin = observer(() => {
  let nav = useNavigate()
  const [service, setService] = useState(false);
  const [meeting, setMeeting] = useState(false);
  const [setDetails, setSetDetails] = useState(false);
  const [detailsAdmin, setDetailsAdmin] = useState({
    id: "123",
    name: "Coding Academy",
    address: "Rothschild 60 Tel Aviv",
    phone: "03-1234567",
    owner: "Yariv Katz",
    logo: "https://coding-academy.org/images/ca_logo.png",
    description: "The best coding academy in the world",
  })
  // document.querySelectorAll("div[id='enter']").style.display = "none";
  // const enterElement = document.querySelector("#enter");
  // enterElement.style.display = "none";

  return (

    <>
     {/* <span><button > Change Personal Details </button> */}
        {/* </span> */}

      <div id="details">
        {/* <FormPropsTextFields /> */}
        <FormPropsTextFields userRole="admin" />
      </div>
      {/* <Details></Details> */}
      <div id="container"> 
      <ListServices userRole={userRole} />
        {/* <ListServices /> */}
        <UsersAppointment />
        <Setservices/>
      </div>
    </>
  );
});
export default Admin;

