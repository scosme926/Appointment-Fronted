import { Link } from "react-router-dom"

export default function RegisterComponent(props){
    const {  email, password, firstName, lastName, onTextChange, onSubmitClick } = props;
  return(
    <>
        <div className="w3-container w3-margin-bottom w3-center">
            <br />
            <h1 className="w3-text-black">Salon Beauty</h1>
        </div>

        <br />

        <div className="w3-container">
            <div className="w3-theme-l2 w3-container w3-round-xlarge">
                <h1 className="w3-text-black"><strong>Register</strong></h1>
                    <hr className="w3-black"/>
                <p className="w3-text-black">The fields with the (*) are required.</p>
                <p className="w3-text-black">
                    <label> First Name (*)</label>
                    <input className="w3-input w3-theme-l3" type="text" name="firstName" value={firstName} onChange={onTextChange} />
                </p>
                <p className="w3-text-black">
                    <label> Last Name (*)</label>
                    <input className="w3-input w3-theme-l3" type="text" name="lastName" value={lastName} onChange={onTextChange}/>
                </p>
                <p className="w3-text-black">
                    <label> Email (*)</label>
                    <input className="w3-input w3-theme-l3" type="email" name="email" value={email} onChange={onTextChange}/>
                </p>
                <p className="w3-text-black">
                    <label> Password (*)</label>
                    <input className="w3-input w3-theme-l3" type="password" name="password" value={password} onChange={onTextChange}/>
                </p>
                <p className="w3-text-black">
                    <button className="w3-btn w3-black w3-block w3-margin-bottom" onClick={onSubmitClick}>Register</button>
                    <Link to="/login" className="w3-btn w3-black w3-block">Log in</Link>
                </p>
            </div>
       </div>
    </>
  )
}
