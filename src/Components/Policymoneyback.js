import React from 'react'
import "../Css/policymoneyback.css"
import service from "../Images/logo/service.png"
import gift from "../Images/logo/gift.png"
import moneyback from "../Images/logo/moneyback.png"
import truck from "../Images/logo/truck.png"


export default function Policymoneyback() {
  return (
    <div className='container policymainbody'>
    <div className='row m-3'>

    <div className=' col-lg-3 col-md-3 col-sm-6 col-6'>
    <div className='d-flex justify-content-center'>
    <img src={service} alt=""></img>
    </div>
    <div className='d-flex justify-content-center mt-3'>
    <h6 className='fw-bold'>24 X 7 Free Support</h6>
    </div>
    <div className='d-flex justify-content-center'>
    <p>Online Support 24/7</p>
    </div>
    </div>

    <div className='col-lg-3 col-md-3 col-sm-6 col-6' >
    <div className='d-flex justify-content-center'>
    <img src={moneyback} alt=""></img>
    </div>
    <div className='d-flex justify-content-center mt-3'>
    <h6 className='fw-bold'>Money Back Guarantee</h6>
    </div>
    <div className='d-flex justify-content-center'>
    <p>100% Secure Payment</p>
    </div>
    </div>


    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
    <div className='d-flex justify-content-center'>
    <img src={gift} alt=""></img>
    </div>
    <div className='d-flex justify-content-center mt-3'>
    <h6 className='fw-bold'>Special Gift Cards </h6>
    </div>
    <div className='d-flex justify-content-center'>
    <p>Give The Perfect Gift    </p>
    </div>
    </div>


    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
    <div className='d-flex justify-content-center'>
    <img src={truck} alt=""></img>
    </div>
    <div className='d-flex justify-content-center mt-3'>
    <h6 className='fw-bold'>Wordworld Shipping
    </h6>
    </div>
    <div className='d-flex justify-content-center'>
    <p>On Order Over $99 </p>
    </div>
    </div>


    
    
    </div>
    </div>
  )
}
