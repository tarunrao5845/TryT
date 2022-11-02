import React,{useState } from 'react'
import axios from 'axios'

const Signin = () => {
  const[email , setEmail]=useState()
  const[pass , setPass]=useState()
 const handlesubmit=(e)=>{
     e.preventDefault();
     axios.post(`https://636104f4af66cc87dc208deb.mockapi.io/SIGNIN`,
     {
      email:email,
      password:pass
     })
alert("Signin Success")
  }
  return (
    <>
    <div className="d-flex justify-content-center m-auto" style={{backgroundColor:"#3c0d99" , height:"100vh"}}>
    <main style={{width:"500px"}} className="form-signin bg-light p-3 text-center m-auto rounded-2">
     
<img src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg"
width="50px"
height="50px"

alt="" />
<h2 style={{fontSize:"24px"}} className='fw-bold my-2'>Sign In</h2>

<form>
  <div className="form-floating">
    <input
      type="email"
      className="form-control"
      id="floatingInput"
      placeholder="name@example.com"
      onChange={(e)=>setEmail(e.target.value)}
    />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating mt-1">
    <input
      type="password"
      className="form-control"
      id="floatingPassword"
      placeholder="Password"
      onChange={(e)=>setPass(e.target.value)}
    />
    <label htmlFor="floatingPassword">Password</label>
  </div>
  <div className="checkbox mt-2 ">
   <a  href="/">Forget Password</a>
  </div>
  <button onClick={handlesubmit} style={{ backgroundColor: "#6415ff" }} className="w-100 btn btn-lg text-light mt-3" type="submit">
    Sign In
  </button>
  </form>
</main>

    </div>


    </>
  )
}

export default Signin
