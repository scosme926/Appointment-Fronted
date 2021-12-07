import { React, Component } from "react";
import {
  Link
} from "react-router-dom";



class CustomerDashboardPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:"Sebastian"
    };
  }

  render(){
    const{name} = this.state
    return(
      <>
        <div className="w3-hide-small w3-hide-medium">
          <h1>Desktop not supported</h1>
        </div>
        <div className="w3-hide-large">
          <div className="w3-panel">
            <h4 style={{height:"15px"}}>Hello,&nbsp;{name}</h4>
            <h2 >Welcome</h2>
          </div>

          {/* this is the line */}
          <div className="w3-black w3-margin" style={{height:"5px"}}>
          </div>

          <div className="w3-container">
            <h3>Time for getting a new style!</h3>
          </div>

          <div class="w3-row w3-center">
          <div class="w3-col s6  w3-panel w3-rightbar w3-border-black">
          <a href="/book-appointment-1" className="" >
            <img className="w3-round-xlarge" src="/img/bookappointment2.png" style={{width:"60%"}} />
          </a>
          <Link className="w3-button w3-small w3-card-4 w3-border w3-black w3-padding w3-margin-top w3-round-large" to="/book-appointment-1"> Book Appoinment </Link>
          </div>

          <div class="w3-col s6 w3-center w3-panel w3-leftbar w3-border-black">
          <a href="/my-appointments" >
            <img className="w3-round-xlarge" src="/img/list.png" style={{width:"60%"}} />
          </a>
          <Link className="w3-button w3-small w3-card-4 w3-border w3-black w3-margin-top w3-round-large" to="/my-appointments"> My Appoinments </Link>
          </div>


          <div class="w3-row">
            {/* this is the line */}
            <div className="w3-black w3-margin" style={{height:"5px"}}>
            </div>
            <div class="w3-col s2 w3-center"><p></p></div>
            <div class="w3-col s8 w3-center">
            <div class="w3-card-4 w3-black">
              <img className="w3-round-large w3-margin-top w3-padding" src="https://media.istockphoto.com/photos/smiling-businesswoman-looking-at-camera-webcam-make-conference-call-picture-id1129638608?k=20&m=1129638608&s=612x612&w=0&h=AUoSDsGI9b-f_izlotPYpYb1nQ34YUvIlU6S4B1zJug=" style={{width:"100%"}} />
              <div class="w3-container w3-center">
                <p>Hair Specialist / Doris Regalado</p>
              </div>
            </div>
            </div>
            <div class="w3-col s2 w3-center"><p></p></div>
          </div>



          </div>
        </div>
      </>
    )
  }
}




export default CustomerDashboardPage;
