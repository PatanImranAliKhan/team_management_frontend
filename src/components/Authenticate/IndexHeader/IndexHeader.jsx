import React from "react";
import { Link } from 'react-router-dom';
import './indexheader.css'

export default function IndexHeader() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav ml-auto">
                <li>
                  <Link className="btn login" to="/login"><b>Login</b></Link>
                </li>
                <li>
                  <Link className="btn register" to="/signup"><b>Signup</b></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </div>
  );
}
