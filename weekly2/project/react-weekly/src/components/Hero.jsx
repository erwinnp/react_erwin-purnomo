import Banner from '../assets/banner.png';

const Hero = () => {
  return (
    <section
      className='wrapper d-flex align-items-center justify-content-between'
      id='hero'
    >
      <div>
        <div>
          <p className='title fs-1 fw-bold'>
            Enjoy Your Life,
            <br />
            <span>We Capture Your Life</span>
          </p>
        </div>
        <div className='subtitle'>
          <p>
            We provide what you need to capture all of your moments in your
            life. Time to make memoriable picture.
          </p>
        </div>
        <a href='#contact-section'>
          <button>Contact Us</button>
        </a>
      </div>
      <div>
        <img src={Banner} alt='banner' />
      </div>
    </section>
  );
};

export default Hero;
