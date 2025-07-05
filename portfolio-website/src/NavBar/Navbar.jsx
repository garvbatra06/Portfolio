import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to="/" className='btn'>Home</Link>
        <Link to="/about" className='btn'>About</Link>
        <Link to="/experience" className='btn'>Experience</Link>
        <Link to="/projects" className='btn'>Projects</Link>
        <Link to="/contact" className='btn' id='contact'>Contact</Link>
    </div>
  )
}

export default Navbar
