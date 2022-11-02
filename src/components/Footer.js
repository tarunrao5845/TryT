import React from 'react'

const Footer = () => {
  return (
    <>

      <footer style={{backgroundColor:"#edf2f7"}} className="py-5  px-5">
  <div className="row">
    <div className="col-6 col-md-2 mb-3">
      <h5>Main</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            Blog
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            FAQs
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            Support
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            About
          </a>
        </li>
      </ul>
    </div>
    <div className="col-6 col-md-2 mb-3">
      <h5>Products</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            Login
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            Personal
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            Business
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            Team
          </a>
        </li>
      </ul>
    </div>
    <div className="col-6 col-md-2 mb-3">
      <h5>Legal</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            GDPR
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            Privacy Policy
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            Tearms And Conditions
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link p-0 text-muted">
            Disclaimer
          </a>
        </li>
      </ul>
    </div>
    <div className="col-md-5 offset-md-1 mb-3">
      <form>
        <h5>Subscribe</h5>
        <p>Monthly digest of what's new and exciting from us.</p>
        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
          <label htmlFor="newsletter1" className="visually-hidden">
            Email address
          </label>
          <input
            id="newsletter1"
            type="text"
            className="form-control"
            placeholder="Email address"
          />
          <button style={{backgroundColor:"#6415ff"}} className="btn text-light " type="button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
  <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
    <p >             <img
              src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg"
              height="60px"
              width="70px"
              alt=""
            />© 2022 Company, Inc. All rights reserved.</p>
  </div>
</footer>
    

    </>
  )
}

export default Footer
