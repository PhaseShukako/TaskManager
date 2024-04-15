import React from 'react';

const Navbar = () => {
  return (
    <nav role="navigation" className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </nav>
  );
}

export default Navbar;
