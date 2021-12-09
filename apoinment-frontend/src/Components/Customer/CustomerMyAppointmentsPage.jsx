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
              <div className="w3-col s3 w3-container w3-padding">
                  <Link to="/dashboard" className="w3-btn w3-left"><i class="fa fa-chevron-left"></i>&nbsp;Back</Link>
              </div>

              <div className="w3-col s5 w3-container w3-center w3-margin-top w3-margin-left">
                  <h8>&nbsp;My Appointments</h8>
              </div>

              <div className="w3-col s4 w3-container w3-padding">
              </div>
          </div>

          <div className="w3-container w3-padding">
              <h2>Upcoming</h2>
          </div>

          <div className="w3-container w3-margin w3-border w3-round-large w3-border-black">
              <div class="w3-container w3-cell w3-cell-middle w3-center w3-padding" style={{width:"33%"}}>
                  <span className="w3-center">Tuesday<br /> 18 <br /> Nov</span>
              </div>

              <div class="w3-container w3-cell w3-cell-bottom w3-padding-16 w3-border-left w3-border-black w3-center" style={{width:"38%"}}>
                  <p>Blow-Drying</p>
              </div>

              <div class="w3-container w3-cell w3-cell-bottom w3-padding w3-center" style={{width:"28%"}}>
                  <p>10:00 AM</p>
              </div>
          </div>

          
      </>
    )
  }
}




export default CustomerMyAppointmentsPage;
