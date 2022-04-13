import React, { useState } from 'react';
import Menu from '../api/productapi';
import Card from './Card';

const Home = () => {
    const [menuData , setMenuData] = useState(Menu);

    // const filterItem = (category) => {
    //     const updatedList = Menu.filter((curElem) => {
    //         return curElem.category === category;
    //     })
    //     setMenuData(updatedList)
    // }
  return (
    <>
    {/* <h2 style={{textAlign:"center"}}>
    <button className='btn btn-warning' onClick= {()=> filterItem("Mobile")} >Mobiles...</button>
    <button className='btn btn-success' onClick= {()=> filterItem("Country")}>Country......</button>
    </h2> */}
    <Card menuData={menuData} />
    </>
  );
};
export default Home;
