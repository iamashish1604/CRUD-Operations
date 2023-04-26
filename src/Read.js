import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Read() {
    const [data, setData] = useState([]);

    function getData(){
        axios.get("https://644655d40431e885f00f2b20.mockapi.io/crud-operations")
        .then((res)=> { setData(res.data)})
    }

    useEffect( () => {
        getData();
    },[])

    const handleDelete = (id) => {
        axios.delete(`https://644655d40431e885f00f2b20.mockapi.io/crud-operations/${id}`)
        .then( () => {
            getData();
        })
    }
    
    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

  return (
    <div >
        <h2>Read Operation</h2>
        <table className="table table-hover table-bordered ">
            <thead class="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            {
                data.map((item) => {
                    return(
                        <>
                            <tbody   >
                                <tr >
                                    <th>{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to = "/update" >
                                           <button className="btn btn-outline-success btn-lg" onClick = { () => setToLocalStorage(item.id, item.name, item.email) } >Edit</button>
                                        </Link>
                                    </td>
                                    <td><button className="btn btn-outline-danger btn-lg" onClick = { () =>  handleDelete(item.id)  } >Delete</button></td>
                                </tr>
                            </tbody>
                        </>
                    )
                })
            }
        </table>
        <Link to = "/">
            <button className="btn btn-outline-primary btn-lg">Back</button>
        </Link>
        
    </div>
  )
}
