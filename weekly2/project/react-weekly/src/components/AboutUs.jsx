import BannerAbout from '../assets/bannerAbout.png';

const AboutUs = () => {
  return (
    <>
      <div
        className='d-flex align-items-center justify-content-center flex-column mt-5'
        id='contact-section'
      >
        <p className='title'>About Us</p>
        <p className='subtitle-contact'>We live on photography world</p>
      </div>
      <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
        <img src={BannerAbout} alt='' />
        <div className='about-wrapper mt-5 fs-4'>
          <p>
            With a passion for photos, I enjoy working with people who value
            aesthetics, who understand the power of simplicity and who know that
            a good customer experience is paramount.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
