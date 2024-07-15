function validateUsername(username) {
    if (!username) return "Username required";
    return true;
}

function validateEmail(email) {
    if (!email) return "Email required";
    const regExpression = /\S+@\S+\.\S+/;
    if (!regExpression.test(email)) return "Email invalid"
    return true;
}

function validatePassword(password) {
    if (!password) return "Username required";
    if (password.length < 3) return "Password must be at least 3 characters"
    return true;
}

function validatePasswordConfirmation(passwordConfirmation, password) {
    if (!passwordConfirmation) return "Username required";
    if (passwordConfirmation !== password) return "Password does not match"
    return true;
}

const form = document.querySelector('.form');
const fields = ['username', 'email', 'password', 'password-confirm'];
const inputs = fields.map(field => document.getElementById(field));
// console.log(inputs)

inputs.forEach((input) => {
    input.addEventListener('input',function() {
        validateFields(input);
    })
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    inputs.forEach((input) => {
        input.addEventListener('input',function() {
            validateFields(input);
        })
    });
})

function validateFields(input) {
    let message;
    switch (input.id) {
        case 'username':
            message = validateUsername(input.value.trim());
            break;
        case 'email':
            message = validateEmail(input.value.trim());
            break;
        case 'password':
            message = validatePassword(input.value.trim());
            break;
        case 'password-confirm':
            const password = document.querySelector('#password').value.trim();
            message = validatePasswordConfirmation(input.value.trim(), password);
            break;
        default:
            break;
    }
    if (message === true) {
        console.log('ok');
    } else {
        console.log(message);
    }
}