import React, {useRef,useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon1 from "../src/Images/book.png";
import icon2 from "../src/Images/bag2.png";
import icon3 from "../src/Images/trophy2.png";
import FeatureData from './FeatureData';

function Feature() {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.timeline({
            scrollTrigger: {
                trigger: ".featurebg",
                start: "top center",
                end: "center",
                   scrub: true,
            }
        })
        .to(".featurebg", { backgroundColor: "#C9E7F2", color:"black" })

      }, []);

  return (
    <section className="featurebg position-relative">
      <div className="container" ref={ref}>
        <h3 className="fw-800 text-center">How Does Thapa Education Work?
</h3>
        <p className=" mt-3 text-center">
        We help organizations of all types and sizes prepare for the path ahead
        </p>
        <div className="feature__Cards mt-5">
          <FeatureData image={icon1} title="Choose Any Courses" description="We envision a world where anyone and anywhere has the power"/>
          <FeatureData image={icon2} title="Purchase Your Course" description="It has the power to transform our world
from illness to health,
from poverty to prosperity,
"/>
          <FeatureData image={icon3} title="Great! Start Learn" description="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>


        </div>
      </div>
    </section>
  );
}

export default Feature;
