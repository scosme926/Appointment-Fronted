import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import RegisterComponent from "./Component"
import { postRegister } from "../../../API/gateway";



class RegisterContainer extends Component{
  constructor(props) {
      super(props);
      this.state = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
      };
      this.onRegisterSuccess = this.onRegisterSuccess.bind(this);
      this.onRegisterError = this.onRegisterError.bind(this);
      this.onRegisterDone = this.onRegisterDone.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
      this.onTextChange = this.onTextChange.bind(this);
  }

  onRegisterSuccess(res) {
      alert("You have successfully been registered");
  }

  onRegisterError(err) {

  }

  onRegisterDone() {

  }

  onSubmitClick(e) {
      const { nickname, password, email, firstName, lastName } = this.state;
      const data = {
          password: password,
          email: email,
          fname: firstName,
          lname: lastName,
      };
      postRegister(data, this.onRegisterSuccess, this.onRegisterError, this.onRegisterDone);
  }

  onTextChange(e) {
      const value = e.target.value;
      const name = e.target.name;
      this.setState({
          [name]: value,
      });
  }


  render(){
    const { email, password, firstName, lastName, onTextChange, onSubmitClick } = this.state
    return(
      <>
          <RegisterComponent
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          onTextChange={this.onTextChange}
          onSubmitClick={this.onSubmitClick}
          />
      </>
    )
  }
}




export default RegisterContainer;
