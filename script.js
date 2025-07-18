var typed = new Typed('#element', {
    strings: ['Web Developer', 'Programer', 'Web Designer', 'Front-end Developer'],
    typeSpeed: 50,
});

document.addEventListener('DOMContentLoaded', function() {
    // Contact form alert
    var contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your message is successfully submitted!');
            contactForm.reset();
        });
    }

});