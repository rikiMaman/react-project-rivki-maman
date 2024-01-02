import axios from 'axios';
import { parseISO, compareAsc } from 'date-fns';
import { useEffect, useState } from "react";
const meeting = {
  id: "758",
  serviceType: "11",
  dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
  clientName: "אבי כהן",
  clientPhone: "050-1234567",
  clientEmail: "m@m.com",
};

export default function ListAppointments() {
  const [ddata, setData] = useState([]);
  const [showServices, setShowServices] = useState(false);
  function getappointments() {
    axios.get(`http://localhost:8787/appointments`)
      .then(res => {
        let arr = sortArr(res.data);
      setData(arr);
      }
      )
  }

  function sortArr(arrCopy2) {
    console.log(arrCopy2);
    return arrCopy2?.sort(function (a, b) {
      return new Date(b.dateTime) - new Date(a.dateTime);
    });
  }
  useEffect(() => {
    getappointments()
  }, []);
  function display() {
    setShowServices(!showServices);
  }
  return (
    <>
      <button  className='InAdmin' onClick={display}> <h3 className='Ser'>ALL APPOINTMENT:</h3> </button>
      {showServices && <p>{ddata && ddata.map(i => <Appointment id={i.id} name={i.name} serviceType={i.serviceType} dateTime={i.dateTime} clientName={i.clientName} clientPhone={i.clientPhone}
        clientEmail={i.clientEmail} />)}
         </p>}

    </>
  )
}
function Appointment(props) {
  return (<>
  <div className='service'>
    <div className={props.scheduler === "TODAY" ? "TODAY" : props.scheduler === "THISWEEK" ? "THISWEEK" :"GREEN"}
    >
  <p><b className='field' >id:</b> {props.id}</p>
    <p> <b className='field'>serviceType: </b> {props.serviceType}</p>
    <p> <b className='field'> dateTime: </b> {props.dateTime}</p>
    <p>  <b className='field'> clientName: </b> {props.clientName}</p>
    <p> <b className='field'> clientPhone: </b> {props.clientPhone}</p>
    <p> <b className='field'> clientEmail: </b> {props.clientEmail}</p>
  </div>
  </div>
  </>
  )
}
