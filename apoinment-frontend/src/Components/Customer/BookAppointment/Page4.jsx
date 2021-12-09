import { React, Component } from "react";
import {
  Link
} from "react-router-dom";



class CustomerBookAppointmentPageFour extends Component{
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
                    <Link to="/dashboard" className="w3-btn w3-right"><i class="fa fa-times-circle w3-xlarge"></i></Link>
                </div>
            </div>

            <br /><br /><br />

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




export default CustomerBookAppointmentPageFour;
