import React, { useState, useEffect } from "react";
import axios from 'axios'

const Blogs = () => {
 
  const[text , setText] = useState([])

 async function getData(){
  const res = await axios.get(`https://636104f4af66cc87dc208deb.mockapi.io/NewsAPI`)
setText(res.data)
}

useEffect(()=>{
  getData()
})

  return (
    <>
      <div className="container">
        <div className="topsec2 justify-content-center text-center">
          <h6 style={{ color: "#6415ff" }}>BLOG</h6>
          <h1 style={{ fontSize: "58px" }} className="fw-bolder">
            WE LOVE <span style={{ color: "#6415ff" }}>WRITING</span>
          </h1>
          <p>
            Promote your site and build an audience with our all-in-one platform
          </p>
        </div>
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {
      text.map((text2) => {
          return (
            <>
              <div className=" album py-4 bg-light">
                <div className="container">
                    <div className="col">
                      <div className="card shadow-sm " style={{width:"330px" , height:"400px"}}>
                        <img src={text2.urlToImage}
                        height="250px"
                        alt="" />

                        <div className="card-body">
                          <p className="card-text">
                            {text2.title}
                            </p>
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                style={{ backgroundColor: "#6415ff" }}
                                className="btn btn-sm text-light"
                              > 
                              <a style={{textDecoration:"none" , color:"white"}} href={text2.url}>READ MORE.</a>
                                
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </div>
            </>
          );
        })}
</div>
      </div>
    </>
  );
};

export default Blogs;
