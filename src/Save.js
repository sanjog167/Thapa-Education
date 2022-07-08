import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zoomtop from "../src/Images/zoomtop.png";
import offer1 from "../src/Images/offer1.png";
import offer2 from "../src/Images/offer2.png";
import offer3 from "../src/Images/offer3.png";

function Save() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".saveMoney_background",
          start: "top bottom",
          end: "bottom",
          scrub: true,
        },
      })
      .to(".handAnimate", 1, {
        height: 600,
      });
  }, []);

  return (
    <section className="saveSection position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 payment__Section m-auto">
            <a href="#" className="mb-2 d-flex">
              WHO WE ARE
            </a>
            <h3 className="fw-800 w-510">We Offer The Best Career</h3>

            <div className="threeOffers mt-3">
              <div className="offer1 d-flex mb-4 align-items-center">
                <img src={offer1} alt="" className="round" />
                <div className="offer1_text ms-4 mt-4">
                  <h5 className="fw-800">Industry Expert Instructor</h5>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmoded tempor incididunt dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="offer1 d-flex mb-4 align-items-center">
                <img src={offer2} alt="" className="round" />
                <div className="offer1_text ms-4 mt-4">
                  <h5 className="fw-800">Up-to-Date Course Content
</h5>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmoded tempor incididunt dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="offer1 d-flex mb-4 align-items-center">
                <img src={offer3} alt="" className="round" />
                <div className="offer1_text ms-4 mt-4">
                  <h5 className="fw-800">Biggest Student Community</h5>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmoded tempor incididunt dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="saveMoney_background position-relative">
              <img src={zoomtop} alt="" className="handAnimate" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Save;
