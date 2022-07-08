import React from "react";
import bannerImage from "../src/Images/bannerImage.png";
import tick from "../src/Images/tick.png";
import blob from "../src/Images/blob.png";
import Button from '@mui/material/Button';
import { Typewriter } from 'react-simple-typewriter'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '45%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  p: 4,
};

function Banner() 
{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  return (
  
      <div className="mainBanner position-relative bgGradient overflow-hidden">
        <div className="innerBanner position-relative">
          <div className="inBanner position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="mainBanner__left pt-3">
                <h3>Access 2700+
</h3>
                <h1 className="text-start fw-800">
                Learn From {''}
                
   
          <Typewriter
            words={[' Anywhere']}
           
            cursor
            cursorStyle=''
            typeSpeed={300}
            deleteSpeed={50}
            delaySpeed={1000} 
         
          />
                </h1>
                <p className="text-start text-lgray w-510 fs-20 mt-3">
                Technology Is Bringing A Massive Wave Of Evolution On Learning Things In Different Ways.

{" "}
                </p>
                <div className="d-flex align-items-center mt-5 flex-column-sm">
                <a href="#startnow">
                  <Button variant="contained" >Get Started</Button>

                  </a>
                  <Button onClick={handleOpen}>
                  <a  className="play-now d-flex align-items-center"><i className="fa fa-play icon" aria-hidden="true"></i><span className="ripple"></span>  See How It Works</a>             

                  </Button>
                  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <iframe width="760" height="515" src="https://www.youtube.com/embed/F9gZkfFIh9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
      </Modal>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <p>
                    <img src={tick} alt="tick" />
                    <span className="ms-2 text-lgray me-4">Top Instructor</span>
                  </p>
                  <p>
                    <img src={tick} alt="tick" />
                    <span className="ms-2 text-lgray">Great Service</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mainBanner__right h-790 d-flex align-items-center justify-content-center">
                <img src="https://transvelo.github.io/skola-html/5.1/assets/img/illustrations/illustration-1.png" alt="bannerImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="blob w-sm-60 h-sm-60">
          <img src={blob} alt="blob" />
        </div>
        </div>
        </div>
      </div>
    

 
  
  );
}

export default Banner;
