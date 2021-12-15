import { Link } from "react-router-dom"

export default function LoginComponent(props){
   const { username, password, onTextChange, onLoginClick } = props;
  return(
    <>
        <div className="w3-container w3-margin-bottom w3-center">
            <br /><br />
            <img src="/img/salon-logo3.png" style={{width:"70%"}}/>
        </div>

        <div className="w3-container">
            <div className="w3-theme-l2 w3-container w3-round-xlarge">
                <h1 className="w3-text-black"><strong>Login</strong></h1>
                <p>
                    <label className="w3-text-black"> Username</label>
                    <input className="w3-input w3-theme-l3" name="username" value={username} onChange={onTextChange} />
                </p>
                <p>
                    <label className="w3-text-black"> Password</label>
                    <input className="w3-input w3-theme-l3" type="password" name="password" value={password} onChange={onTextChange}/>
                </p>
                <p>
                    <button className="w3-btn w3-black w3-block w3-margin-bottom" onClick={onLoginClick} >Login</button>
                </p>
          </div>
          <Link to="/login" className="w3-btn w3-light-grey w3-block">Log in</Link>
        </div>
    </>
  )
}
