import { React, Component } from "react";
import {
  Link
} from "react-router-dom";
import CustomHR from "../../Elements/customhr"



class CustomerBookAppointmentPageOne extends Component{
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
                    <Link to="/dashboard" className="w3-btn w3-left"><i class="fa fa-arrow-left w3-xlarge"></i></Link>
                  </div>

                <div className="w3-col s4 w3-container w3-padding w3-center">
                    <h5>&nbsp;Services</h5>
                </div>

                <div className="w3-col s4 w3-container w3-padding w3-right">
                    <Link to="/dashboard" className="w3-btn w3-right"><i class="fa fa-times-circle w3-xlarge"></i></Link>
                </div>
            </div>

            <br /><br />



            <div class="w3-container">
            <CustomHR className="w3-margin" />
                <div class="w3-cell-row">
                    <div class="w3-cell w3-center" style={{width:"30%"}}>
                        <img class="w3-padding w3-center w3-round-large" src="/img/haircut.png" style={{width:"90%"}}></img>
                    </div>
                    <div class="w3-cell w3-container" style={{width:"60%"}}>
                        <h3>Hair Cut</h3>
                        <p>Estimated time 30min</p>
                    </div>
                    <div class="w3-cell " style={{width:"10%"}}>
                        <input class="w3-check" type="checkbox" />
                    </div>
                </div>
                <CustomHR />
                <div class="w3-cell-row">
                    <div class="w3-cell w3-center" style={{width:"30%"}}>
                        <img class="w3-padding w3-center w3-round-large" src="/img/color.png" style={{width:"90%"}}></img>
                    </div>
                    <div class="w3-cell w3-container" style={{width:"60%"}}>
                        <h3>Coloring</h3>
                        <p>Estimated time 1:30hr</p>
                    </div>
                    <div class="w3-cell " style={{width:"10%"}}>
                        <input class="w3-check" type="checkbox" />
                    </div>
                </div>
                <CustomHR />
                <div class="w3-cell-row">
                    <div class="w3-cell w3-center" style={{width:"30%"}}>
                        <img class="w3-padding w3-center w3-round-large" src="/img/hairdryer.png" style={{width:"90%"}}></img>
                    </div>
                    <div class="w3-cell w3-container" style={{width:"60%"}}>
                        <h3>Blow-Dry</h3>
                        <p>Estimated time 1:00hr</p>
                    </div>
                    <div class="w3-cell " style={{width:"10%"}}>
                        <input class="w3-check" type="checkbox" />
                    </div>
                </div>
                <CustomHR />
                <div class="w3-cell-row">
                    <div class="w3-cell w3-center" style={{width:"30%"}}>
                        <img class="w3-padding w3-center w3-round-large" src="/img/styling.png" style={{width:"90%"}}></img>
                    </div>
                    <div class="w3-cell w3-container" style={{width:"60%"}}>
                        <h3>Styling</h3>
                        <p>Estimated time 2:00hr</p>
                    </div>
                    <div class="w3-cell " style={{width:"10%"}}>
                        <input class="w3-check" type="checkbox" />
                    </div>
                </div>
                <CustomHR />
          </div>

          <div className="w3-col w3-container w3-padding">
              <Link to="/book-appointment-2" className="w3-btn w3-right"><i class="fa fa-arrow-right w3-xlarge"></i></Link>
          </div>

          <br /><br />

      </>
    )
  }
}




export default CustomerBookAppointmentPageOne;
