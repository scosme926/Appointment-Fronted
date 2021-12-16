import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



class CustomerBookAppointmentPage extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <>
        <div className="w3-row w3-black" style={{width:"100%"}}>
          <div className="w3-col s4 w3-container w3-padding">
              <Link to="/dashboard" className="w3-btn w3-left"><i className="fa fa-chevron-left"></i>&nbsp;Back</Link>
          </div>

          <div className="w3-col s4 w3-container w3-center">
              <h6>&nbsp;Book Appointment</h6>
          </div>

          <div className="w3-col s4 w3-container w3-padding">
          </div>
        </div>
        <h1>Book Appointment</h1>
      </>
    )
  }
}




export default CustomerBookAppointmentPage;
