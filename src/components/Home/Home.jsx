import React, { useEffect, useState } from "react";
// import { reactLocalStorage } from "reactjs-localstorage";
// import { Button } from "react-bootstrap";
// import ChoiseSection from "../ChoiceSection/ChoiseSection";
// import ChoiseSectionMobile from "../ChoiceSection/ChoiseSectionMobile";

import NavBar from "../NavBar/NavBar";
// import NavBarDropDown from "../NavBar/NavBarDropDown";
import NavBarMobile from "../NavBar/NavBarMobile";
// import Recomended from "../RecomendedSection/Recomended";
// import RecomendedMobile from "../RecomendedSection/RecomendedMobile";

// import PersonalCareDesktop from "../RecomendedSection/PersonalCareDesktop";
// import PersonalCareMobile from "../RecomendedSection/PersonalCareMobile";
// import RecomendedSection from "../RecomendedSection/RecomendedSection";
// import RecomendedSectionDesktop from "../RecomendedSection/RecomendedSectionDesktop";

// import BannerMobile from "../RecomendedSection/bannerMobile";
// import BannerDesktop from "../RecomendedSection/bannerDesktop";

// import SearchBar from "../SearchBar/SearchBar";
// import ServiceDropDown from "../ServiceDropDown/ServiceDropDown";
// import ServiceModal from "../ServiceModal/ServiceModal";
// import Services from "../Services/Services";
// import TrendingSection from "../TrendingSection/TrendingSection";
// import TrendingSectionMobile from "../TrendingSection/TrendingSectionMobile";

import "./Home.css";
// import maintain from "./maintain.jpg";
import { useMediaQuery } from 'react-responsive';

import Footer from "../Footer/Footer";
import FooterMobile from "../Footer/FooterMobile";

// import ForYourHome from "../ForYourHome/ForYourHome";
// import ForYourHomeMobile from "../ForYourHome/ForYourHomeMobile";


import SelectItem from "../SelectItem/SelectItem";
import Recommended from "../Recommended/Recommended";
import FindCategory from "../FindCategory/FindCategory";
// import ForYourHome from "../ForYourHome/ForYourHome";
import Trending from "../Trending/Trending"

import YourHome from "../YourHome/YourHome"
import MultiComponents from "../MultiComponents/MultiComponents"

import PersonalCare from "../PersonalCare/PersonalCare"
import Safety from "../Safety/Safety"





const Home = () => {

  /*react responsive starts here*/
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  /*react responsive ends here*/

  document.title = "Home | AmaderService.com";
  return (
    <div>

      {isDesktopOrLaptop ?
        <div>
          <NavBar></NavBar>
          {/* <NavBarDropDown></NavBarDropDown> */}
        </div>
        :
        <NavBarMobile></NavBarMobile>

      }

      <SelectItem />
      <FindCategory />
      <Recommended />
      <YourHome />
      <Safety />
      <PersonalCare />
      <Trending />
      <MultiComponents />

      <div className={isDesktopOrLaptop ? "container-fluid " : "container-fluid"}>

        {/* {isDesktopOrLaptop &&

          <div className="headingHome" id="home" style={{}}>

            <SearchBar></SearchBar>


          </div>

        } */}
        {/* {isTabletOrMobile &&
          <div style={{ paddingTop: "130px", marginRight: "-11px", marginLeft: "-11px" }}>
            <RecomendedSection></RecomendedSection>
            <SearchBar></SearchBar>

          </div>


        } */}

        {/*<ServiceDropDown></ServiceDropDown>*/}

        {/* <div
          style={{ marginTop: "-140px", }}
          className="container service-container"
        >
          <Services></Services>
        </div>{" "} */}

        {/* {isDesktopOrLaptop &&

          <div className="container">
            <h4
              style={{
                paddingLeft: "40px",
                fontSize: "24px",
                color: "#33669A"
              }}
            >
              Recommended
</h4>{" "}
            <Recomended></Recomended>
          </div>

        } */}

        {/* {isTabletOrMobile &&

          <div className="container" style={{ width: "100%", margin: "0px", padding: "0px", marginRight: "-30px" }}>
            <h4
              style={{
                textAlign: "center",
                fontSize: "24px",
                color: "#33669A",
                marginTop: "40px"
              }}
            >
              Recommended
  </h4>{" "}
            <RecomendedMobile></RecomendedMobile>
          </div>

        } */}

        {/* {isDesktopOrLaptop &&

          <div className="container">
            <h4
              style={{
                paddingLeft: "40px",
                fontSize: "24px",
                color: "#33669A"
              }}
            >
              For Your Home
          </h4>{" "}
            <ForYourHome></ForYourHome>
          </div>

        } */}

        {/* {isTabletOrMobile &&

          <div className="container" style={{ width: "100%", margin: "0px", padding: "0px", marginRight: "-30px" }}>
            <h4
              style={{
                textAlign: "center",
                fontSize: "24px",
                marginTop: "30px",
                color: "#33669A"
              }}
            >
              For Your Home
              </h4>{" "}
            <ForYourHomeMobile></ForYourHomeMobile>
          </div>

        } */}

        {/* 
        {isDesktopOrLaptop &&

          <div className="container" style={{ margin: "auto" }}>
            <BannerDesktop></BannerDesktop>

            <h4
              style={{
                paddingLeft: "40px",
                fontSize: "24px",
                color: "#33669A"
              }}
            >
              For Your Personal Care
            </h4>{" "}

            <PersonalCareDesktop></PersonalCareDesktop>
          </div>

        } */}
        {/* 
        {isTabletOrMobile &&

          <div className="container" style={{ width: "100%", margin: "0px", padding: "0px", marginRight: "-30px", paddingTop: "20px", }}>
            <BannerMobile></BannerMobile>

            <h4
              style={{
                textAlign: "center",
                fontSize: "24px",
                color: "#33669A",
                marginTop: "20px",
              }}
            >
              For Your Personal Care
              </h4>{" "}
            <PersonalCareMobile></PersonalCareMobile>
          </div>

        } */}

        {/* {isDesktopOrLaptop &&

          <div className="container" style={{ margin: "auto", }}>

            <h4
              style={{
                paddingLeft: "40px",
                fontSize: "24px",
                color: "#33669A"
              }}
            >
              Trending
            </h4>{" "}

            <TrendingSection></TrendingSection>
          </div>

        } */}

        {/* {isTabletOrMobile &&

          <div className="container" style={{ width: "100%", margin: "0px", padding: "0px", marginRight: "-30px", }}>

            <h4
              style={{
                textAlign: "center",
                fontSize: "24px",
                color: "#33669A",
                marginTop: "10px",
              }}
            >
              Trending
            </h4>{" "}
            <TrendingSectionMobile></TrendingSectionMobile>
          </div>

        } */}


        {/* <div>
          {isDesktopOrLaptop ?
            <div>
              <ChoiseSection></ChoiseSection>
            </div>
            :
            <ChoiseSectionMobile></ChoiseSectionMobile>

          }
        </div> */}
        {isDesktopOrLaptop ?
          <Footer></Footer>

          :
          <FooterMobile></FooterMobile>

        }
      </div>
    </div>
  );
};

export default Home;
