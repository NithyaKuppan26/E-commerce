import React from 'react'
import './Signin.css'
function Signin() {
  return (
    <div className='background'>
        <div id="bg">
            <div id="login">
                <input className='inp1' type="text" size="50" placeholder="Email address or phone number" /><br></br><br></br>
                <input className='inp2' type="password" size="50" placeholder="Password" /><br></br><br></br>
                <button id="loginbutton" type="submit" >Log in</button><br></br>
                <a href="https://gmail.com" target="_blank">Forgotten password?</a><br></br>
                <hr></hr>
                <button id="buttontype" type="submit">Create new account</button>
            </div>
           
        </div>
    </div>
  )
}

export default Signin