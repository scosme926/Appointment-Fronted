import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



class ContactPage extends Component{
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
                  <h5>Need Help</h5>
              </div>

              <div className="w3-col s4 w3-container w3-padding">
              </div>
          </div>

          <br /><br /><br />

          <div className="w3-container w3-center">
              <h1>Contact Us</h1>
          </div>

          <div className="w3-container w3-margin w3-border w3-round-large w3-border-black">
              <h3>Connect With Us</h3>
              <p><i className="w3-xlarge fa fa-envelope-o"></i>&nbsp;<a href="mailto:salonbeauty@gmail.com"> salonbeauty@gmail.com </a></p>
              <p><i className="w3-xlarge fa fa-phone"></i>&nbsp;<a href="tel:+12266886455"> +1(226)-889-8973</a></p>
          </div>

        <br /><br />

          <div className="w3-center w3-margin w3-border w3-border-black w3-round w3-white" style={{height:"300px"}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1458.3755885287896!2d-81.28117709177127!3d43.025624255613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee4350a72e43%3A0xcb7dd9faacadb9d1!2sCF%20Masonville%20Place!5e0!3m2!1ses-419!2sca!4v1638814507333!5m2!1ses-419!2sca" width="339" height="298" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
          </div>
      </>
    )
  }
}




export default ContactPage;
