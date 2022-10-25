const Footer = () => {
  return (
    <>
      <div className='divider mt-5'></div>
      <footer className='wrapper d-flex justify-content-between mt-5'>
        <div>
          <a className='fs-4 fw-semibold' href='#hero'>
            <span>Moon</span>graph.
          </a>
          <p className='subtitle-footer'>
            We capture your special moments instantly and memorable.
          </p>
        </div>
        <div className='d-flex'>
          <div className='d-flex flex-column me-5'>
            <p>Social Media</p>
            <a className='subtitle-contact' href='https://wa.me/+6285865358765'>
              Whatsapp
            </a>
            <a
              className='subtitle-contact'
              href='https://www.instagram.com/eeerwinp/'
            >
              Instagram
            </a>
            <a className='subtitle-contact' href='https://unsplash.com/'>
              Unsplash
            </a>
          </div>
          <div className='d-flex flex-column'>
            <p>Connect Us</p>
            <a className='subtitle-contact' href=''>
              moongraph21@gmail.com
            </a>
            <a className='subtitle-contact' href=''>
              +628587653567
            </a>
            <a className='subtitle-contact' href=''>
              Boyolali, Jawa Tengah, Indonesia
            </a>
          </div>
        </div>
      </footer>
      <div className='subtitle-contact wrapper d-flex flex-column align-items-center'>
        <p>Copyright 2022 • All rights reserved • Moongraph</p>
        <p>Website create using ReactJS and Bootstrap by Erwin Purnomo</p>
      </div>
    </>
  );
};

export default Footer;
