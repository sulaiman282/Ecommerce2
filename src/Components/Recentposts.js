import React from 'react'
import "../Css/recentposts.css"
import bmw1 from "../Images/bmw.jpg"


import {Link } from "react-router-dom";

export default function Recentposts(props) {
  return (
    <div className='container recentpost'>
    <div className='row mt-4'>

    <div className='col-sm-12 col-md-4 col-lg-4'>
    <div className='row d-flex justify-content-center w-100'>
    <img src={bmw1} alt="YOYO"></img>
    <Link to='/'><h5 className='fw-bold' style={{color:props.mode==='dark'?'black':'white'}}>Lionel Messi</h5></Link>
    
    <span className='recentpost2'style={{color:props.mode==='dark'?'black':'white'}}>Messi started playing football as a boy and in 1995 joined the youth team of Newell’s Old Boys (a Rosario-based top-division football club).</span>
    <span className='datetext mt-2'style={{color:props.mode==='dark'?'black':'white'}}>Posted by TShop<br/> 11th July 2022</span>
    <Link to='/' className='pt-3'>READ MORE</Link>
    </div>
    </div>
    
    <div className='col-sm-12 col-md-4 col-lg-4'>
    <div className='row d-flex justify-content-center w-100'>
    <img src={bmw1} alt="YOYO"></img>
    <Link to='/'><h5 className='fw-bold' style={{color:props.mode==='dark'?'black':'white'}}>Lionel Messi</h5></Link>
    
    <span className='recentpost2'style={{color:props.mode==='dark'?'black':'white'}}>Messi started playing football as a boy and in 1995 joined the youth team of Newell’s Old Boys (a Rosario-based top-division football club).</span>
    <span className='datetext mt-2'style={{color:props.mode==='dark'?'black':'white'}}>Posted by TShop<br/> 11th July 2022</span>
    <Link to='/' className='pt-3'>READ MORE</Link>
    </div>
    </div>
    <div className='col-sm-12 col-md-4 col-lg-4'>
    <div className='row d-flex justify-content-center w-100'>
    <img src={bmw1} alt="YOYO"></img>
    <Link to='/'><h5 className='fw-bold' style={{color:props.mode==='dark'?'black':'white'}}>Lionel Messi</h5></Link>
    
    <span className='recentpost2'style={{color:props.mode==='dark'?'black':'white'}}>Messi started playing football as a boy and in 1995 joined the youth team of Newell’s Old Boys (a Rosario-based top-division football club).</span>
    <span className='datetext mt-2'style={{color:props.mode==='dark'?'black':'white'}}>Posted by TShop<br/> 11th July 2022</span>
    <Link to='/' className='pt-3'>READ MORE</Link>
    </div>
    </div>
    
    
    
    </div>
    
   </div>
  )
}
