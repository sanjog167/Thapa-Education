import React from 'react'
import b1 from "../src/Images/b1.png";
import b2 from "../src/Images/b2.png";
import b3 from "../src/Images/b3.png";
import b4 from "../src/Images/b4.png";
import BlogData from './BlogData';

function Blog() {
  return (
    <section className="position-relative blogSection pb-100" id='blogs'>
    <div className="container">
      <h1 className="fw-800">Recent Blogs</h1>
      <div className="blog__Cards mt-5">
        <BlogData image={b1} title="Introduction to Javascript for the Beginners" subtitle="Business" link="Read More" time="06 Nov, 2022"/>
        <BlogData image={b2} title="Partiality on or continuing particular principles as. " subtitle="Best Practices" time="10 Sept, 2022"/>
        <BlogData image={b3} title="Village did removed enjoyed explain. " subtitle="Best Practices" time="24 Oct, 2022"/>
        <BlogData image={b4} title="Wise busy past both park when an ye no. Nay likely her length." subtitle="Best Practices" time="02 Nov, 2021"/>


      </div>
    </div>
  </section>
  )
}

export default Blog