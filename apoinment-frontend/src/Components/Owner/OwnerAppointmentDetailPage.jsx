import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class OwnerAppointmentDetailPage extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <>
          <div className="w3-row w3-black w3-top" style={{width:"100%"}}>
              <div className="w3-col s4 w3-container w3-padding">
                  <Link to="/owner-dashboard" className="w3-btn w3-left"><i className="fa fa-arrow-left w3-xlarge"></i></Link>
                </div>

              <div className="w3-col s4 w3-container w3-padding w3-center">
                  <h6>&nbsp;Appoinment Details</h6>
              </div>

              <div className="w3-col s4 w3-container w3-padding w3-right">
              </div>
          </div>

          <br /><br /><br />


          <div className="w3-container w3-margin w3-border w3-round-large w3-border-black">
              <form className="w3-container">
                  <p>
                      <label>First Name</label>
                      <input className="w3-input w3-border w3-border-black" type="text" disabled={true} value="Sebastian"/>
                  </p>
                  <p>
                      <label>Phone Number</label>
                      <input className="w3-input w3-border w3-border-black" type="text" disabled={true} value="+1-226-445-6543"/>
                  </p>
                  <p>
                      <label>Email</label>
                      <input className="w3-input w3-border w3-border-black" type="text" disabled={true} value="nncnac@gmail.com"/>
                  </p>
                  <p>
                      <label>Date</label>
                      <input className="w3-input w3-border w3-border-black" type="text" disabled={true} value="12/12/2021"/>
                  </p>
                  <p>
                      <label>Time</label>
                      <input className="w3-input w3-border w3-border-black" type="text" disabled={true} value="9:30 AM"/>
                  </p>
                  <p>
                      <label>Service</label>
                      <input className="w3-input w3-border w3-border-black" type="text" disabled={true} value="Hair Cut"/>
                  </p>
              </form>
              <div className="w3-center w3-padding">
                      <button className="w3-button w3-green w3-border w3-border-black w3-round-large" style={{width:"46%"}}>Accept</button>
                      &nbsp;
                      <button className="w3-button w3-red w3-border w3-border-black w3-round-large" style={{width:"46%"}}>Decline</button>
              </div>
          </div>
      </>
    )
  }
}




export default OwnerAppointmentDetailPage;
