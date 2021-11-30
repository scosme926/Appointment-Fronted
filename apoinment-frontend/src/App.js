import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import IndexPage from "./Components/Generic/IndexPage"
import NotFoundPage from "./Components/Generic/404"
import LoginPage from "./Components/Generic/LoginPage"
import RegisterPage from "./Components/Generic/RegisterPage"
import CustomerDashboardPage from "./Components/Customer/CustomerDashboardPage"
import CustomerBookAppointmentPage from "./Components/Customer/CustomerBookAppointment"
import OwnerDashboardPage from "./Components/Owner/OwnerDashboardPage"
import OwnerPreviousPage from "./Components/Owner/OwnerPreviousPage"




class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <>
        <Router>
          <Routes>
            <Route exact path="/owner/previous" element={<OwnerPreviousPage/>}/>
            <Route exact path="/owner/dashboard" element={<OwnerDashboardPage/>}/>
            <Route exact path="/book-appointment" element={<CustomerBookAppointmentPage/>}/>
            <Route exact path="/dashboard" element={<CustomerDashboardPage/>}/>
            <Route exact path="/register" element={<RegisterPage/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/" element={<IndexPage/>}/>
            <Route exact path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Router>
      </>
    )
  }
}




export default App;
