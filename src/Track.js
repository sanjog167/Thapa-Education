import React, {useRef,useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Track() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.timeline({
            scrollTrigger: {
                trigger: ".track",
                start: "top bottom",
                end: "bottom",
                   scrub: true,
            }
        })
                  .to(".track h3", 1, {
              scale:1,
               
            })

      }, []);

      
    useEffect(() => {
        const element = ref.current;
        gsap.timeline({
            scrollTrigger: {
                trigger: ".track",
                start: "top bottom",
                end: "bottom",
                   scrub: true,
            }
        })
                  .to(".trackLeft p", 1, {
              opacity:1,
              
            })

      }, []);



      useEffect(() => {
        const element = ref.current;
        gsap.timeline({
            scrollTrigger: {
                trigger: ".track",
                start: "top bottom", 
                end: "bottom",
                   scrub: true,
            }
        })
                  .to(".trackRight .bgGray", 1,  {
                    translateX:20, opacity:1,
              
            })

      }, []);

      

  return (
    <section id='popular'>
        <div className='container track position-relative' ref={ref}>
            <div className='row'>
                <div className='col-lg-5 trackLeft'>
                    <p className='blue-color fw-800'>Hot Courses</p>
                    <h3 className='fw-800 w-510'>Popular topics to learn now

</h3>
                    <p className='mt-3 w-450'>Unlimited access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs, for one all-inclusive subscription price.


 </p>
                </div>
                <div className='col-lg-7 d-flex align-items-center justify-content-center trackRight'>
                    <div className='row gy-4'>
                        <div className='col-lg-6'> 
                        <div className='bgGray w-100 position-relative'>
                    <h4 className='fw-bold'>JavaScript
</h4>
<h5 className='fw-bold'>11 Courses
</h5>
                    <p className='fw-bold mt-3'>
                   Take a look
                    </p>
                    </div> 
                        </div>
                     
                        <div className='col-lg-6'> 
                        <div className='bgGray w-100 position-relative'>
                    <h4 className='fw-bold'>Angular
</h4>
<h5 className='fw-bold'>20 Courses
</h5>
                    <p className='fw-bold mt-3'>
                   Take a look
                    </p>
                    </div> 
                        </div>

                        <div className='col-lg-6'> 
                        <div className='bgGray w-100 position-relative'>
                    <h4 className='fw-bold'>Core Python
</h4>
<h5 className='fw-bold'>16 Courses
</h5>
                    <p className='fw-bold mt-3'>
                   Take a look
                    </p>
                    </div> 
                        </div>

                        <div className='col-lg-6'> 
                        <div className='bgGray w-100 position-relative'>
                    <h4 className='fw-bold'>C#
</h4>
<h5 className='fw-bold'>44 Courses
</h5>
                    <p className='fw-bold mt-3'>
                   Take a look
                    </p>
                    </div> 
                        </div>
                  
                    
                    </div>
             
 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Track