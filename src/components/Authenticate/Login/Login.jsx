import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/team_work.png';

export default function Login() {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  }


  return (
    <div className='loginsection'>
      <div className='container'>
        <div className='loginview'>
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
              <div className='login_right'>
                <div align="center">
                  <h3 >Login</h3>
                  <div className='logo'>
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                </div>
                <div className=''>
                  <form>
                    <div className='form-group'>
                      <input type="text" className='form-control' placeholder='Email or Username' value={username} onChange={(e) => { setusername(e.target.value) }} required />
                    </div>
                    <div className='form-group' id="show_hide_password">
                      <input type="password" className='form-control' placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} required />

                    </div>
                    <div className='loginbtn' align="center">
                      <button className='btn btn-primary login-button' onClick={(e) => { loginHandler(e) }}>Login</button>
                    </div>
                  </form>
                </div>
                <div className='d-flex justify-content-between'>
                  <div >
                    <Link to="#">Forgot password</Link>
                  </div>
                  <div >
                    <span><Link to="/signup">register</Link></span>
                  </div>
                </div>
                <div className='social-logins'>
                  <h5 align="center">— Or Login In With —</h5>
                  <div>
                    <div className='social-all-btn d-flex justify-content-between'>
                      <div className='col-sm-4 google' align="center">
                        <button className='google-login'><i className="fa fa-google" aria-hidden="true"></i> Google</button>
                      </div>
                      <div className='col-sm-4 facebook' align="center">
                        <button className='facebook-login'><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</button>
                      </div>
                      <div className='col-sm-4 twitter' align="center">
                        <button className='twitter-login'><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</button>
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
