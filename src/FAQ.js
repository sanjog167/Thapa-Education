import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import blackbox from "../src/Images/blackbox.png";
import Button from '@mui/material/Button';

export default function SimpleAccordion() {
  return (
    <section className="faqSection position-relative">
    <div className="container">
      <h1 className="fw-800 w-530">Fequently <br></br>
asked questions</h1>
<div className='row mt-5'>
    <div className='col-lg-8'>
    <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Am I eligible for admission?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is There Any One To One Support System?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How to Change my Plan using PayPal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How do I redeem a coupon?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is There Any Prerequisites To Learn Python?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <div className='col-lg-4'>
        <div className='faqMail'>
            <img src={blackbox} alt=""/>
            <h5 className='fw-800 mt-4 text-center'>Do you have more questions?</h5>
            <p className='mt-4 text-center'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
            <Button variant="contained" >Shoot a Direct Mail</Button>
        </div>
    </div>
</div>
   
</div>
</section>
  )
}
