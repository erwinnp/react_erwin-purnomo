import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Sidebar.css';

const Sidebar = ({ sidebar, unhideSidebar }) => {
  return (
    <nav>
      <div className='menu' onClick={unhideSidebar}>
        Menu
      </div>
      <div className={sidebar ? 'sidebar sidebar-open' : 'sidebar'}>
        <div className='menu menu-close' onClick={unhideSidebar}>
          Close
        </div>
        <div className='menu-items'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/about-app' className='link'>
            About App
          </Link>
          <Link to='/about-author' className='link'>
            About Author
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
