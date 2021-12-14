import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



class OwnerDashboardPage extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <>
          <div className="w3-panel">
            <h4 style={{height:"15px"}}>Hello,&nbsp;Laura</h4>
            <h2 >Welcome</h2>
          </div>

          {/* this is the line */}
          <div className="w3-black w3-margin" style={{height:"3px"}}>
          </div>

          <div className="w3-container">
              <h3>Upcoming Services</h3>
          </div>

          <div className="w3-container w3-margin w3-border w3-round-large w3-border-black">
            <table class="w3-table">
              <tr className="w3-border-bottom w3-border-black">
                <th className="w3-center">Name</th>
                <th className="w3-center">Date</th>
                <th className="w3-center">Time</th>
                <th className="w3-center">Services</th>
                <th className="w3-center">Details</th>
              </tr>
              <tr>
                <td className="w3-center">Jill</td>
                <td className="w3-center">12/11</td>
                <td className="w3-center">9:30 AM</td>
                <td className="w3-center">Hair Cut</td>
                <td className="w3-center">
                <Link to="/owner-appointment-detail/2" style={{textDecoration:"none"}}>View <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </Link></td>
              </tr>
              <tr>
                <td className="w3-center">Jill</td>
                <td className="w3-center">12/11</td>
                <td className="w3-center">9:30 AM</td>
                <td className="w3-center">Hair Cut, Coloring, Shampoo</td>
                <td className="w3-center w3-text-green">Accepted</td>
              </tr>
              <tr>
                <td className="w3-center">Jill</td>
                <td className="w3-center">12/11</td>
                <td className="w3-center">9:30 AM</td>
                <td className="w3-center">Hair Cut, Coloring</td>
                <td className="w3-center w3-text-red">Decline</td>
              </tr>
            </table>
          </div>
      </>
    )
  }
}




export default OwnerDashboardPage;
