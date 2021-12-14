import { React, Component } from "react";
import { Link } from "react-router-dom";
import { getVersion, postHello } from  "../../API/misc";

class TestPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      "version": "",
      "msg": "",
    }
    this.onSuccefulCallBack = this.onSuccefulCallBack.bind(this);
    this.onErrorCallBack = this.onErrorCallBack.bind(this);
    this.doneCallBack = this.doneCallBack.bind(this);
    this.postHellonSuccefulCallBack = this.postHellonSuccefulCallBack.bind(this);
    this.postHellonErrorCallBack = this.postHellonErrorCallBack.bind(this);
    this.postHellodoneCallBack = this.postHellodoneCallBack.bind(this);
  }

  onSuccefulCallBack(response) {
    console.log(response)
    this.setState({
      "version": response.data["version"]
    })
  }

  onErrorCallBack(response) {
    console.log(response)
  }

  doneCallBack() {
    console.log("Finish")
  }

  componentDidMount() {
    getVersion(this.onSuccefulCallBack, this.onErrorCallBack, this.doneCallBack);
  }

  postHellonSuccefulCallBack(response) {
    console.log(response)
    this.setState({
      "msg": response.data["msg"]
    })
  }

  postHellonErrorCallBack(response) {
    console.log(response)
  }

  postHellodoneCallBack() {
    console.log("Finish")
  }


  componentDidMount() {
    getVersion(this.onSuccefulCallBack, this.onErrorCallBack, this.doneCallBack);

    const data = {
      "name": "Nick"
    }
    postHello(data, this.postHellonSuccefulCallBack, this.postHellonErrorCallBack, this.postHellodoneCallBack)
  }


  render () {
    return (
      <div>
        <h1>Hello</h1>
        <p>Version: {this.state.version}</p>
        <p>Msg: {this.state.msg}</p>
      </div>
    );
  }
  }

export default TestPage;
