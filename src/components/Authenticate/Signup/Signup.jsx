import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/team_work.png';

export default function Signup() {

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");

  const SignupHandler = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(email);
    console.log(mobile);
  }


  return (
    <div className='signupsection'>
      <div className='container'>
        <div className='signupview'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='left'>
                <div className='leftcontent'>
                  <div className='left_logo' align="center">
                    <div className='image_'>
                      <img src={Logo} alt="" />
                    </div>
                  </div>
                  <div>
                    <h1 align="center">Team Management</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='signup_right'>
                <div align="center">
                  <h3 >Signup</h3>
                  <div className='logo'>
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                </div>
                <div className=''>
                  <form>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e) => { setusername(e.target.value) }} required />
                    </div>
                    <div className='form-group' id="show_hide_password">
                      <input type="email" className='form-control' placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value) }} required />
                    </div>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='Mobile Number' value={mobile} onChange={(e) => { setmobile(e.target.value) }} required />
                    </div>
                    <div className='form-group' id="show_hide_password">
                      <input type="password" className='form-control' placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                    </div>
                    <div className='signupbtn' align="center">
                      <button className='btn btn-primary signup-button' onClick={(e) => { SignupHandler(e) }}>signup</button>
                    </div>
                  </form>
                </div>
                <div>
                  <span>Already have an Account: <Link to="/login">Login</Link></span>
                </div>
                <div className='social-signups'>
                  <h5 align="center">— Or Signup In With —</h5>
                  <div>
                    <div className='social-all-btn d-flex justify-content-between'>
                      <div className='col-sm-4 google' align="center">
                        <button className='google-signup'><i className="fa fa-google" aria-hidden="true"></i> Google</button>
                      </div>
                      <div className='col-sm-4 facebook' align="center">
                        <button className='facebook-signup'><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</button>
                      </div>
                      <div className='col-sm-4 twitter' align="center">
                        <button className='twitter-signup'><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
