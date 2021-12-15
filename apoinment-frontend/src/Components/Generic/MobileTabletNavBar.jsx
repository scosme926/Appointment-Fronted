import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';


export default function MobileTabletNavContainer(props) {
    const location = useLocation();
    const paths = location.pathname.split("/")
    const basePath = paths[1];

    const [isMoreClicked, setIsMoreClicked] = useState(false);
    const [roleId, setRoleId] = useState(1)

return (
    <>
      <br /><br /><br />
      {roleId ===1 &&
        <div class="w3-bar w3-black w3-border w3-bottom w3-xlarge" style={{width:"100%"}}>
          <div className="w3-bar-item w3-center" style={{width:"33%"}}>
              <Link to="/dashboard">
                  <i className={`fa fa-home ${basePath === "dashboard" && !isMoreClicked ? "w3-text-theme" : ""}`}></i>
              </Link>
          </div>
          <div className="w3-bar-item w3-center" style={{width:"33%"}}>
              <Link to="/my-appointments">
                  <i className={`fa fa-list ${basePath === "my-appointments" && !isMoreClicked ? "w3-text-theme" : ""}`}></i>
              </Link>
          </div>
          <div className="w3-bar-item w3-center" style={{width:"33%"}}>
              <Link to="/contact">
                  <i className={`fa fa-info ${basePath === "contact" && !isMoreClicked ? "w3-text-theme" : ""}`}></i>
              </Link>
          </div>
        </div>
      }
      {roleId ===2 &&
        <div class="w3-bar w3-black w3-border w3-bottom w3-xlarge" style={{width:"100%"}}>
          <div className="w3-bar-item w3-center" style={{width:"50%"}}>
              <Link to="/owner-dashboard">
                  <i className={`fa fa-home ${basePath === "owner-dashboard" && !isMoreClicked ? "w3-text-theme" : ""}`}></i>
              </Link>
          </div>
          <div className="w3-bar-item w3-center" style={{width:"50%"}}>
              <Link to="/owner-previous">
                  <i className={`fa fa-list ${basePath === "owner-previous" && !isMoreClicked ? "w3-text-theme" : ""}`}></i>
              </Link>
          </div>
        </div>
      }
    </>
  )
}
