import { React, Component } from "react";
import {
  Link
} from "react-router-dom";

// https://www.w3resource.com/javascript-exercises/javascript-date-exercise-6.php
function addMinutes(dt, minutes) {
return new Date(dt.getTime() + minutes*60000);
}

class CustomerBookAppointmentPageThree extends Component{
  constructor(props){
    super(props)
    this.state = {
      hour:parseFloat(localStorage.getItem("USER_PICKED_HOUR")),
    };
    this.onClickSelectButton = this.onClickSelectButton.bind(this);
  }

  onClickSelectButton(e,pickedHour) {
    const pickedMinute = 60 * pickedHour;
    let pickedDate = localStorage.getItem("USER_PICKED_DATE")
    pickedDate = new Date(pickedDate)//how to convert into objects
    const pickedDateTime = addMinutes(pickedDate, pickedMinute);

    console.log(pickedDateTime);
    localStorage.setItem("USER_PICKED_HOUR", pickedHour);
    localStorage.setItem("USER_PICKED_DATE_TIME", pickedDateTime);

    this.setState({
      hour:pickedHour,
    })


  }


  render(){
    const { hour } = this.state
    return(
      <>
            <div className="w3-row w3-black w3-top" style={{width:"100%"}}>
                <div className="w3-col s4 w3-container w3-padding">
                </div>

                <div className="w3-col s4 w3-container w3-padding w3-center">
                    <h6>&nbsp;Book Appointment</h6>
                </div>

                <div className="w3-col s4 w3-container w3-padding w3-right">
                </div>
            </div>

            <br /><br /><br />

            <h1 className="w3-center">Pick a Day and Time</h1>

            <div className="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 9.5  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,9.5)} value={9.5} style={{width:"100px"}}>9:30 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 10  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,10.0)} value={10.0} style={{width:"100px"}}>10:00 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 10.5  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,10.5)} value={10.5}style={{width:"100px"}}>10:30 AM</button>
                </div>
            </div>
            <div className="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 11 ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,11)} value={11} style={{width:"100px"}}>11:00 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 11.5  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,11.5)} value={11.5} style={{width:"100px"}}>11:30 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 12  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,12)} value={12} style={{width:"100px"}}>12:00 AM</button>
                </div>
            </div>
            <div className="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 12.5  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,12.5)} value={12.5} style={{width:"100px"}}>12:30 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 14  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,14)} value={14} style={{width:"100px"}}>2:00 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 14.5  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,14.5)} value={14.5} style={{width:"100px"}}>2:30 PM</button>
                </div>
            </div>
            <div className="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 15 ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,15)} value={15} style={{width:"100px"}}>3:00 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 15.5  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,15.5)} value={15.5} style={{width:"100px"}}>3:30 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 16  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,16)} value={16} style={{width:"100px"}}>4:00 PM</button>
                </div>
            </div>
            <div className="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 16.5  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,16.5)} value={16.5} style={{width:"100px"}}>4:30 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 17  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,17)} value={17} style={{width:"100px"}}>5:00 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 17.5  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,17.5)} value={17.5} style={{width:"100px"}}>5:30 PM</button>
                </div>
            </div>
            <div className="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 18  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,18)} value={18} style={{width:"100px"}}>6:00 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 18.5  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,18.5)} value={18.5} style={{width:"100px"}}>6:30 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button className={`w3-btn w3-medium w3-padding w3-border w3-border-black  w3-round-large ${hour === 19  ? "w3-black" : "w3-theme-l3"}`} onClick={(event)=>this.onClickSelectButton(event,19)} value={19} style={{width:"100px"}}>7:00 PM</button>
                </div>
            </div>

            <div className="w3-row">
                <div className="w3-col s6 w3-container w3-padding">
                    <Link to="/book-appointment-2" className="w3-btn w3-left"><i className="fa fa-arrow-left w3-xlarge"></i></Link>
                </div>
                <div className="w3-col s6 w3-container w3-padding">
                    <Link to="/book-appointment-4" className="w3-btn w3-right"><i className="fa fa-arrow-right w3-xlarge"></i></Link>
                </div>
            </div>

            <br /><br />
      </>
    )
  }
}




export default CustomerBookAppointmentPageThree;
