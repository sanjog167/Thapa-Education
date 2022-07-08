import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


function StatsData({title,image,description}) {
  return (
    <div className='col-lg-4 mb-2'>
    <div className={'stats_1'}>
        <h1 className='fs-78'><CountUp end={title}   duration={2.75}> {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}</CountUp>
+</h1>
        <div className='d-flex align-items-center'>
        <img src={image} alt='' className='w-20 mt-3' /><h4 className='mt-3 ms-2 fs-sm-22'>{description}</h4>

        </div>
    </div>
</div>
  )
}

export default StatsData