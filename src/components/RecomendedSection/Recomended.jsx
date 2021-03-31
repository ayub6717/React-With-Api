import "../TrendingSection/styles.css";
import { Link } from "react-router-dom";
// import ac from "../../images/ac.jpg";
import React, { useEffect, useState } from "react";

// import house from "../../images/house.jpg";
// import electric from "../../images/electric.jpg";
// import fridge from "../../images/fridge.jpg";
// import shifting2 from "../../images/shifting2.jpg";
// import interior from "../../images/interior.png";


// import plumber from "../../images/plumber.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const RecomendedSection = () => {
  useEffect(() => {
    fetchItem();
  },[]);

  const ArrowLeft = (props) => (
    <button style={{background:"red", border: 0}} {...props} className={'prev'}>
      back
    </button>
  );
  const [item, setItem] = useState([]);


  const fetchItem = async () => {
    const link =
      "https://kentradigital.com/api/getrecomanded";
    const data = await fetch(link);
    const item = await data.json();
    setItem(item);
  };
  const renderSlides = () =>
    item.map(item => (
      <div>
        <Link
            style={{ textDecoration: "none", color: "33669A", margin: 0, }}
            to={item.link_id}
          >

        <img src={item.image} alt="" style={{ borderRadius: "10px", boxShadow: `1px 3px 1px #33669A` }} />

        <p style={{textAlign:"center",color:"#33669A", marginTop:"5px"}}>{item.name}</p>
        </Link>


      </div>
    ));

  return (
    <div>

    <div className="slick-container">
      {item.length > 0 ?
      <Slider infinite= {false}
      speed = {500}
      slidesToShow= {4}
      arrows={true}
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

export default RecomendedSection;
