import React from 'react'
import "../Css/advertisehome.css"
import ad1 from "../Images/adhome1.jpg"
import ad22 from "../Images/adhome2.jpg"
import {Link } from "react-router-dom";
export default function Advertisehome() {
  return (
    <div className='container adbodyhome'> 
    <div className=' d-flex justify-content-between w-100  mt-3'>
    <div className='me-1 ms-1'>
    <Link to="url"><img src={ad1} alt="Grab the deal of 50%"/></Link>
    </div>

    <div className='me-1 ms-1'>
    <Link to="/url"><img src={ad22} alt="Grab the deal of 10%"/></Link>
    </div>
    </div>
    
    
    </div>
  )
}
