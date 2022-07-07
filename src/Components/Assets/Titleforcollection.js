import React from 'react'

export default function Titleforcollection(props) {
  var abc=parseInt(props.ctimer,10);
 return (
  
   <div className="container d-flex justify-content-between mt-5 mb-3"> 
   <h5 className='fw-bold' style={{color:props.mode==='dark'?'black':'white'}}><span className='text-danger'>{props.firstletter}</span>{props.title}</h5>
  
   </div>
 )


}