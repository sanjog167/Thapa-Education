import { Margin } from '@mui/icons-material';
import React from 'react'
import arrowright from "../src/Images/arrowright.png";

function BlogData({image,title,link,subtitle,time}) {
  return (
    <div className='blogCard elementHover'>
        <div className='blogCard__content p-3'>
        <p>{subtitle}</p>
        <h4 className='mt-2 mb-5 w-300 fs-26 fw-800 h-100'>{title}</h4>
        <p className='color-gray mb-3'><i className='fa fa-calendar'></i> {time}</p>
        {
          link ? <a className='d-flex'>  {link} <img src={arrowright} alt='' className='ms-2 object-fit-contain'/></a>  : ''  
    }
        </div>
        <div className='blogCard__image'>
            <img src={image} alt="" className='w-100'/>
           </div>

    </div>
  )
}

export default BlogData