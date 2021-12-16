export default function ProfileComponent(props){
  return(
    <>
          <div className="w3-display-container">
            <img src="img/Picture4.png" className="w3-image w3-margin-bottom" />
            <div className="w3-display-middle w3-circle w3-border-white" style={{borderWidth:"8px", borderStyle:"solid"}}>
                <img src="https://www.w3schools.com/w3css/img_avatar3.png"  className="w3-image w3-circle" style={{height:"150px",}} />
            </div>
            <div className="w3-display-bottommiddle">
                <div className="w3-center">
                    <span className="w3-xlarge">John Smith</span><br />
                    <span className="w3-small w3-text-grey">Product designer</span>
                </div>
            </div>
            </div>
            <div className="w3-panel">
            <div className="w3-border w3-border-grey w3-margin-bottom">
                <div className="w3-card">
                    <div className="w3-cell-row">
                        <div className="w3-white w3-cell w3-cell-middle">
                            <div className="w3-center">
                                <i className="fa fa-user w3-xxlarge w3-text-black"></i>
                            </div>
                        </div>

                        <div className="w3-white w3-cell">
                          <p className="w3-large"><strong>Username</strong></p>
                          <p className="w3-text-grey">Jsmith234</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w3-border w3-border-grey w3-margin-bottom">
                <div className="w3-card">
                    <div className="w3-cell-row">
                        <div className="w3-white w3-cell w3-cell-middle">
                            <div className="w3-center">
                                <i className="fa fa-phone w3-xxlarge"></i>
                            </div>
                        </div>

                        <div className="w3-white w3-cell">
                          <p className="w3-large"><strong>Phone Number</strong></p>
                          <p className="w3-text-grey">+1 (226)-456-8652</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w3-border w3-border-grey w3-margin-bottom">
                <div className="w3-card">
                    <div className="w3-cell-row">
                        <div className="w3-white w3-cell w3-cell-middle">
                            <div className="w3-center">
                                <i className="fa fa-envelope-o w3-xxlarge"></i>
                            </div>
                        </div>

                        <div className="w3-white w3-cell">
                          <p className="w3-large"><strong>Email</strong></p>
                          <p className="w3-text-grey">jsmith2344@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </>
  )
}
