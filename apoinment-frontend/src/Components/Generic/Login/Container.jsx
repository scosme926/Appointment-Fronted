import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import LoginComponent from "./Component"
import { postLogin } from "../../../API/gateway";

class LoginContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
        "email": "",
        "password": "",
    };
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onPostLoginSuccess = this.onPostLoginSuccess.bind(this);
    this.onPostLoginError = this.onPostLoginError.bind(this);
    this.onPostLoginDone = this.onPostLoginDone.bind(this);
}

  onPostLoginSuccess(res) {
      const token = res.data["token"];
      const first_name = res.data["first_name"];
      const last_name = res.data["last_name"];
      const email = res.data["email"];
      console.log(res);
      localStorage.setItem("JWT_TOKEN", token);
      localStorage.setItem("USER_FIRST_NAME", first_name);
      localStorage.setItem("USER_LAST_NAME", last_name);
      localStorage.setItem("USER_EMAIL", email);
      window.location.href="/dashboard"
  }



  onPostLoginError(err) {

  }



  onPostLoginDone() {

  }



  onTextChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
          [name]: value,
      });
  }



  onLoginClick(e) {
      const { email, password } = this.state;
      const data = {
          email: email,
          password: password,
      };
      postLogin(data, this.onPostLoginSuccess, this.onPostLoginError, this.onPostLoginDone);
  }


  render(){
    const { email, password } = this.state
    return(
      <>
          <LoginComponent
            email={email}
            password={password}
            onTextChange={this.onTextChange}
            onLoginClick={this.onLoginClick}
          />
      </>
    )
  }
}




export default LoginContainer;
