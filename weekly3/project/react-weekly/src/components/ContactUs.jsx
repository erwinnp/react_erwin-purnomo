import React from 'react';

const ContactUs = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const email = formData.get('email');
    const message = formData.get('message');

    alert(`
      Submit Berhasil
      Nama : ${firstName} ${lastName}
      Email : ${email}
      Pesan : ${message}
    `);
  };

  return (
    <>
      <div
        className='d-flex align-items-center justify-content-center flex-column mt-5'
        id='contact-section'
      >
        <p className='title'>Contact Us</p>
        <p className='subtitle-contact'>
          Please fill up the blank fields below
        </p>
      </div>
      <form
        className='form-wrapper d-flex align-items-center justify-content-between'
        id='contact-form'
        onSubmit={handleOnSubmit}
      >
        <div className='form-left'>
          <div className='mb-3'>
            <label htmlFor='exampleInputText1' className='form-label'>
              First Name
            </label>
            <input
              type='text'
              className='form-control'
              name='first-name'
              id='first-name'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputText1' className='form-label'>
              Last Name
            </label>
            <input
              type='text'
              className='form-control'
              name='last-name'
              id='last-name'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Your Email
            </label>
            <input
              type='email'
              className='form-control'
              name='email'
              id='email'
            />
          </div>
        </div>
        <div>
          <div className='form-right mb-3 d-flex flex-column'>
            <label htmlFor='exampleInputText1' className='form-label'>
              Message
            </label>
            <textarea
              className='form-control'
              aria-label='With textarea'
              name='message'
              id='message'
            ></textarea>
            <button className='mx-auto' type='submit'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
