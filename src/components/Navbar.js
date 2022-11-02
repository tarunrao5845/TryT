import React from "react";
import { NavLink }  from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 ">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img
              src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg"
              height="40px"
              width="50px"
              alt=""
            />
            <h2 style={{ color: "#6415ff" }}>TryT</h2>
          </a>
          <ul className="nav col-12 col-md-auto mb-3 justify-content-center mb-md-0 fw-semibold" id="bb">
            <li>
              
<NavLink exact className="nav-link px-4 link-dark" id="bb1" to ='/'>About</NavLink>
              {/* <a href="#" className="nav-link px-4 link-dark" id="bb1">
               About
              </a> */}
            </li>
            <li>
                <NavLink className="nav-link px-4 link-dark" id="bb2" to="/Blogs">Blogs</NavLink> 
            </li>
            <li>
              <a href="/" className="nav-link px-4 link-dark" id="bb3">
                Pricing
              </a>
            </li>
            <li>
              <NavLink to="/CurdOp" className="nav-link px-4 link-dark" id="bb4">
                CurdOp
              </NavLink>
            </li>
            <li>
            <NavLink className="nav-link px-4 link-dark" id="bb5"  to='/TextU'>TextU</NavLink>

              {/* <a href="#" className="nav-link px-4 link-dark" id="bb5">
               TextU
              </a> */}
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <NavLink
            to="/Signin"
            type="button" className="btn  me-2">
              Login
            </NavLink>
            <NavLink
            to="/Signin"
              type="button"
              style={{ backgroundColor: "#6415ff" }}
              className="btn  rounded-5 m-auto text-light px-3 "
            >
              Sign-up
            </NavLink>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
