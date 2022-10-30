import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar py-4 spacing'>
        <div>
          <Link className='fs-4 fw-semibold' to='/'>
            <span>Moon</span>graph.
          </Link>
        </div>
        <div>
          <Link className='mx-5' to='/'>
            Home
          </Link>
          <Link className='mx-5' to='/gallery'>
            Gallery
          </Link>
          <a href='#about-section' className='mx-5'>
            About Us
          </a>
          <a href='#contact-section' className='ms-5'>
            Contact Us
          </a>
        </div>
      </nav>
      <div className='divider'></div>
    </>
  );
};

export default Navbar;
