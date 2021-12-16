import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';


export default function MobileTabletTopNavContainer(props) {
    const location = useLocation();
    const paths = location.pathname.split("/")
    const basePath = paths[1];

    const [isMoreClicked, setIsMoreClicked] = useState(false);

return (
    <>
      <div className="w3-row w3-teal" style={{width:"100%"}}>
        <div className="w3-col s4 w3-container w3-padding">
            <Link to="/dashboard" className="w3-btn w3-left"><i className="fa fa-chevron-left"></i>&nbsp;Back</Link>
        </div>

        <div className="w3-col s4 w3-container w3-center">
            <h6>&nbsp;Book Appointment</h6>
        </div>

        <div className="w3-col s4 w3-container w3-padding">
        </div>
      </div>
    </>
  )
}
