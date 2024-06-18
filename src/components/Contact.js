import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
function Contact() {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yuutxfh', 'template_8i4viyp', form.current, {
        publicKey: 'mmomv_h0ZsdNELVTN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
  };
  return (
    <section>
      <div className='container'>
        <h2 className='contact'>Contact Us</h2>
        <form ref={form} onSubmit={()=>sendEmail()} className='formControl'>
        
          <input type='text' placeholder='Full Name' name='user_name' required/>
          <input type='email' placeholder='Email' name='user_email' required/>
          <input type='text' placeholder='Subject' name='subject' required/>
          <textarea name='message' placeholder='Message' cols={30} rows={10}></textarea>
          <button type='submit' className='subbtm'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact