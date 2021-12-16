import { React, Component } from "react";
import {
  Link,
  Navigate,
} from "react-router-dom";
import { postAppointment } from "../../../API/appointment"

class CustomerBookAppointmentPageFour extends Component{
  constructor(props){
    super(props)
    this.state = {
      forcerURL:""
    };
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onSuccessCallback = this.onSuccessCallback.bind(this);
    this.onErrorCallBack = this.onErrorCallBack.bind(this);
    this.onDoneCallback = this.onDoneCallback.bind(this);
  }

  onSuccessCallback(response){
    this.setState({
      forcerURL: "/dashboard"
    })
  }

  onErrorCallBack(error){

  }

  onDoneCallback(){

  }

  onSubmitClick(e) {
    console.log();
    const dateTime = new Date(localStorage.getItem("USER_PICKED_DATE_TIME"))
    const services = localStorage.getItem("USER_PICKED_SERVICES")
    const postData = {
      "appointment_services": services,
      "appointment_dt": dateTime.toUTCString(),
    }
    postAppointment(postData, this.onSuccessCallback, this.onErrorCallBack, this.onDoneCallback)
  }

  render(){
    //const {} = this.state
    const { forcerURL } = this.state;
      if (forcerURL != ""){
        return <Navigate to={forcerURL} />
      }
    return(
      <>
            <div className="w3-row w3-black w3-top" style={{width:"100%"}}>
                <div className="w3-col s4 w3-container w3-padding">
                </div>

                <div className="w3-col s4 w3-container w3-padding w3-center">
                    <h6>&nbsp;Book Appointment</h6>
                </div>

                <div className="w3-col s4 w3-container w3-padding w3-right">
                    <Link to="/dashboard" className="w3-btn w3-right"><i className="fa fa-times-circle w3-xlarge"></i></Link>
                </div>
            </div>

            <br /><br /><br /><br />

            <div className="w3-row">
                <div className="w3-col s6 w3-container w3-padding">
                    <Link to="/book-appointment-2" className="w3-btn w3-left"><i className="fa fa-arrow-left w3-xlarge"></i></Link>
                </div>
                <div className="w3-col s6 w3-container w3-padding">
                    <p><button class="w3-button w3-red" onClick={this.onSubmitClick}>Submit</button></p>
                </div>
            </div>

            <br /><br />
      </>
    )
  }
}




export default CustomerBookAppointmentPageFour;
