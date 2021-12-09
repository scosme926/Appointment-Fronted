import { React, Component } from "react";
import {
  Link
} from "react-router-dom";



class CustomerBookAppointmentPageThree extends Component{
  constructor(props){
    super(props)
    this.state = {
      hour:"",
    };
    this.onClickSelectButton = this.onClickSelectButton.bind(this);
  }

  onClickSelectButton(e,pickedTime) {
    console.log(pickedTime);
  }

  render(){
    const { hour } = this.state
    return(
      <>
            <div className="w3-row w3-black w3-top" style={{width:"100%"}}>
                <div className="w3-col s4 w3-container w3-padding">
                </div>

                <div className="w3-col s4 w3-container w3-padding w3-center">
                    <h8>&nbsp;Book Appointment</h8>
                </div>

                <div className="w3-col s4 w3-container w3-padding w3-right">
                </div>
            </div>

            <br /><br /><br />

            <h1 className="w3-center">Pick a Day and Time</h1>

            <div class="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"9:30am")} value="hour" style={{width:"100px"}}>9:30 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"10:00am")} value="hour" style={{width:"100px"}}>10:00 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"10:30am")} value="hour" style={{width:"100px"}}>10:30 AM</button>
                </div>
            </div>
            <div class="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"11:00am")} value="hour" style={{width:"100px"}}>11:00 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"11:30am")} value="hour" style={{width:"100px"}}>11:30 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"12:00pm")} value="hour" style={{width:"100px"}}>12:00 AM</button>
                </div>
            </div>
            <div class="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"12:30pm")} value="hour" style={{width:"100px"}}>12:30 AM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"2:00pm")} value="hour" style={{width:"100px"}}>2:00 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"2:30pm")} value="hour" style={{width:"100px"}}>2:30 PM</button>
                </div>
            </div>
            <div class="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"3:00pm")} value="hour" style={{width:"100px"}}>3:00 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"3:30pm")} value="hour" style={{width:"100px"}}>3:30 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"4:00pm")} value="hour" style={{width:"100px"}}>4:00 PM</button>
                </div>
            </div>
            <div class="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"4:30pm")} value="hour" style={{width:"100px"}}>4:30 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"5:00pm")} value="hour" style={{width:"100px"}}>5:00 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"5:30pm")} value="hour" style={{width:"100px"}}>5:30 PM</button>
                </div>
            </div>
            <div class="w3-row">
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"6:00pm")} value="hour" style={{width:"100px"}}>6:00 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"6:30pm")} value="hour" style={{width:"100px"}}>6:30 PM</button>
                </div>
                <div className="w3-col s4 w3-center w3-padding">
                    <button class="w3-button w3-medium w3-padding w3-theme-l3 w3-border w3-border-black  w3-round-large" onClick={(event)=>this.onClickSelectButton(event,"7:00pm")} value="hour" style={{width:"100px"}}>7:00 PM</button>
                </div>
            </div>

            <div class="w3-row">
                <div className="w3-col s6 w3-container w3-padding">
                    <Link to="/book-appointment-2" className="w3-btn w3-left"><i class="fa fa-arrow-left w3-xlarge"></i></Link>
                </div>
                <div className="w3-col s6 w3-container w3-padding">
                    <Link to="/book-appointment-4" className="w3-btn w3-right"><i class="fa fa-arrow-right w3-xlarge"></i></Link>
                </div>
            </div>

            <br /><br />
      </>
    )
  }
}




export default CustomerBookAppointmentPageThree;
