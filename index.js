const emailjs = require('emailjs-com')

const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_t5x7lp9', 'template_gl7riep', 'contact-form', 'user_Vbeqkopgu0Wj8bJJ1cRUS')
     .then(result => alert('Your message has been sent. I will be in contact with you soon.Thank you!'))
     .catch(err => alert('Oops! Please try again.'))

}

document.querySelector('.submitButton').addEventListener('click', submitForm)