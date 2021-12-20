import { React, useState } from "react";
import { Link } from "react-router-dom";


function IndexPage(props) {
    return (
        <>
        <div className="w3-hide-small">
            <h1>TODO #1: Unsupported for Desktop or tablet</h1>
        </div>
            <div className="w3-hide-large w3-hide-medium">
                <div className="w3-container w3-margin w3-padding-32 w3-center">
                    <img src="/img/salon-logo2.png" style={{width:"70%"}}/>
                </div>
                <div className="w3-panel">
                <div className="w3-container">
                    <h1><strong>Welcome</strong></h1>
                    </div>
                    <div className="w3-container w3-theme-l2 w3-round-xlarge w3-border w3-border-grey">
                        <p><strong>Hey, do you want some amazing hair cut or new hair style?</strong></p>
                        <div className="w3-padding">
                            <Link to="/login" className="w3-button w3-black w3-block w3-padding-16 w3-round-xlarge">
                                <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Login
                            </Link>
                        </div>
                        <div className="w3-padding">
                            <Link to="/register" className="w3-button w3-black w3-block w3-padding-16 w3-round-xlarge">
                                <i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp;Register
                            </Link>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default IndexPage
