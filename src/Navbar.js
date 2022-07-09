import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import thapa_logo from "../src/Images/thapa_logo.png";



function Navbar() {


  const [SwitchToggle, setSwitchToggle] = useState(false);



  const toggleBar = () => {
    SwitchToggle ? setSwitchToggle(false) : setSwitchToggle(true);
  };


  return (
    <nav
      className=
        "navbar navbar-expand-lg navbar-light" 
      
    >
      <div className="container z-9">
        <a className="navbar-brand fw-bold text-black" href="#">
          <img src={thapa_logo}/>
        </a>

        <Hidden lgDown>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item mr-26">
              <a
                className="nav-link position-relative active text-black"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link position-relative text-black" href="#about">
                About 
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link position-relative text-black" href="#popular">
                Popular Topics
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link position-relative text-black" href="#courses">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link position-relative text-black" href="#blogs">
                Blogs
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Button variant="text" className="mr-50">
              Sign In
            </Button>
            <a href="#startnow">
            <Button variant="contained">Start Free</Button>
            </a>
          </div>
        </div>
        </Hidden>
        <Hidden lgUp>
        <IconButton>
        <MenuIcon onClick={toggleBar}>Burger</MenuIcon>
        </IconButton>
        </Hidden>
      
  
        
      </div>
      <aside className={"slide-bar " +
        (SwitchToggle ? "show" : "") }>
        <nav className="side-mobile-menu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-start">
          <li className="nav-item mr-26">
              <a
                className="nav-link position-relative active text-black"
                aria-current="page"
                href="#"  onClick={toggleBar}
              >
                Home
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link position-relative text-black" href="#about" onClick={toggleBar}> 
                About 
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link position-relative text-black" href="#popular" onClick={toggleBar}>
                Popular Topics
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link position-relative text-black" href="#courses" onClick={toggleBar}>
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link position-relative text-black" href="#blogs" onClick={toggleBar}>
                Blogs
              </a>
            </li>
            <ul className="d-flex flex-column align-items-start ms-0 pl-0">
            <Button variant="outlined" onClick={toggleBar} style={{borderColor: "#fff", color: "#fff", marginBottom: "20px"}}>Sign In</Button>
            <a href="#startnow">
            <Button variant="contained" onClick={toggleBar} style={{backgroundColor: "white"}}>Start Free</Button>

            </a>

            </ul>

          </ul>
        </nav>
        <div className="close_sideBar position-absolute" onClick={toggleBar}>
          <i className="fa fa-times"></i>
        </div>
      </aside>
      <div className={"body-overlay " + (SwitchToggle ? "active" : "")} onClick={toggleBar}></div>
    </nav>
  );
}

export default Navbar;
