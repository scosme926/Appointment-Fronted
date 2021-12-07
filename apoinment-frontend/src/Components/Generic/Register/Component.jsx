export default function RegisterComponent(props){
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
                    <label> Full Name (*)</label>
                    <input className="w3-input w3-theme-l3" type="text" name="username"/>
                </p>
                <p className="w3-text-black">
                    <label> Username (*)</label>
                    <input className="w3-input w3-theme-l3" type="text" name="username"/>
                </p>
                <p className="w3-text-black">
                    <label> Email (*)</label>
                    <input className="w3-input w3-theme-l3" type="text" name="username"/>
                </p>
                <p className="w3-text-black">
                    <label> Password (*)</label>
                    <input className="w3-input w3-theme-l3" type="password" name="username"/>
                </p>
                <p className="w3-text-black">
                    <button className="w3-btn w3-black w3-block w3-margin-bottom">Register</button>
                    {/* <Link to="/login" className="w3-btn w3-light-grey w3-block">Log in</Link>*/}
                </p>
            </div>
       </div>
    </>
  )
}
