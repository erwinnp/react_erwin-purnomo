import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import Main from '../components/Main';
import About from '../components/About';
import AboutApp from '../components/AboutApp';
import AboutAuthor from '../components/AboutAuthor';
import NotFoundPage from '../components/NotFoundPage';

const MainRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/about-app' element={<AboutApp />} />
          <Route path='/about-author' element={<AboutAuthor />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainRoute;
