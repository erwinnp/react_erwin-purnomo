const contactForm = document.querySelector('#contact-form');
const inputFirstName = document.getElementById('first-name');
const inputLastName = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');

const handleSubmitForm = (event) => {
  event.preventDefault();

  let valueFirstName = inputFirstName.value;
  let valueLastName = inputLastName.value;
  let valueEmail = inputEmail.value;
  let valueMessage = inputMessage.value;

  alert(`
  Form Berhasil Disi
  Nama : ${valueFirstName} ${valueLastName}
  Email : ${valueEmail}
  Pesan : ${valueMessage}
  `);

  contactForm.reset();
};
