import React, { useEffect,useState } from 'react'
import {NavLink} from 'react-router-dom'
// import '../css/style.css'

const Testapi = () => {
    const [data,Setdata] = useState([])

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((response)=>{
                Setdata(response);
            })
        })
    },[])
    console.log(data);

return(
  <div className='looping-post'>
    <h2>testing..</h2>
    {
        data.map((item)=>
        <NavLink to={`singlepost/${item.id}`} style={{textDecoration: "none"}}>
        <div className="row border">
            <div className="col-md-12">
                <h3>{item.id}</h3>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <NavLink to={`singlepost/${item.id}`}>Read More</NavLink>
            </div>
        </div>
        </NavLink>
        )
    }
  </div>
  )
}

export default Testapi