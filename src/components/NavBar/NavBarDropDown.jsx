import React, { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import navLogo from "./navLogo.png";
const NavBar = () => {
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState();
  const [resHead, setResHead] = useState([]);
  const [resHeadMax, setResHeadMax] = useState([]);

  const fetchItem = async () => {
    const link =
      "https://kentradigital.com/api/allservice";
    const data = await fetch(link);
    const dataJSON = await data.json();
    setItem(dataJSON);
    setResHead(Object.keys(dataJSON));
    setResHeadMax(Object.keys(dataJSON).map((str, index) => ({ value: str, id: index + 1 })));

  };




  return (
    <Navbar bg="light" expand="lg">
      <Nav className="m-auto">
        <Nav.Link as={Link} to={`/allservices`}>All Services</Nav.Link>

        {resHead.slice(0,5).map((res, i) => (
          <NavDropdown title={res} id="basic-nav-dropdown" style={{marginLeft:"20px", marginRight:"20px"}}>


            {item[res].map((item, i) => (
              


              <NavDropdown.Item as={Link} to={`/${item.id}`} >{item.service_type_name}</NavDropdown.Item>



            ))
            }
          </NavDropdown>

        ))
        }


      </Nav>
    </Navbar>
  );
};

export default NavBar;
