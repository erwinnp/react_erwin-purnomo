import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../assets/styles/About.css';
import NotFound from '../assets/img/not-found.png';

const NotFoundPage = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSide = () => {
    setSidebar((prevSidebar) => !prevSidebar);
  };

  return (
    <>
      <Sidebar unhideSidebar={toggleSide} sidebar={sidebar} />
      <div className='about-wrapper'>
        <h1>Page Not Found</h1>
        <img src={NotFound} alt='' />
      </div>
    </>
  );
};

export default NotFoundPage;
