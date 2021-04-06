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
                        <div className=" col-sm-4 col-md  col-12 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

                            {/* <p className="mb10">Lorem Ipsum is simply has
                                been the industry's standard dummy text ever since the 1500s</p> */}
                            <p><i className="fa fa-phone"></i> 01404005022 </p>
                            <p><i className="fa fa-phone"></i> 01404005023 </p>
                            <p><i className="fa fa fa-envelope"></i> info@amaderservice.com </p>
                            <p><i className="fa fa-location-arrow"></i> House No: 18, Road No: 7, Ranavola, Uttara, 1230 Dhaka, Dhaka Division, Bangladesh </p>


                        </div>


                        <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">OTHER PAGES</h5>

                            <ul className="footer_ul_amrc">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <li><a href="#">Terms of use</a></li>
                            </ul>
                        </div>


                        <div className=" col-sm-4 col-md  col-6 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Companys</h5>
                            <ul className="footer_ul_amrc">
                                <li><a href="#">Remove Background</a></li>
                                <li><a href="#">Shadows & Mirror Reflection</a></li>
                                <li><a href="#">Hair Masking/Clipping</a></li>
                                <li><a href="#">Image Cropping</a></li>
                            </ul>
                        </div>


                        <div className=" col-sm-4 col-md  col-12 col">
                            <h5 className="headin5_amrc col_white_amrc pt2">Download App</h5>
                            <p> Download to easily & find your desire service from our app .</p>
                            <div className="row" style={{ textAlign: "center" }}>
                                <div className="col-sm-6" style={{ padding: "10px" }}>
                                    <img style={{ width: "120px" }} src="img/app-store.png" alt="" />
                                </div>
                                <div className="col-sm-6" style={{ padding: "10px" }}>
                                    <img style={{ width: "120px" }} src="img/play-store.png" alt="" />
                                </div>
                                <div className="col-sm-4"><br />
                                    <a
                                        style={{ textDecoration: "none", }}
                                        href={"https://www.facebook.com/amaderservicelimited"}
                                    >
                                        <FaFacebook href="https://www.facebook.com/amaderservicelimited" size={40} style={{ color: "#33669A" }} />
                                    </a>
                                </div>

                                <div className="col-sm-4"><br />
                                    <a
                                        style={{ textDecoration: "none", }}
                                        href={"https://www.instagram.com/amaderservice/"}
                                    >
                                        <FaInstagram href="https://www.instagram.com/amaderservice/" size={40} style={{ color: "#33669A" }} />
                                    </a>
                                </div>

                                <div className="col-sm-4"> <br />
                                    <FaLinkedinIn alt="" size={40} style={{ color: "grey" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container"> <br />
                    <p className="text-center">Copyright © 2020 Amader Service Global Limited | All Rights Reserved</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer
