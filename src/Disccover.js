import React, {useRef,useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from '@mui/material/Button';

function Disccover() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);


  useEffect(() => {
    const element = ref.current;
    gsap.timeline({
        scrollTrigger: {
            trigger: ".discoverSection",
            start: "top bottom",
            end: "bottom",
               scrub: true,
        }
    })
              .to(".discoverContainer", 1, {
          scale:1, marginTop:0,
           
        })

  }, []);

  return (
    <section className='discoverSection' id='startnow'>
        <div className='container position-relative discoverContainer overflow-hidden px-xs-0' ref={ref} >
            <div className='bg-blue text-white py-150 border-20 position-relative'>
              <p className='text-center'>LET US HELP
</p>
                <h3 className='w-760 m-auto text-center mb-5 position-relative'>Finding Your Right Courses
</h3>
<a href='https://www.youtube.com/results?search_query=thapa+technical+web+development' target="_blank">

<Button variant="contained" className='btn-orange'>Get Started Now</Button>
</a>
            </div>
        </div>
    </section>
  )
}

export default Disccover