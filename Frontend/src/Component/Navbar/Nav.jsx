import React from 'react'
import "../Navbar/Nav.css"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <>
    <div className="Nav-component">
        <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/project" className="nav-link">Project</NavLink>
        </nav>
    </div>
    </>
  )
}

export default Nav