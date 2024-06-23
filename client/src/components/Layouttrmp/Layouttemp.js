import React,{useState} from 'react';
import Homepage from '../../pages/Homepage/Homepage';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'
import "./Layouttemp.css";
import Menus from '../Menus/Menus';
const Layout = () => {
  const [toggle,setToggle] = useState(true)
  //change toogle
  const handleToggle = () => {
      setToggle(!toggle)
  }
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            
            <p onClick={handleToggle}>
              {toggle ? (<AiOutlineDoubleLeft size={30}/>):(<AiOutlineDoubleRight size={30}/>)}
              </p>
          </div>
          <Menus toggle ={toggle}/>
        </div>
        <div className="container">
          <Homepage />
        </div>
      </div>
    </>
  );
}

export default Layout;
