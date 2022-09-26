import React, { useState } from 'react';
import SidebarAbout from './SidebarAbout';
import '../assets/styles/About.css';

const AboutApp = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSide = () => {
    setSidebar((prevSidebar) => !prevSidebar);
  };

  return (
    <>
      <SidebarAbout unhideSidebar={toggleSide} sidebar={sidebar} />
      <div className='about-wrapper'>
        <h1>About App</h1>
        <p>This is a Todolist App, this app using React JS for UI Library</p>
      </div>
    </>
  );
};

export default AboutApp;
