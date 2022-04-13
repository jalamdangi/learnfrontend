import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Singlepost = () => {
 const [data,setData] = useState([])
    const {id} = useParams();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((result)=>{
        result.json().then((response)=>{
            // console.log(response);
            setData(response);
        })
    })
  return (
    <div>
    <h2>Single Post Information..</h2>
        <h2>{data.id}</h2>
        <p>{data.title}</p>
        <p>{data.body}</p>
    </div>
  )
}

export default Singlepost