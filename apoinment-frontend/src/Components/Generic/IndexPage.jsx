import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <>
        <div class="w3-bar w3-brown w3-border w3-bottom w3-xlarge" style={{width:"100%"}}>
            <a href="#" class="w3-bar-item w3-button" style={{width:"33%"}}><i class="fa fa-home"></i></a>
            <a href="#" class="w3-bar-item w3-button" style={{width:"33%"}}><i class="fa fa-plus-circle"></i></a>
            <a href="#" class="w3-bar-item w3-button" style={{width:"33%"}}><i class="fa fa-info-circle"></i></a>
        </div>
      </>
    )
  }
}




export default IndexPage;
