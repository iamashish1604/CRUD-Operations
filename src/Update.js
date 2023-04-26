import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Update() {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 

    const navigate = useNavigate();

    useEffect( () => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])

    const  handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://644655d40431e885f00f2b20.mockapi.io/crud-operations/${id}`,{name: name, email: email})
        .then( () => {
            navigate("/read")
        })
  }
  return (
    <div>
    <h2>Update</h2>
    <form>
        <div className="mb-3">
            <label>Name : </label>
            <input type="text" value={name} className="form-control" onChange = { (e) => setName(e.target.value) } />
        </div>
        <div className="mb-3">
            <label>Email : </label>
            <input type="email" value={email} className="form-control" onChange = { (e) => setEmail(e.target.value) } />
        </div>
        <div>
            <button type="submit" className="btn btn-outline-primary btn-lg me-md-2" onClick={ handleUpdate}>Update</button>
            <Link to = "/read">
                <button className="btn btn-outline-primary btn-lg ">Back</button>
            </Link>
        </div>
        
    </form>
</div>
  )
}
