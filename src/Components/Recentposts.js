import React from 'react'
import "../Css/recentposts.css"
import bmw1 from "../Images/bmw.jpg"
export default function Recentposts(props) {
  return (
    <div className='container recentpost'>
    <div className='row mt-4'>

    <div className='col-4'>
    <div className='row d-flex justify-content-center w-100'>
    <img src={bmw1} alt="YOYO"></img>
    <a href='/'><h5 style={{color:props.mode==='dark'?'black':'white'}}>Sed Suscipit Feugiat Felis Ac Placerat</h5></a>
    
    <span className='recentpost2'style={{color:props.mode==='dark'?'black':'white'}}>Donec efficitur ac leo ornare sodales. Aliquam eget neque aliquam, pretium arc</span>
    <span className='datetext' style={{color:props.mode==='dark'?'black':'white'}}>Posted by TShop on 11th July 2022</span>
    <a href='/' className='pt-3'>READ MORE</a>
    </div>
    </div>
    
    <div className='col-4'>
    <div className='row d-flex justify-content-center w-100'>
    <img src={bmw1} alt="YOYO"></img>
    <a href='/'><h5 style={{color:props.mode==='dark'?'black':'white'}}>Sed Suscipit Feugiat Felis Ac Placerat</h5></a>
    
    <span className='recentpost2'style={{color:props.mode==='dark'?'black':'white'}}>Donec efficitur ac leo ornare sodales. Aliquam eget neque aliquam, pretium arc</span>
    <span className='datetext'style={{color:props.mode==='dark'?'black':'white'}}>Posted by TShop on 11th July 2022</span>
    <a href='/' className='pt-3'>READ MORE</a>
    </div>
    </div>
    <div className='col-4'>
    <div className='row d-flex justify-content-center w-100'>
    <img src={bmw1} alt="YOYO"></img>
    <a href='/'><h5 style={{color:props.mode==='dark'?'black':'white'}}>Sed Suscipit Feugiat Felis Ac Placerat</h5></a>
    
    <span className='recentpost2' style={{color:props.mode==='dark'?'black':'white'}}>Donec efficitur ac leo ornare sodales. Aliquam eget neque aliquam, pretium arc</span>
    <span className='datetext' style={{color:props.mode==='dark'?'black':'white'}}>Posted by TShop on 11th July 2022</span>
    <a href='/' className='pt-3'>READ MORE</a>
    </div>
    </div>
    
    
    
    </div>
    
   </div>
  )
}
