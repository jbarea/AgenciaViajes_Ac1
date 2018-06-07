$(window).ready(function () {
    sendContactMessage();
    subscribeNewsletter();
});

const sendContactMessage = () => {
    document.querySelector('section#donde-estamos form#contact').onsubmit = (e) => {
        e.preventDefault();
        let output = true;
        const input = {
            nombre: e.target.querySelector('input[name="nombre"]'),
            email: e.target.querySelector('input[name="email"]'),
            phone: e.target.querySelector('input[name="phone"]'),
            country: e.target.querySelector('input[name="country"]'),
            message: e.target.querySelector('textarea[name="message"]'),
        }
        const validator = FormValidator.validate({
            nombre: input.nombre.value,
            email: input.email.value
        });

        if (FormValidator.CODE.nok === validator.nombre.code) {
            e.target.querySelector('input[name="nombre"] + div.invalid-feedback').innerHTML = validator.nombre.msg;
            input.nombre.classList.remove('is-valid');
            input.nombre.classList.add('is-invalid');
            output = false;
        } else {
            input.nombre.classList.remove('is-invalid');
            input.nombre.classList.add('is-valid');
        }

        if (FormValidator.CODE.nok === validator.email.code) {
            e.target.querySelector('input[name="email"] + div.invalid-feedback').innerHTML = validator.email.msg;
            input.email.classList.remove('is-valid');
            input.email.classList.add('is-invalid');
            output = false;
        } else {
            input.email.classList.remove('is-invalid');
            input.email.classList.add('is-valid');
        }

        input.phone.classList.add('is-valid');
        input.country.classList.add('is-valid');
        input.message.classList.add('is-valid');

        if (output) {
            alert('Sistema de mensajeria en desarrollo, disculpa por las molestias');
        }
    }
}

const subscribeNewsletter = () => {
    document.querySelector('footer form#newsletter').onsubmit = (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input[name="email"]');
        const validator = FormValidator.validateEmail(input.value);
        
        if (FormValidator.CODE.nok === validator.code) {
            e.target.querySelector('input[name="email"] + div.invalid-feedback').innerHTML = validator.msg;
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            output = false;
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
    }
}