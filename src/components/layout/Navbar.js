import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="testapi">TestApi</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="product">Product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="signin">Signin</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success bg-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar