import { React, Component } from "react";
import {
  Link
} from "react-router-dom";



class CustomerBookAppointmentPageThree extends Component{
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
          </div>

          <div className="w3-col s4 w3-container w3-padding w3-center">
              <h8>&nbsp;Book Appointment</h8>
          </div>

          <div className="w3-col s4 w3-container w3-padding w3-right">
            <Link to="/dashboard" className="w3-btn w3-right"><i class="fa fa-times-circle w3-xlarge"></i></Link>
          </div>
        </div>
          <h1>Page Three</h1>
      </>
    )
  }
}




export default CustomerBookAppointmentPageThree;
