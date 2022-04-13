import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (e) =>{
        e.preventDefault();
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });
        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
        }
        else{
            window.alert("Login Successfull");
            navigate("/contact");
        }
    }
    
  return (
<>
<div className="container">
<h2>Welcome To Login Page</h2>
    <form method='POST'>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} className="form-control"  placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" placeholder="Password"/>
  </div> 
  <button type="submit" onClick={loginUser} className="btn btn-primary">Submit</button>
  </form>
</div>
</>
  )
}

export default Signin