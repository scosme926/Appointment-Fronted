import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import CustomHR from "../Elements/customhr"




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
                  <Link to="/dashboard" className="w3-btn w3-left"><i className="fa fa-chevron-left"></i>&nbsp;Back</Link>
              </div>

              <div className="w3-col s5 w3-container w3-center w3-margin-top w3-margin-left">
                  <h6>&nbsp;My Appointments</h6>
              </div>

              <div className="w3-col s4 w3-container w3-padding">
              </div>
          </div>

          <div className="w3-container w3-padding">
              <h2>Upcoming</h2>
          </div>

          <div className="w3-container w3-margin w3-border w3-round-large w3-border-black">
              <div className="w3-container w3-cell w3-cell-middle w3-center w3-padding" style={{width:"33%"}}>
                  <span className="w3-center">Tuesday<br /> 18 <br /> Nov</span>
              </div>

              <div className="w3-container w3-cell w3-cell-bottom w3-padding-16 w3-border-left w3-border-black w3-center" style={{width:"38%"}}>
                  <p>Blow-Drying</p>
              </div>

              <div className="w3-container w3-cell w3-cell-bottom w3-padding w3-center" style={{width:"28%"}}>
                  <p>10:00 AM</p>
              </div>
          </div>

          <div className="w3-padding">
          <CustomHR />
          </div>

          <div className="w3-row w3-padding w3-margin w3-border w3-round-large w3-border-black">
              <div className="w3-col s3 w3-center">
                  <span>Tuesday<br /> 18 <br /> Nov</span>
              </div>

              <div className="w3-col s6 w3-center">
                <div className="w3-border-left w3-border-black w3-center">
                    <span className="w3-padding w3-panel">Blow-Drying</span>
                </div>
              </div>

              <div className="w3-col s3 w3-center">
                  <br /><span className="w3-pane">10:00 AM</span>
              </div>
          </div>


      </>
    )
  }
}




export default CustomerMyAppointmentsPage;
