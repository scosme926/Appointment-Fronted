import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import CustomHR from "../Elements/customhr"
import { getAppointmentList } from "../../API/appointment"


class CustomerMyAppointmentsPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      appointments:[],
    };
    this.onSuccessCallback = this.onSuccessCallback.bind(this);
    this.onErrorCallBack = this.onErrorCallBack.bind(this);
    this.onDoneCallback = this.onDoneCallback.bind(this);
  }

  onSuccessCallback(response){
    console.log(response)
    this.setState({
      appointments:response.data["results"]
    })
  }

  onErrorCallBack(error){

  }

  onDoneCallback(){

  }

  componentDidMount(){
    getAppointmentList(this.onSuccessCallback, this.onErrorCallBack, this.onDoneCallback)
  }


  render(){
    const { appointments } = this.state;
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
              <h2>My Appointments</h2>
          </div>
          <div>

          <div className="w3-padding">
          <CustomHR />

          </div>
          {appointments.map((appointment) => (
            <>
          <div className="w3-row w3-padding w3-margin w3-border w3-round-large w3-border-black">
              <div className="w3-col s3 w3-center">
                  <span>{appointment.date_time}<br /> 18 <br /> Nov</span>
              </div>

              <div className="w3-col s6 w3-center">
                <div className="w3-border-left w3-border-black w3-center">
                    <span className="w3-padding w3-panel">{appointment.services}</span>
                </div>
              </div>

              <div className="w3-col s3 w3-center">
                  <br /><span className="w3-pane">10:00 AM<br /> Status:{appointment.decision}</span>
              </div>
          </div>
          </>
                ))}
          </div>


      </>
    )
  }
}




export default CustomerMyAppointmentsPage;
