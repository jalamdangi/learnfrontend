import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';

const Card = ({menuData}) => {
  return (
    <>
      <div className="container">
      <div className="row bg-light">
        <div className="col-md-12">
          <h3 className="text-center">All Posts</h3>
        </div>
      </div>
        <div className="row mt-2">
        {menuData.map((curElem) =>{
        return(
           <>
           <div className="col-md-3 mb-3 p-0 border">
           <img src={curElem.image} alt=""/>
           </div>
           <div className="col-md-9 mb-3 p-4 border">
                <h5>{curElem.id } : {curElem.title}</h5>
                <p>{curElem.description}</p>
                <NavLink to={`singleproduct/${curElem.id}`} className="">Read More..</NavLink>
           </div>
        </>
        );
    })} 
        </div>
      </div>
    </>
  )
}

export default Card