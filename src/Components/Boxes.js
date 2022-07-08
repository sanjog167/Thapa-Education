import React, { useEffect } from "react";
import icon1 from "../src/Images/icon1.png";
import icon2 from "../src/Images/icon2.png";
import icon3 from "../src/Images/icon3.png";
import icon4 from "../src/Images/icon4.png";
import icon5 from "../src/Images/icon5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import BoxData from "./BoxData";

function Boxes() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="boxgrid gy-4">
          <BoxData
            title="Art & Design
            "
            image={icon1}
            description="45 Courses.

            "
            numbering="01"
          />
          <BoxData
            title="Content Writing
            "
            image={icon2}
            description="45 Courses.

            "
            numbering="02"
          />
          <BoxData
            title="Data Science
            "
            image={icon3}
            description="50 Courses.

            "
            numbering="03"
          />
                <BoxData
            title="Health & Fitness
            "
            image={icon4}
            description="20 Courses

            "
            numbering="04"
          />
                <BoxData
            title="Music Learning
            "
            image={icon5}
            description="45 Courses

            "
            numbering="05"
          />
        </div>
      </div>
    </section>
  );
}

export default Boxes;
