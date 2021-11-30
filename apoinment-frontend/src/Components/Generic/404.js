import { React, Component } from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <>
        <div class="row">
        <h1>Not Found</h1>
        </div>
      </>
    )
  }
}

export default NotFoundPage;
