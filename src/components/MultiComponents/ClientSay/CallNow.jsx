import React from 'react'
import './ClientSay.css'

function CallNow() {
    return (
        <div className="call-bg">
            <div className="container">
                <div className="row" style={{ padding: "3%" }}>
                    <div className="col-sm-5">
                        <div className="call-mid" style={{ padding: "20px" }}>
                            <h1>Did not find what you are looking? </h1>
                            <p>Please submit your desired request</p>
                        </div>
                    </div>
                    <div className="col-sm-7" >
                        <div className="call-now">
                            <span><button className="call-btn"> <img src="img/AnotherPic/headset.svg" style={{ width: "20px", marginLeft: "23px" }} alt="" /> <b>Call Now</b></button> <button className="call-btn"><b style={{ marginLeft: "20px" }}>Request a service</b></button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallNow
