import React from 'react'
import "./css/login.css"


export default function Login() {
  var pathname = window.location.pathname;
  pathname = pathname.substring(1);
  if(pathname==="login"){
    document.title="TSHOP - LOGIN";
  }

  return (
    <div className='container'>
    <div className='loginbody'>
    <div class="mainlogin">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" className='labellogin' aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" id="psw" name="psw" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
          <span className='signupwith d-flex justify-content-center text-light'>or with :<a href="url"><i class="fa-brands fa-facebook"></i></a><a href="url"><i class="fa-brands fa-google-plus-square"></i></a><a href="url"><i class="fa-brands fa-twitter"></i></a> </span>
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label className='labellogin' for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
          <span className='loginwith d-flex justify-content-center text-dark'>or with :<a href="url"><i class="fa-brands fa-facebook"></i></a><a href="url"><i class="fa-brands fa-google-plus-square"></i></a><a href="url"><i class="fa-brands fa-twitter"></i></a> </span>
					<button>Login</button>
				</form>
			</div>
	</div>
    </div>
    
    </div>
  
  )
}
