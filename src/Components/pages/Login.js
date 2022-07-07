import React from 'react'
import "./css/login.css"


export default function Login() {
  var pathname = window.location.pathname;
  pathname = pathname.substring(1);
  if(pathname==="login"){
    document.title="TSHOP - LOGIN";
  }

  return (
    
    <div>Login
    
    </div>
  )
}
