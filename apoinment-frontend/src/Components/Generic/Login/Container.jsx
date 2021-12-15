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
        "username": "",
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
      console.log(token);
      localStorage.setItem("JWT_TOKEN", token);
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
      const { username, password } = this.state;
      const data = {
          username: username,
          password: password,
      };
      postLogin(data, this.onPostLoginSuccess, this.onPostLoginError, this.onPostLoginDone);
  }


  render(){
    const { username, password } = this.state
    return(
      <>
          <LoginComponent
            username={username}
            password={password}
            onTextChange={this.onTextChange}
            onLoginClick={this.onLoginClick}
          />
      </>
    )
  }
}




export default LoginContainer;
