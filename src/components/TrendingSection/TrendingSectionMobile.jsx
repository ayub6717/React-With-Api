import React, { useEffect, useState } from "react";
import "../TrendingSection/styles.css";
import { Link } from "react-router-dom";
import ac from "../../images/ac.jpg";

import house from "../../images/house.jpg";
import electric from "../../images/electric.jpg";
import fridge from "../../images/fridge.jpg";
import shifting2 from "../../images/shifting2.jpg";
import interior from "../../images/interior.png";


import plumber from "../../images/plumber.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const ForYourHome = () => {
  useEffect(() => {
    fetchItem();
  },[]);
  const [item, setItem] = useState([]);
  const fetchItem = async () => {
    const link =
      "http://backend.amaderservice.com/api/gettrending";
    const data = await fetch(link);
    const item = await data.json();
    setItem(item);
  };

  const ArrowLeft = (props) => (
    <button style={{background:"red", border: 0}} {...props} className={'prev'}>
      back
    </button>
  );
  const data = 
  [
    
    {
      id:"3",
      name:"Interior Design",
      link_id:"6",
      image: interior

    },
    {
      id:"4",
      name:"Fridge Servicing",
      link_id:"3",
      image: fridge

    },
    {
      id:"5",
      name:"AC Repair",
      link_id:"1",
      image: ac
    },
   
    
    {
      id:"2",
      name:"House Shifting",
      link_id:"7",
      image: shifting2

    },
  ]
  const renderSlides = () =>
  item.map(item => (
    <div>
      <Link
          style={{ textDecoration: "none", color: "33669A",}}
          to={item.link_id}
        >

      <img src={item.image} alt="" style={{ margin:"auto",width:"90px", height:"90px", borderRadius:"10px" }} />

      <p style={{textAlign:"center",color:"#33669A", margin:"auto",fontSize:"10px", width:"90px",
      paddingTop:"5px"}}>{item.name}</p>
      </Link>


    </div>
  ));

return (
  <div>

  <div className="slick-container" style={{marginTop:"20px", marginLeft:"0px"}}>
  {item.length > 0 ?
    <Slider 
    infinite= {false}
    slidesToShow= {3.5}
    arrows={false}

    slidesToScroll= {1}
    >
      {renderSlides()}
    </Slider>
    :
    <div style={{height:"200px"}}></div>}
  </div>
  </div>
);
}

export default ForYourHome;
