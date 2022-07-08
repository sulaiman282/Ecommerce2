import React from 'react'
import "../Assets/seemore.css"
import {Link } from "react-router-dom";
export default function Seemore(props) {
  return (
    <div className='container w-100 d-flex justify-content-center mt-4 mb-3'> <Link class="linkseemore" style={{color:props.mode==='dark'?'black':'white'}} to={props.turl}>
    SEE MORE  
</Link></div>
  )
}
