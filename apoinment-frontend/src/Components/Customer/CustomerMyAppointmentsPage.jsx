import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



class CustomerMyAppointmentsPage extends Component{
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
              <Link to="/dashboard" className="w3-btn w3-left"><i class="fa fa-chevron-left"></i>&nbsp;Back</Link>
          </div>

          <div className="w3-col s4 w3-container w3-center">
              <h8>&nbsp;My Appointments</h8>
          </div>

          <div className="w3-col s4 w3-container w3-padding">
          </div>
        </div>
        <h1>My Appointments</h1>
      </>
    )
  }
}




export default CustomerMyAppointmentsPage;
