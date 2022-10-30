import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
