import React, {useRef,useEffect} from 'react'
import avatar1 from "../src/Images/avatar1.png";
import avatar2 from "../src/Images/avatar2.png";
import avatar3 from "../src/Images/avatar3.png";
import avatar4 from "../src/Images/avatar4.png";
import paytick from "../src/Images/paytick.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Payment() {

  gsap.registerPlugin(ScrollTrigger); 
  const ref = useRef(null);

  useEffect(() => {
      const element = ref.current;
      gsap.timeline({
          scrollTrigger: {
              trigger: ".payment",
              start: "top bottom",
              end: "bottom",
                 scrub: true,
          }
      })
                .to(".payment__card:nth-child(2)", 1, {
                  translateX:20, opacity:1,
            
          })

    }, []);

    useEffect(() => {
      const element = ref.current;
      gsap.timeline({
          scrollTrigger: {
              trigger: ".payment",
              start: "top bottom",
              end: "bottom",
                 scrub: true,
          }
      })
                .to(".payment__card:nth-child(3)", 1, {
                  translateX:20, opacity:1,
            
          })

    }, []);

  return (
    <section className="pt-10" id='about'>
      <div className="container payment" ref={ref}>
        <div className="row">
          <div className="col-lg-6">
            <div className="payment__left position-relative">
              <div className="payment__card d-flex mb-4">
                <img src={avatar1} alt="avatar" className="w-40 h-40" />
                <div className="payment__cardDescription ms-3">
                  <p className="mb-0 fw-800">Congratulations</p>
                  <p className="mb-0">Your admission completed</p>
                </div>
              </div>
              <div className="payment__card d-flex mb-4">
                <img src={avatar2} alt="avatar" className="w-40 h-40" />
                <div className="payment__cardDescription ms-3">
                  <p className="mb-0 fw-800">User Experience Class</p>
                  <p className="mb-0">Tomorrow is ours

</p>
                </div>
              </div>
              <div className="payment__card d-flex mb-4">
                <img src={avatar3} alt="avatar" className="w-40 h-40" />
                <div className="payment__cardDescription ms-3">
                  <p className="mb-0 fw-800">578k</p>
                  <p className="mb-0">Assisted Student</p>
                </div>
              </div>
              <div className="payment__card d-flex">
                <img src={avatar4} alt="avatar" className="w-40 h-40" />
                <div className="payment__cardDescription ms-3">
                  <p className="mb-0 fw-800">Excellent Couses</p>
                  <p className="mb-0">Real World Impact</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pl-100 payment__Section">
            <a href="#" className="mb-2 d-flex">ABOUT US</a>
            <h3 className="fw-800 w-510 mw-100">
            Knowledge is power, Information is liberating.
            </h3>
            <p className="mt-3 w-450 mt-4">
            Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.


            </p>
            <hr></hr>
            <div className="payment__List">
            <p className="mb-2">
                    <img src={paytick} alt="paytick" />
                    <span className="ms-2 text-lgray">Flexible training programs</span>
                  </p>
                  <p className="mb-2">
                    <img src={paytick} alt="paytick" />
                    <span className="ms-2 text-lgray">Learn from approved experts</span>
                  </p>
                  <p>
                    <img src={paytick} alt="paytick" />
                    <span className="ms-2 text-lgray">Friendly environment for you</span>
                  </p>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}

export default Payment;
