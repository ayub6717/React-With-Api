import React, { useEffect, useState } from "react";
// import Data from './../../data/data.json'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ..........................
import { Link } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
function Trending() {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState([]);


    const fetchItem = async () => {
        const link =
            "https://kentradigital.com/api/gettrending";
        const data = await fetch(link);
        const item = await data.json();
        setItem(item);
    };
    return (
        <div className="RecTop">
            <div className="container">
                <span className="rec-shadow1" style={{ marginBottom: "20px", display: "inline-block" }}> <b>Trending</b> </span>
                <Carousel responsive={responsive}>
                    {item.map((item) => (
                        <div key={item.id} className="rec-pad" >
                            <div className="rec-shadow">
                                <Link
                                    style={{ textDecoration: "none", color: "33669A", margin: 0, }}
                                    to={item.link_id}
                                >
                                    <img className="rec-img" src={item.image} alt="" />
                                    <h5 className="rec-text">{item.name}</h5>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Trending
