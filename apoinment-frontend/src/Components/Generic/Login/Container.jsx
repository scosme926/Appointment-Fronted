import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import LoginComponent from "./Component"


class LoginContainer extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <>
          <LoginComponent />
      </>
    )
  }
}




export default LoginContainer;
