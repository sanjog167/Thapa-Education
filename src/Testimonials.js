import React from "react";
import t1 from "../src/Images/t1.png";
import t2 from "../src/Images/t2.png";
import t3 from "../src/Images/t3.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import TestimonialsData from "./TestimonialsData";

function Brand() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="testimonialSection py-150 mt-0 position-relative">
    <div className="container">
    <a href="#" className="mb-2 d-flex">
    TESTIMONIALS
            </a>
            <h3 className="fw-800 w-510">What People says about us</h3>


      <Swiper
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
  
        className="mySwiper mt-4"
      >
            <SwiperSlide>
       <TestimonialsData description="This fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.

" image={t1} name="Brett Craddock" position="GENERAL MANAGER" />
       </SwiperSlide>
       <SwiperSlide>
       <TestimonialsData description="In total, it was a big success, I would get emails about what a fantastic resource it was.

" image={t2} name="Grand Wallis" position="Director" />
       </SwiperSlide>
       <SwiperSlide>
       <TestimonialsData description="This responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers.

" image={t3} name="Lloyd Morren" position="MANAGING DIRECTOR" />
       </SwiperSlide>

      </Swiper>
    </div>
  
    </section>
  );
}

export default Brand;
