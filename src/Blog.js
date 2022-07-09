import React from 'react'
import b112 from "../src/Images/b112.jpeg";
import b113 from "../src/Images/b113.jpeg";
import b114 from "../src/Images/b114.jpg";
import b115 from "../src/Images/b115.jpg";
import BlogData from './BlogData';

function Blog() {
  return (
    <section className="position-relative blogSection pb-100" id='blogs'>
    <div className="container">
      <h1 className="fw-800">Recent Blogs</h1>
      <div className="blog__Cards mt-5">
        <BlogData image={b112} title="Introduction to Javascript for the Beginners" subtitle="Business" link="Read More" time="06 Nov, 2022"/>
        <BlogData image={b113} title="Partiality on or continuing particular principles as. " subtitle="Best Practices" time="10 Sept, 2022"/>
        <BlogData image={b114} title="Village did removed enjoyed explain. " subtitle="Best Practices" time="24 Oct, 2022"/>
        <BlogData image={b115} title="Wise busy past both park when an ye no. Nay likely her length." subtitle="Best Practices" time="02 Nov, 2021"/>


      </div>
    </div>
  </section>
  )
}

export default Blog