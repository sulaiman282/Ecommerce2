import React from 'react'
import "./css/contactus.css"



export default function Contactus() {
  return (
    <div className='container d-flex justify-content-center contactbodymain mt-4'>
    <form action="#" class="contact-form mt-5 mb-5">
      <h5 class="title text-light fw-bold">Contact us</h5>
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send"/>
      </div>
    </form>
    </div>
  )
}
