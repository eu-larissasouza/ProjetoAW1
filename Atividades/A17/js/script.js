const masks = {
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    },
    phone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
    }
}

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js

    $input.addEventListener(
        'input',
        e => {
            e.target.value = masks[field](e.target.value)
        },
        false
    )
})

const form = document.getElementById('form')
const fullname = document.getElementById('fullname')
const nickname = document.getElementById('nickname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const date = document.getElementById('date')
const cpf = document.getElementById('cpf')

const button = document.getElementById('enviar')

button.addEventListener('click', event => {
    event.preventDefault()

    if (fullname.value == '') {
        fullname.classList.add('errorInput')
    } else {
        fullname.classList.remove('errorInput')
    }

    if (nickname.value == '') {
        nickname.classList.add('errorInput')
    } else {
        nickname.classList.remove('errorInput')
    }

    if (date.value == '') {
        date.classList.add('errorInput')
    } else {
        date.classList.remove('errorInput')
    }

    if (email.value == '') {
        email.classList.add('errorInput')
    } else {
        email.classList.remove('errorInput')
    }

    if (phone.value == '') {
        phone.classList.add('errorInput')
    } else {
        phone.classList.remove('errorInput')
    }

    if (cpf.value == '') {
        cpf.classList.add('errorInput')
    } else {
        cpf.classList.remove('errorInput')
    }

    /* Validar o e-mail */
    if (
        email.value.indexOf('@') == -1 ||
        email.value.indexOf('.') == -1 ||
        email.value.indexOf('.') - email.value.indexOf('@') == 1
    ) {
        email.classList.add('errorInput')
    } else {
        email.classList.remove('errorInput')
    }

    /* Validar o cpf*/
    if (cpf.value.length <= 13) {
        cpf.classList.add('errorInput')
    } else {
        cpf.classList.remove('errorInput')
    }

    /* Validar o telefone*/
    if (phone.value.length <= 13) {
        phone.classList.add('errorInput')
    } else {
        phone.classList.remove('errorInput')
    }
})