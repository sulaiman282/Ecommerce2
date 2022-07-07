import React from 'react'
import "../Assets/seemore.css"

export default function Seemore(props) {
  return (
    <div className='container w-100 d-flex justify-content-center mt-4 mb-3'> <a class="linkseemore" style={{color:props.mode==='dark'?'black':'white'}} href={props.turl}>
    SEE MORE  
</a></div>
  )
}
