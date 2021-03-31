import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";
import { FaChevronRight } from 'react-icons/fa';

import NavBarDropDown from "../NavBar/NavBarDropDown";
import { Link } from "react-router-dom";

import "./ServiceTemplate.css";
import plusIcon from "../../icons/proton.png";
import { useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { useMediaQuery } from 'react-responsive';
import ChoiseSection from "../ChoiceSection/ChoiseSection";
import Footer from "../Footer/Footer";
import FooterMobile from "../Footer/FooterMobile";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import CartModal from "../CartModal/CartModal";
import ServiceDropDown from "../ServiceDropDown/ServiceDropDown";
import { Navbar } from "react-bootstrap";
function ServiceTemplate({ match }) {
  useEffect(() => {
    fetchItem();
    fetchServiceDetails();
  }, [match.params.id]);
  const [userInfo, setUserInfo] = useState(
    reactLocalStorage.getObject("userInfo")
  );

  const [isLoggedIn, setIsLoggedIn] = useState(
    reactLocalStorage.get("isLoggedIn")
  );

  const [item, setItem] = useState([]);
  const [details, setDetails] = useState({
    minidetail: [{}],
    included: [{}],
    excluded: [{}],
    serviceFeature: [{}],
    faq: [{}],
    terms: [{}],
    nightshif: [{}],
    whychoose: [{}],
    overall: [{}],
  });
/*react responsive starts here*/
const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })  
/*react responsive ends here*/
  const [visible, setVisible] = useState("");
  const [propId, setPropId] = useState("");
  const [propPrice, setPropPrice] = useState("");
  const [propName, setPropName] = useState("");
  const [dataFAQ, setDataFAQ] = useState([]);

  const [height, setHeight] = useState(0);
  const margin = [-70, -10, 40, 100, 150, 220, 270, 350, 390];

  const [expanded, setExpanded] = useState(false);
  const [startIndex, setStartIndex] = useState();
  const [endIndex, setEndIndex] = useState();
  const [modalShow, setModalShow] = useState(false);

  const listToggler = (id) => {
    if (expanded == true) {
      setExpanded(false);
      setStartIndex(0);
      setEndIndex(0);
    } else {
      setVisible(id);
      setExpanded(true);
      setStartIndex(id - 1);
      setEndIndex(id);
    }
  };
  const [userZone, setUserZone] = useState(reactLocalStorage.get("userZoneId"));

  const fetchItem = async () => {
    const link =
      "https://kentradigital.com/api/findservice?servicetypenameid=" +
      match.params.id +
      "&zoneid=" +
      userZone;
    const data = await fetch(link);
    const item = await data.json();
    setItem(item);
    //alert("this is height" + item.length)

    setHeight(margin[item.length]);
  };

  const fetchServiceDetails = async () => {
    const data = await fetch(
      `https://kentradigital.com/api/getServiceDetails?servicetypeID=${match.params.id}`
    );
    const item = await data.json();
    //console.log("this is details" + JSON.stringify(item));
    setDetails(item);
      const arrayFAQ = item.faq;
    for(var i=0; i<arrayFAQ.length; ++i){
      arrayFAQ[i].id = i+1;
    }
    setDataFAQ(arrayFAQ);

    //setService(newArrayCity);
    

  };
  const history = useHistory();

  const handleCartOpen = (id, name, price) => {
    console.log("clicked");
    if (isLoggedIn) {
      setPropId(id);
      setPropName(name);
      setPropPrice(price);
      setModalShow(true);
    } else {
      history.push("/login");
    }
  };
  var detailRef = [];
  detailRef[0] = React.createRef();
  detailRef[1] = React.createRef();
  detailRef[2] = React.createRef();
  detailRef[3] = React.createRef();

  
  
  const handleClick = id =>
  detailRef[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  return (
    <div>
            {isDesktopOrLaptop ?

      <div>
        <NavBar></NavBar>
      
        <NavBarDropDown></NavBarDropDown>
      </div>
      :
      <NavBarMobile></NavBarMobile>
            }
      {/* here starts big screen */}
      {isDesktopOrLaptop ?
      <div>
        <div
          style={{
            backgroundImage: `linear-gradient(
              330deg,
              #00000050,#00000090),url(${details.overall[0].bannerImage})`,
          }}
          className="container-fluid newheader"
        >
          <div className="newheading">
            <h1 style={{color:"#ffffff"}}>{details.overall[0].title}</h1>
            {details.minidetail.map((item) => (
              <ul>
                <li key={item.id}>{item.details}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="container-fluid body-color">
          <h3 style={{color:"white"}}>{details.overall[0].thirdheading}</h3>
          {item.map((item) => (
            <div className="row" style={{width:"100%", marginLeft:"0px"}}>
              <div className="col-md-11" style={{backgroundColor:"white",borderTopLeftRadius:"6px",borderBottomLeftRadius:"6px", margin:"0px", padding:"0px", marginBottom:"15px"}}>
              <p
                onClick={() =>
                  handleCartOpen(item.id, item.service_name, item.price)
                }
                style={{fontSize:14, padding:"0px", margin:"0px", padding:"10px" }}
                key={item.id}
              >
                {item.service_name}
              </p>
              </div>
              <div className="col-md-1" style={{backgroundColor:"white", margin:"0px", padding:"0px",orderTopRightRadius:"6px",borderBottomRightRadius:"6px",borderTopRightRadius:"6px", paddingTop:"6px", marginBottom:"15px", paddingLeft:"-10px"}}>

              <FaChevronRight
              width="40"
              height="40"
              style={{marginTop:"3px", color:"grey", }}
              alt="React Bootstrap logo"
              />
            </div>

              
            </div>
          ))}
          {isLoggedIn ? (
                <CartModal
                  userId={userInfo[0].id}
                  serviceTitle={propName}
                  zoneid={userZone}
                  serviceId={propId}
                  servicePrice={propPrice}
                  show={modalShow}
                  setModalShow={handleCartOpen}
                  onHide={() => setModalShow(false)}
                ></CartModal>
              ) : null}
        </div>

        <div className="container" style={{ marginTop: -height ,}}>
          <div className="row">
            <div id="left" className="col-md-3">
              <nav class="sectionTemplate-nav">
                <ol className="ulclassTemplate">
                  <li>
                    <a style={{cursor:"pointer"}} onClick={() => handleClick(0)}>Details</a>
                  </li>
                  <li>
                    <a style={{cursor:"pointer"}} onClick={() => handleClick(1)}>Pricing</a>
                  </li>
                  <li>
                    <a style={{cursor:"pointer"}} onClick={() => handleClick(2)}>Features</a>
                  </li>
                  <li>
                    <a style={{cursor:"pointer"}} onClick={() => handleClick(3)}>T{'&'}C</a>
                  </li>
                </ol>
              </nav>
            </div>

            <div className="col-md-6">
              <section style={{ paddingBottom: "0" }} >
                <div>
                  <h3 style={{color:"#33669A"}} ref={detailRef[0]}>Details</h3>
                  <p>{details.overall[0].details}</p>
                </div>              

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>What's included?</h3>
                  {details.included.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>{item.details}</li>
                    </ul>
                  ))}
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>What's excluded?</h3>
                  {details.excluded.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>{item.details}</li>
                    </ul>
                  ))}
                </div>
                </section>

                <section style={{ paddingBottom: "0" }} ref={detailRef[1]}>
                {details.overall[0].pricing !== "" ?

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Pricing</h3>
                  <p>{details.overall[0].pricing}</p>
                </div>
                :
                <div></div>
                }

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Payment</h3>
                  <p>{details.overall[0].payment}</p>
                </div>
                </section>

                <section style={{ paddingBottom: "0" }} ref={detailRef[2]}>

                {details.serviceFeature.length > 0 ?
                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Service Features</h3>
                  {details.serviceFeature.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>{item.details}</li>
                    </ul>
                  ))}
                </div>
                :
                <div></div>
                }
              </section>
              <section ref={detailRef[3]} style={{paddingBottom:"0px"}}>
                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>FAQ</h3>
                  {dataFAQ.map((item) => (
                    <ul>
                      <li
                        style={{ paddingBottom: "10px", marginLeft: "0px" }}
                        key={item.id}
                        onClick={() => listToggler(item.id)}
                      >
                        <span className="boldfont">
                          <img width="15" src={plusIcon} alt="" />
                        </span>{" "}
                        {item.question}
                      </li>
                      <div className={visible === item.id ? "" : "invisible"}>
                        <SlideDown transitionOnAppear={false}>
                          {dataFAQ.slice(startIndex, endIndex).map((item) => (
                            <li
                              style={{
                                padding: "0",
                                marginLeft: "0px",
                                paddingBottom: "20px",
                              }}
                              key={item.id}
                            >
                              <span className="boldfont">A:</span> {item.answer}
                            </li>
                          ))}
                        </SlideDown>
                      </div>
                    </ul>
                  ))}
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Terms And Conditions</h3>
                  {details.terms.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>
                        <span className="boldfont">{item.title}: </span>{" "}
                        {item.details}
                      </li>
                    </ul>
                  ))}
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Night Shifting</h3>
                  {details.nightshif.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>{item.details}</li>
                    </ul>
                  ))}
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Why Choose Us?</h3>
                  {details.whychoose.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>
                        <span className="boldfont">{item.title}: </span>{" "}
                        {item.details}
                      </li>
                    </ul>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      :
      <div>
        <div
          style={{
            marginTop:"50px",
            backgroundImage: `linear-gradient(
              330deg,
              #33669a99, #112233),url(${details.overall[0].bannerImage})`,
          }}
          className="newheaderMobile"
        >

          <div className="newheadingMobile" style={{ paddingBottom:"50px", paddingTop:"50px", }} >
            <h3 style={{color:"#ffffff"}}>
              {details.overall[0].title}</h3>
            {details.minidetail.map((item) => (
              <ul style={{color:"white",margin:"0px", marginLeft:"20px", padding:"0px"}}>
                <li style={{color:"white", fontWeight:"500", fontSize:"10px", margin:"0px", padding:"0px"}} key={item.id}>{item.details}</li>

              </ul>
            ))}
        </div>
        </div>

        <div className="thirdlayer" style={{marginLeft:"30px", marginRight:"30px"}}>
        <h3 style={{color:"white", fontSize:"16px", fontWeight:"bold"}}>{details.overall[0].thirdheading}</h3>

          {item.map((item) => (
            <div style={{backgroundColor:"white" , fontWeight:"600", marginBottom:"10px",borderRadius:"5px", padding:"8px"}}>
              <div className="row" style={{margin:"0px",width:"100%", marginLeft:"0px", }}>
              <div  style={{backgroundColor:"white",borderTopLeftRadius:"6px",width:"90%",borderBottomLeftRadius:"6px", margin:"0px", padding:"0px", marginBottom:"0px"}}>
              <p
                onClick={() =>
                  handleCartOpen(item.id, item.service_name, item.price)
                }
                style={{fontSize:14, padding:"0px", margin:"0px", padding:"3px" }}
                key={item.id}
              >
                {item.service_name}
              </p>
              </div>
              <div style={{backgroundColor:"white", margin:"0px",borderTopRightRadius:"6px",width:"10%",borderBottomRightRadius:"6px", paddingTop:"0px", marginBottom:"0px"}}>

              <FaChevronRight
              width="40"
              height="40"
              style={{marginTop:"3px", color:"grey", }}
              alt="React Bootstrap logo"
              />
            </div>
            </div>

              
            </div>
          ))}
          {isLoggedIn ? (
                <CartModal
                  userId={userInfo[0].id}
                  serviceTitle={propName}
                  zoneid={userZone}
                  serviceId={propId}
                  servicePrice={propPrice}
                  show={modalShow}
                  setModalShow={handleCartOpen}
                  onHide={() => setModalShow(false)}
                ></CartModal>
              ) : null}
        </div>

        <div className="container" style={{ marginTop: 0 }}>
          <div className="row">            
            <div className="col-md-12">
              <section style={{ paddingBottom: "0" }} id="serviceoverview">
                <div>
                  <h3 style={{color:"#33669A"}}>Details</h3>
                  <p>{details.overall[0].details}</p>
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>What's included?</h3>
                  {details.included.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>{item.details}</li>
                    </ul>
                  ))}
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>What's excluded?</h3>
                  {details.excluded.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>{item.details}</li>
                    </ul>
                  ))}
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Pricing</h3>
                  <p>{details.overall[0].pricing}</p>
                </div>
                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Payment</h3>
                  <p>{details.overall[0].payment}</p>
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Service Features</h3>
                  {details.serviceFeature.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>{item.details}</li>
                    </ul>
                  ))}
                </div>
              </section>
              <section id="faq" style={{paddingBottom:"0px"}}>
                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>FAQ</h3>
                  {dataFAQ.map((item) => (
                    <ul>
                      <li
                        style={{ paddingBottom: "10px", marginLeft: "0px" }}
                        key={item.id}
                        onClick={() => listToggler(item.id)}
                      >
                        <span className="boldfont">
                          <img width="15" src={plusIcon} alt="" />
                        </span>{" "}
                        {item.question} {item.answer}
                      </li>
                      <div className={visible === item.id ? "" : "invisible"}>
                        <SlideDown transitionOnAppear={false}>
                          {dataFAQ.slice(startIndex, endIndex).map((item) => (
                            <li
                              style={{
                                padding: "0",
                                marginLeft: "0px",
                                paddingBottom: "20px",
                              }}
                              key={item.id}
                            >
                              <span className="boldfont">A:</span> {item.answer}
                            </li>
                          ))}
                        </SlideDown>
                      </div>
                    </ul>
                  ))}
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Terms And Conditions</h3>
                  {details.terms.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>
                        <span className="boldfont">{item.title}: </span>{" "}
                        {item.details}
                      </li>
                    </ul>
                  ))}
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Night Shifting</h3>
                  {details.nightshif.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>{item.details}</li>
                    </ul>
                  ))}
                </div>

                <div className="newsection">
                  <h3 style={{color:"#33669A"}}>Why Choose Us?</h3>
                  {details.whychoose.map((item) => (
                    <ul className="ulclass">
                      <li key={item.id}>
                        <span className="boldfont">{item.title}: </span>{" "}
                        {item.details}
                      </li>
                    </ul>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
}
{isDesktopOrLaptop ?

        <Footer></Footer>
        :
        <FooterMobile></FooterMobile>
}
    </div>
  );
}

export default ServiceTemplate;
