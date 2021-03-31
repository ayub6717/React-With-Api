import React from "react";
import "../TrendingSection/styles.css";
// import { Link } from "react-router-dom";
// import ac from "../../images/ac.jpg";

// import house from "../../images/house.jpg";
// import electric from "../../images/electric.jpg";
// import fridge from "../../images/fridge.jpg";
// import shifting2 from "../../images/shifting2.jpg";
// import interior from "../../images/interior.png";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";



// import plumber from "../../images/plumber.jpg";

import Slider from "react-slick";

const RecomendedSection = () => {
  const data =
    [


      {
        id: "4",
        name: "Fridge Servicing",
        link_id: "3",
        image: banner1

      },
      {
        id: "2",
        name: "House Shifting",
        link_id: "7",
        image: banner2

      },
      {
        id: "1",
        name: "AC Repair",
        link_id: "1",
        image: banner3
      },
    ]
  return (

    <div>
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={1}
        arrows={false}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
      >
        {data.map(item => (
          <div>            

              <img src={item.image} alt="" style={{
               width:"inherit",
              }} />



          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RecomendedSection;
