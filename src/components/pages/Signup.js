import React,  {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"", email:"", phone:"", password:"", cpassword:""
    })
    let name,value;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})

    }
    const PostData = async (e) =>{
        e.preventDefault();
        const {name, email, phone, password, cpassword} = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "content-Type" : "application/json" 
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword
            })
        })
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert('Registration Failed');
            console.log('Registration Failed');
        }
        else{
            window.alert('Registration Success');
            console.log('Registration Success');
            navigate("/about");
        }
    }
  return (
    <>
    <div className="container">
    <h2>Welcome To Sign Up Page </h2>
<form method='POST'>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" name='name' onChange={handleInputs} value={user.name} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" className="form-control" name='email' onChange={handleInputs} value={user.email} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Phone</label>
    <input type="number" className="form-control" name='phone' onChange={handleInputs} value={user.phone} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name='password' onChange={handleInputs} value={user.password}  />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" className="form-control" name='cpassword' onChange={handleInputs} value={user.cpassword} />
  </div>
  <button type="submit" onClick={PostData} className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}

export default Register