import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () =>{
      try{
          const res = fetch("/about",{
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials: "include"
          });
          const data = await res.json();
          console.log(data);
          if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
          }
      }
      catch(err){
        console.log(err);
        navigate('/signin');
      }
  }

  useEffect(() => {
    callAboutPage();
  }, []);
 


  return (
    <>
        <h2>This is About Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci ipsum tempora. Pariatur ea expedita odio soluta iste facere suscipit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci ipsum tempora. Pariatur ea expedita odio soluta iste facere suscipit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci ipsum tempora. Pariatur ea expedita odio soluta iste facere suscipit.</p>
    </>
  )
}

export default About;