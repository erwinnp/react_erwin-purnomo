import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import GalleryPage from '../pages/GalleryPage';
import Home from '../pages/Home';

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/gallery' element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouter;
