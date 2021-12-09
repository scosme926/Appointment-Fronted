import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ProfileComponent from "./Component"


class ProfileContainer extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <>
          <ProfileComponent />
      </>
    )
  }
}




export default ProfileContainer;
