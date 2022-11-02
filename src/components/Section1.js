import React from "react";

const Section1 = () => {
  return (
    <>
      <div className="container-fluid my-1">
        <div className="sec1 d-flex m-auto my-5">
          <div className="left1 mt-5 ">
            <h4 id="h4">Your Complete Website Design Solution</h4>
            <p style={{ color: "4a5568" }}>
              Design and simplicity are at the core of our website builder.
              Easily create, customize, and promote a stunning website that's
              search engine ready all on your own with the power of Mailchimp’s
              platform.
            </p>
            <button
              type="button"
              style={{
                backgroundColor: "#6415ff",
                width: "200px",
                height: "50px",
              }}
              className="btn  my-4 text-light rounded-5"
            >
              GO WITH US
            </button>

            <p style={{ color: "4a5568", fontSize: "16px" }}>
              {" "}
              > Available in 7 Locations
            </p>
            <p style={{ color: "4a5568", fontSize: "16px" }}>
              {" "}
              > Premium Internet Backbone
            </p>
          </div>
          <div className="right">
            <div className="boxonimg">
              <p>
                We help you establish your brand, look like a pro, and rise the
                ranks of search engines using our easy-to-use website builder.
              
              </p>
              <h6>@Tarun Rao</h6>
            </div>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              width="400px"
              id="rightimg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container2 ">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-light  "  id="bgs">
    <div className="col-md-8 p-lg-12 mx-auto my-5">
      <h1 className="display-4 fw-bolder">OVER 90+ PROJECTS COMPLETED</h1>
      <p className="lead fw-normal">Grow and engage a bigger, higher quality customer base with intelligent tools that speak to an interested audience when they’re most willing to listen.</p>
     <div className="flexsec1 d-flex justify-content-center p-3 "> 
     <h1 className="px-2">150+ <br />
     Clients</h1>
     <h1 className="px-4">90+ <br />
     Projects</h1>
     <h1 className="px-2">50+ <br />
     Employes</h1>
     
     </div>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
      </div>
    </>
  );
};

export default Section1;
