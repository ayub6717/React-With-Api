import React from 'react'
import './Footer.css'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <footer className="footer Footer">
                <div className="container bottom_border">
                    <div className="row">


                        <div className=" col-lg-5 col-12 col"> <br />
                            <img style={{ width: "100px", marginTop: "15px" }} src="img/amaderLogo.png" alt="amaderLogo.png" />
                            <p><br />
                                Amader Service Global Limited started with a awe-inspiring vision of creating impact to the social community with the help of IT along-with across the boundary set the seal of quality service for home and commercial conservatory. ASGL aims to conquer against blockage where dwellers or traders could have been relieved having the assurance of quality service. We are in a thrust to find brand equity where we will perform to gain stakeholders premium reliability for recurring service.
                            </p>
                        </div>




                        <div className=" col-lg-2  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

                            {/* <p className="mb10">Lorem Ipsum is simply has
                                been the industry's standard dummy text ever since the 1500s</p> */}
                            <p><i className="fa fa-phone"></i> 01404005022 </p>
                            <p><i className="fa fa-phone"></i> 01404005023 </p>
                            <p><i className="fa fa fa-envelope"></i> info@amaderservice.com </p>
                            <p><i className="fa fa-location-arrow"></i> House No: 18, Road No: 7, Ranavola, Uttara, 1230 Dhaka, Dhaka Division, Bangladesh </p>


                        </div>


                        <div className=" col-lg-2 col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Links</h5>
                            <ul className="footer_ul_amrc">
                                <li><a href="policy_section/about_us.html" target="_blank">About us</a></li>
                                <li><a href="policy_section/term_condition.html" target="_blank">Terms & Condition</a></li>
                                <li><a href="policy_section/privacy_policy.html" target="_blank">Privecy policy</a></li>
                                <li><a href="http://expert.amaderservice.com/" target="_blank">Expart Login</a></li>  

                            </ul>
                        </div>


                        <div className=" col-lg-3 col-md  col-12 col"> <br />
                            <h5 style={{color:"white", marginTop:"10px"}}>Find us</h5>
                            <div className="row" style={{ textAlign: "center" }}>

                                <div className="col-3"><br />
                                    <a href="https://www.facebook.com/amaderservicelimited" target="_blank">
                                        <img style={{ width: "40px" }} src="img/AnotherPic/facebook.png" alt="amaderLogo.png" />

                                    </a>

                                </div> 

                                <div className="col-3"><br />
                                    <a target="_blank"
                                        style={{ textDecoration: "none", }}
                                        href="https://www.instagram.com/amaderservice/"
                                    >
                                        <img style={{ width: "40px" }} src="img/AnotherPic/instagram.png" alt="instagram.png" />
                                    </a>
                                </div>

                                <div className="col-3"> <br />
                                <a href="https://www.linkedin.com/company/76417391/admin/" target="_blank">
                                    <img style={{ width: "40px" }} src="img/AnotherPic/linkedin.png" alt="linkedin.png" />
                                    </a>
                                </div>

                                <div className="col-3"> <br />
                                <a href="https://twitter.com/AmaderService">
                                    <img style={{ width: "40px" }} src="img/AnotherPic/twitter.png" alt="twitter.png" target="_blank" />
                                </a>
                                </div>  


                                <p style={{marginTop:"20px"}}> Download our app to easily & find your desire service</p>
                                <div className="col-sm-6" style={{ padding: "10px" }}>
                                    <img style={{ width: "150px", padding: "10px" }} src="img/app-store.png" alt="" />
                                </div>
                                <div className="col-sm-6" style={{ padding: "10px" }}>
                                    <a href="https://play.google.com/store/apps/details?id=com.amaderserviceclient" target="_blank">
                                    <img style={{ width: "150px", padding: "10px" }} src="img/play-store.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container"> <br />
                    <p className="text-center">Copyright © 2021 Amader Service Global Limited | All Rights Reserved</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer
