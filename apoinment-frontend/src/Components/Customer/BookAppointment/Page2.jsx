import { React, Component } from "react";
import {
  Link
} from "react-router-dom";
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import "../../../custom.css"
import { getDay } from 'date-fns'




class CustomerBookAppointmentPageTwo extends Component{
  constructor(props){
    super(props)
    this.state = {
      date:new Date(localStorage.getItem("USER_PICKED_DATE")),
    };
    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange(pickedDate){
    console.log(pickedDate);
    this.setState({
      date:pickedDate
    })
    localStorage.setItem("USER_PICKED_DATE", pickedDate);
  }

  render(){
     const { onDateChange } = this.state
    const { date } = this.state
    //*new Date().setDate(new Date().getDate() - 1* === Yesterday Day
    const modifiers = {
      disabled: date => (date <  new Date().setDate(new Date().getDate() - 1)) || (getDay(date) === 0),
    }
    return(
      <>
        <div className="w3-row w3-black w3-top" style={{width:"100%"}}>
          <div className="w3-col s4 w3-container w3-padding">
              <Link to="/book-appointment-1" className="w3-btn w3-left"><i className="fa fa-chevron-left"></i>&nbsp;Back</Link>
          </div>

          <div className="w3-col s4 w3-container w3-center">
              <h6>&nbsp;Book Appointment</h6>
          </div>

          <div className="w3-col s4 w3-container w3-padding">
          </div>
        </div>

        <br /><br /><br />

        <h1 className="w3-center">Pick a Day and Time</h1>

        <div>
            <DatePickerCalendar date={date} onDateChange={this.onDateChange} locale={enGB} modifiers={modifiers} />
        </div>

        <div className="w3-row">
            <div className="w3-col s6 w3-container w3-padding">
                <Link to="/book-appointment-1" className="w3-btn w3-left"><i className="fa fa-arrow-left w3-xlarge"></i></Link>
            </div>
            <div className="w3-col s6 w3-container w3-padding">
                <Link to="/book-appointment-3" className="w3-btn w3-right"><i className="fa fa-arrow-right w3-xlarge"></i></Link>
            </div>
        </div>

        <br /><br />

      </>
    )
  }
}




export default CustomerBookAppointmentPageTwo;
