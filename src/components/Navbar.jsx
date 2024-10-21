import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <ul>
        <li><Link to='/'>Profile</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
