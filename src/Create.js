import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../index.css"
export default function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://644655d40431e885f00f2b20.mockapi.io/crud-operations",{name : name , email: email})
        .then(()=> {
           history("/read"); 
        })
    }
 
  return (
    <div className="create-container" >
        <h2 >Create</h2>
        <Link to = '/read' >
            <button className="btn btn-outline-primary btn-lg ">Show Data</button>
        </Link>
        
        <form>
            <div className="mb-3">
                <label>Name : </label>
                <input type="text" className="form-control" onChange = { (e) => setName(e.target.value) } />
            </div>
            <div className="mb-3">
                <label>Email : </label>
                <input type="email" className="form-control" onChange = { (e) => setEmail(e.target.value) } />
            </div>
            <button type="submit" className="btn btn-outline-primary btn-lg" onClick={ handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
