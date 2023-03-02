import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/logo.svg'
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    // todo NavLink
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} alt="logo not found" />
        </div>
        <div className='navbar-content'>
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About Us</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#solution">Solution</a></p>
        </div>


        {/* for mobile view */}
        <div className='navbar-menu'>    {toggleMenu? <HiOutlineX size={30} onClick={() => setToggleMenu(false)}/> : <AiOutlineMenu size={30} onClick={() => setToggleMenu(true)} />}
        </div>

    {toggleMenu && (
        <div className='navbar-content-mob bg-discount-gradient box-shadow sidebar'>
            <p><a href="#home">Home</a></p>
            <p><a href="#home">About Us</a></p>
            <p><a href="#home">Features</a></p>
            <p><a href="#home">Solution</a></p>
        </div>
    )}
    </div>
  )
}
