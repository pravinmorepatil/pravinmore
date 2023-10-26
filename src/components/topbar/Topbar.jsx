import './topbar.css';
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../../context/Context';


const Topbar = () => {
  const {user ,dispatch} = useContext(Context)
  const PF = "http://localhost:5000/images/"
  const handleLogout = () =>{
    dispatch({type : "LOGOUT"})
  }
  return (
    <div className='top'>
      <div className="topLeft">
        <a href="/"><i className="topIcon fa-brands fa-facebook"></i></a>
        <a href="/"><i className="topIcon fa-brands fa-instagram"></i></a>  
      </div>
      <div className="topCenter">
        <ul className='topList'>
            <li className="topListItem">
              <Link to="/" className="link">HOME</Link> 
            </li>
            <li className="topListItem">
            <Link to="/about" className="link">ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link to="/write" className="link">WRITE</Link>
            </li>
            <li className="topListItem" onClick={handleLogout} >
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topLeft">
        {
          user ? (
            <Link to="/settings">
              
              <img src={PF + user.profilepicture} alt="" className="topImage" />

            </Link>
           ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link to="/login" className="link">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link">REGISTER</Link>
              </li>
            </ul>
           )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar
