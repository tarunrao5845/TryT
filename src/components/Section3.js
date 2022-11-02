import React from 'react'

const Section3 = () => {
  return (
    <>
      <div className="container">
      <div className="topsec2 justify-content-center text-center">
          <h6 style={{ color: "#6415ff" }}>EXPERTS</h6>
          <h1 style={{ fontSize: "58px" }} className="fw-bolder">
            OUR <span style={{ color: "#6415ff" }}>EXPERTIES</span>
          </h1>
          <p>
          Promote your site and build an audience with our all-in-one platform
          </p>
        </div>
        <div className="d-flex" id='sec3box'>
            <div className="leftbox mx-auto">
             <h5 id='sec3h' style={{ color: "#243e63" }} className="fw-bolder">Websites built by and for <span  style={{ color: "#6415ff" }}>Professionals</span> </h5>
            <div className="d-flex my-5 text-start">
                <div className="1">
                <h3>Professionalism</h3><br />
                <p className='fst-normal'>Lorem ipsum dolor sit amet  libero ut officia obcaecati rerum enim ducimus ab soluta illo similique.</p>
            </div>
            <div className="2">
            <h3>Affordable</h3><br />
                <p>Lorem ipsum dolor sit amet consectetur cati rerum enim ducimus ab soluta illo similique.</p>
           
            </div>
                </div>
                <button
              type="button"
              style={{
                backgroundColor: "#6415ff",
                width: "200px",
                height: "50px",
              }}
              className="btn  my-3 text-light rounded-5"
            >
            Learn More ->
            </button>
            </div>
            <div className="rightbox">
                <img src="https://treact.owaiskhan.me/static/media/team-illustration-2.76aa0427e037826d4453f8791ee544e3.svg" 
                width="650px"
                height="550px"
                alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Section3
