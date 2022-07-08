import React from 'react'
import th1 from "../src/Images/th1.webp";
import th2 from "../src/Images/th2.webp";
import th3 from "../src/Images/th3.webp";
import th4 from "../src/Images/th4.webp";
import th5 from "../src/Images/th5.webp";
import th6 from "../src/Images/th6.webp";
import th7 from "../src/Images/th7.webp";
import th8 from "../src/Images/th8.webp";

function Courses() {
  return (
    <section className="position-relative pb-30" id='courses'>
    <div className="container">
      <div className='d-flex align-items-center justify-content-between'>
      <h3 className="fw-800 mb-5">New on Thapa <span className='color-blue'>Education</span></h3>
      <ul class="nav nav-pills mb-3 coursePills" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Popular</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Trending</button>
  </li> 

</ul>
      </div>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div className='couses_Cards'>
        <div className='row gy-4'>
            <div className='col-lg-3'>
         <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
         <div className='courses_CardsDiv'>
                
                <div className='couses_CardsImg'>
              
                      <img src={th1} alt='' className='w-100' />
                 
                  </div>
                  <div className="courses_CardsContent pt-4">
                    <p className='fw-800'>
                    Styled Component in React in Hindi #1: Introduction to Styled Component & How to use it in React JS
                    </p>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                    <p>$45.00</p>
                    <div>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    </div>
                  
                  </div>
                </div>
         </a>
            
        
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th2} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  VS Code Extension for HTML Class Names & IDs Auto Suggestion in CSS File 🔥
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$50.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th3} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  VS Code Extension for HTML Class Names & IDs Auto Suggestion in CSS File 🔥
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th4} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  🔥VS Code Top 10 Shortcuts To Increase Productivity in 2022
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th5} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  The Missing Video of Movie Website in React JS in Hindi || Single Movie Page Rendering
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th6} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  🔥 Create Google Chrome Extensions using JavaScript from Scratch in 2022
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th7} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  THAPA TECHNICAL CODEFEST || For Programmers || Participate for Free & Win Prizes                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th8} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  How to Host React Movie Website for Free on Netlify in Hindi #10
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
     
        </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className='couses_Cards'>
        <div className='row gy-4'>
        <div className='col-lg-3'>
         <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
         <div className='courses_CardsDiv'>
                
                <div className='couses_CardsImg'>
              
                      <img src={th1} alt='' className='w-100' />
                 
                  </div>
                  <div className="courses_CardsContent pt-4">
                    <p className='fw-800'>
                    Styled Component in React in Hindi #1: Introduction to Styled Component & How to use it in React JS
                    </p>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                    <p>$45.00</p>
                    <div>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    </div>
                  
                  </div>
                </div>
         </a>
            
        
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th2} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  VS Code Extension for HTML Class Names & IDs Auto Suggestion in CSS File 🔥
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$50.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th3} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  VS Code Extension for HTML Class Names & IDs Auto Suggestion in CSS File 🔥
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th4} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  🔥VS Code Top 10 Shortcuts To Increase Productivity in 2022
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
        </div>
    </div>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className='couses_Cards'>
        <div className='row gy-4'>
        <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th5} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  The Missing Video of Movie Website in React JS in Hindi || Single Movie Page Rendering
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th6} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  🔥 Create Google Chrome Extensions using JavaScript from Scratch in 2022
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th7} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  THAPA TECHNICAL CODEFEST || For Programmers || Participate for Free & Win Prizes                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
            <div className='col-lg-3'>
            <a href='https://www.youtube.com/watch?v=-9ZPBAcjmh4' target="_blank">
              <div className='courses_CardsDiv'>
              <div className='couses_CardsImg'>
                    <img src={th8} alt='' className='w-100' />
                </div>
                <div className="courses_CardsContent pt-4">
                  <p className='fw-800'>
                  How to Host React Movie Website for Free on Netlify in Hindi #10
                  </p>
                  <hr></hr>
                  <div className='d-flex justify-content-between'>
                  <p>$45.00</p>
                  <div>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  </div>
                
                </div>
              </div>
               </a>
            </div>
        </div>
    </div>
  </div>


</div>
    </div>
  </section>
  )
}

export default Courses