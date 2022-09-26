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
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab fugiat
          repellat at aliquam perferendis doloremque natus velit inventore
          nobis.
        </p>
      </div>
    </>
  );
};

export default About;
