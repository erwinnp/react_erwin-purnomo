import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className='navbar py-4 spacing'>
        <div>
          <a className='fs-4 fw-semibold'>
            <span>Moon</span>graph.
          </a>
        </div>
        <div>
          <a href='#' className='mx-5'>
            Home
          </a>
          <a>Contact Us</a>
        </div>
      </nav>
      <div className='divider'></div>
    </>
  );
};

export default Navbar;
