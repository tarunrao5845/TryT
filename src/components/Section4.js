import React from 'react'

const Section4 = () => {
  return (
    <>
    <div className="container my-5 py-5">
       <div className="topsec2 justify-content-center text-center">
          <h6 style={{ color: "#6415ff" }}>PRICING</h6>
          <h1 style={{ fontSize: "58px" }} className="fw-bolder">
            FLEXIBLE <span style={{ color: "#6415ff" }}>PLANS</span>
          </h1>
          <p>
          Promote your site and build an audience with our all-in-one platform
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-4 mb-3 text-center justify-content-center">
  <div className="col">
    <div className="card mb-4  shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">Free</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          $0<small className="text-muted fw-light">/mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-5">
          <li>30 TEMPLATES</li>
          <li>7 LANDING PAGES</li>
          <li>12 INTERNAL PAGES</li>
          <li>BASIC ASSISTANCE</li>
          <li>EMAIL SUPPORT</li>
          <li>HELP CENTER ACCESS</li>
        </ul>
        <button type="button" className="w-100 btn btn-lg btn-outline-secondary">
          Sign up for free
        </button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">Pro</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          $55<small className="text-muted fw-light">/mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>60 TEMPLATES</li>
          <li>8 LANDING PAGES</li>
          <li>22 INTERNAL PAGES</li>
          <li>PRIORITY ASSISTANCE</li>
          <li>LIFETIME UPDATES</li>
          <li>PROFESSIONAL EMAIL</li>
          <li>Help center access</li>
        </ul>
        <button type="button" style={{backgroundColor:"#6415ff"}} className="w-100 btn text-light btn-lg">
          Get started
        </button>
      </div>
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default Section4
