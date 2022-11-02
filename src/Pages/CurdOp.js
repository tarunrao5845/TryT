import React, { useState, useEffect } from "react";
import { NavLink }  from 'react-router-dom';

import axios from "axios";

const CurdOp = () => {
  const [text, setText] = useState([]);


 
async function DATA(){
    const response = await axios.get(`https://636104f4af66cc87dc208deb.mockapi.io/CurdOp`)
    setText(response.data)
}

function handeldelete(id){
    axios.delete(`https://636104f4af66cc87dc208deb.mockapi.io/CurdOp/${id}`).then(()=>{
        DATA()
    })
}

useEffect(()=>{
    DATA()
},[])

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>

          {text.map((text3 , index) => (
            <>
              <tbody>
                <tr>
                  <th scope="row">{index+1}</th>
                  
                  <td>{text3.id}</td>
                  <td>{text3.name}</td>
                  <td>{text3.email}</td>
                  <td>
                    <button onClick={()=>handeldelete(text3.id)} className="btn btn-danger">DELETE</button>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
        <div className="d-flex justify-content-center my-5">
            <NavLink to="/Adduser" className="btn btn-success">ADD USER </NavLink>
        </div>
      </div>
    </>
  );
};

export default CurdOp;
