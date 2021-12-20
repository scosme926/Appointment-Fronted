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
      pickedDate: new Date(localStorage.getItem("USER_PICKED_DATE")),
      pickedServices: localStorage.getItem("USER_PICKED_SERVICES"),
      pickedHour: localStorage.getItem("USER_PICKED_HOUR"),
      pickedFirstName:localStorage.getItem("USER_FIRST_NAME"),
      pickedEmail: localStorage.getItem("USER_EMAIL"),
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
    const { pickedDate, pickedServices, pickedHour, pickedFirstName, pickedEmail } = this.state;
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

            <div className="w3-container w3-margin w3-border w3-round-large w3-border-black">
                <form className="w3-container">
                    <p>
                        <label>First Name</label>
                        <input className="w3-input w3-border w3-border-black" type="text" disabled={true} defaultValue={pickedFirstName} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input className="w3-input w3-border w3-border-black" type="text" disabled={true} defaultValue={pickedEmail} />
                    </p>
                    <p>
                        <label>Date</label>
                        <input className="w3-input w3-border w3-border-black" type="text" disabled={true} value={pickedDate} />
                    </p>
                    <p>
                        <label>Time</label>
                        <input className="w3-input w3-border w3-border-black" type="text" disabled={true} value={pickedHour}/>
                    </p>
                    <p>
                        <label>Service</label>
                        <input className="w3-input w3-border w3-border-black" type="text" disabled={true} Value={pickedServices}/>
                    </p>
                </form>
            </div>


            <div className="w3-row">
                <div className="w3-col s6 w3-container w3-padding-16">
                    <Link to="/book-appointment-2" className="w3-btn w3-left"><i className="fa fa-arrow-left w3-xlarge"></i></Link>
                </div>
                <div className="w3-col s6 w3-container">
                    <p><button className="w3-button w3-black w3-right" onClick={this.onSubmitClick}>Submit</button></p>
                </div>
            </div>

            <br />
      </>
    )
  }
}




export default CustomerBookAppointmentPageFour;
