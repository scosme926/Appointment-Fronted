import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./custom2.css"
import IndexPage from "./Components/Generic/IndexPage"
import NotFoundPage from "./Components/Generic/404"
import LoginContainer from "./Components/Generic/Login/Container"
import RegisterContainer from "./Components/Generic/Register/Container"
import ContactPage from "./Components/Generic/ContactPage"
import CustomerDashboardPage from "./Components/Customer/CustomerDashboardPage"
import CustomerBookAppointmentPage from "./Components/Customer/CustomerBookAppointment"
import OwnerDashboardPage from "./Components/Owner/OwnerDashboardPage"
import OwnerPreviousPage from "./Components/Owner/OwnerPreviousPage"
import MobileTabletNavContainer from "./Components/Generic/MobileTabletNavBar"
import MobileTabletTopNavContainer from "./Components/Generic/MobileTabletTopNavBar"
import CustomerMyAppointmentsPage from "./Components/Customer/CustomerMyAppointmentsPage"
import CustomerBookAppointmentPageOne from "./Components/Customer/BookAppointment/Page1"
import CustomerBookAppointmentPageTwo from "./Components/Customer/BookAppointment/Page2"
import CustomerBookAppointmentPageThree from "./Components/Customer/BookAppointment/Page3"
import CustomerBookAppointmentPageFour from "./Components/Customer/BookAppointment/Page4"
import ProfileContainer from "./Components/Customer/Profile/Container"
import OwnerAppointmentDetailPage from "./Components/Owner/OwnerAppointmentDetailPage"



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
            <Route exact path="/owner/appointment-detail/:id" element={<OwnerAppointmentDetailPage/>}/>
            <Route exact path="/profile" element={<ProfileContainer/>}/>
            <Route exact path="/book-appointment-4" element={<CustomerBookAppointmentPageFour/>}/>
            <Route exact path="/book-appointment-3" element={<CustomerBookAppointmentPageThree/>}/>
            <Route exact path="/book-appointment-2" element={<CustomerBookAppointmentPageTwo/>}/>
            <Route exact path="/book-appointment-1" element={<CustomerBookAppointmentPageOne/>}/>
            <Route exact path="/my-appointments" element={<CustomerMyAppointmentsPage/>}/>
            <Route exact path="/owner/previous" element={<OwnerPreviousPage/>}/>
            <Route exact path="/owner/dashboard" element={<OwnerDashboardPage/>}/>
            <Route exact path="/book-appointment" element={<CustomerBookAppointmentPage/>}/>
            <Route exact path="/dashboard" element={<CustomerDashboardPage/>}/>
            <Route exact path="/contact" element={<ContactPage/>}/>
            <Route exact path="/register" element={<RegisterContainer/>}/>
            <Route exact path="/login" element={<LoginContainer/>}/>
            <Route exact path="/" element={<IndexPage/>}/>
            <Route exact path="*" element={<NotFoundPage/>}/>
          </Routes>
          <MobileTabletNavContainer />
        </Router>
      </>
    )
  }
}




export default App;
