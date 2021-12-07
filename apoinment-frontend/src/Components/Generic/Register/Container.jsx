import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import RegisterComponent from "./Component"


class RegisterContainer extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <>
          <RegisterComponent />
      </>
    )
  }
}




export default RegisterContainer;
