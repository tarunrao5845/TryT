import React , {useState} from 'react'
import axios from 'axios'
import { NavLink }  from 'react-router-dom';


const Adduser = () => {
    const[name , setName] = useState("")
    const[email , setEmail] = useState("")
    const handlesubmit=(e)=>{
e.preventDefault()
axios.post('https://636104f4af66cc87dc208deb.mockapi.io/CurdOp' , {
    name: name,
    email: email,
    
});
alert("Data Saved -- click to Back")
    };

  return (
    <>
    <form className='w-50 m-auto my-5'>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setEmail(e.target.value)}

    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="d-flex">
  <button onClick={handlesubmit} type="submit" className="btn btn-primary">
    Add Data
  </button>
  <NavLink  to="/CurdOp" type="back" className="btn btn-outline-secondary mx-2">
    Back
  </NavLink>
  </div>
</form>

    </>
  )
}

export default Adduser
