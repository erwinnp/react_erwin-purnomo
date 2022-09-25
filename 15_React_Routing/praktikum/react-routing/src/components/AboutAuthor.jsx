import React, { useState } from 'react';
import SidebarAbout from './SidebarAbout';
import '../assets/styles/About.css';

const About = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSide = () => {
    setSidebar((prevSidebar) => !prevSidebar);
  };

  return (
    <>
      <SidebarAbout unhideSidebar={toggleSide} sidebar={sidebar} />
      <div className='about-wrapper'>
        <h1>About Author</h1>
        <p>This App develop by Erwin Purnomo using React JS</p>
      </div>
    </>
  );
};

export default About;
