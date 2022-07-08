import React from "react";
import linkedin from "../src/Images/linkedin.png";
import messenger from "../src/Images/messenger.png";
import twitter from "../src/Images/twitter.png";
import twoo from "../src/Images/twoo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Footer() {
  return (
    <section>
      <footer>
        <div className="container">
          <div className="row pb-3">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 text-start">
                  <div>
                    <h5 className="fs-22 fw-800">THAPA EDUCATION</h5>
                    <p className="mt-4 mb-4 left__content lh-29 w-213">
                      Finance helps companies manage payments easily.
                    </p>
                    <div className="social__Icons d-flex align-items-center">
                      <img src={linkedin} alt="" />
                      <img src={messenger} alt="" className="ms-4" />
                      <img src={twitter} alt="" className="ms-4" />
                      <img src={twoo} alt="" className="ms-4" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-start">
                  <div>
                    <h5 className="fs-22 fw-800">Company</h5>

                    <ul className="pl-0 text-start ">
                    <li className="nav-item">
              <a href="#about">
                About 
              </a>
            </li>
            <li className="nav-item">
              <a href="#popular">
                Popular Topics
              </a>
            </li>
            <li className="nav-item">
              <a href="#courses">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a href="#blogs">
                Blogs
              </a>
            </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 text-start">
                  <div>
                    <h5 className="fs-22 fw-800">Resources</h5>

                    <ul className="pl-0 text-start ">
                      <li>
                        <a href="">Download</a>
                      </li>
                      <li>
                        <a href="">Events</a>
                      </li>
                      <li>
                        <a href="">Teach</a>
                      </li>
                      <li>
                        <a href="">Partners</a>
                      </li>
                      <li>
                        <a href="">Affiliate Partners</a>
                      </li>
             
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-start">
              <div>
                <h5 className="fs-22 fw-800">Join Our Newsletter</h5>
                <div className="mt-4 d-flex">
                  <TextField
                    id="outlined-basic"
                    label="Your Email Address"
                    variant="outlined"
                  />
                  <Button variant="contained">Subscribe</Button>
                </div>
                <p className="mt-4 text-lightgray opacity5">*  Will send you weekly updates for your better
finance management.</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <p className="text-center pt-4 pb-5">
          Copyright @ Thapa Education 2022. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
