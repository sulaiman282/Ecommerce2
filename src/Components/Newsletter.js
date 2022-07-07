import React from 'react'
import "../Css/newsletter.css";



export default function Newsletter() {
  return (

    <div className='container newsletterbc d-flex justify-content-between w-100'>
    
    <div className='d-flex h-100 align-self-center news1'>
    <div className='d-flex align-self-center'>
    <i className="fa-solid fa-3x ps-4 fa-envelope"></i>
    </div>

    <div className='ps-5 mt-3 align-self-center flex-wrap '>
    <div >  <h6 className='fw-bold text-light'>SIGN UP FOR OUR NEWSLETTER</h6></div>
  <div>  <p className='h6'>Get Our Update On New Arrivals And Discount</p></div>
  
    </div>
    </div>




    <div className='d-flex align-self-center subscriber-button'>
    <input type="email" name="myInput" placeholder="your@email.com" size="30" required></input>
    <button type="button" name="myButton">
	Subscribe!
</button>
    </div>




    </div>
  )
}
