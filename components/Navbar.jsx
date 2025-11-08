import React from 'react'
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <div className='left-nav'>
        Dhruv Portfolio
      </div>

      <div className='right-nav'>
         <NavLink to="/" style={{ textDecoration: "none", color: "white" }}  className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}>Home</NavLink>
         <NavLink to="/about" style={{ textDecoration: "none", color: "white" }}  className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}>About</NavLink>
         <NavLink to="/project" style={{ textDecoration: "none", color: "white" }}  className={({ isActive }) =>isActive ? "text-red-500" : "text-black"}>Project</NavLink>
         <NavLink to="/contact" style={{ textDecoration: "none", color: "white" }}  className={({ isActive }) => isActive ? "text-red-500" : "text-black"}> Contact</NavLink>
       </div>
    </nav>
  )
}

export default Navbar