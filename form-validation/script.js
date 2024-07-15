// create variables for each inputs

// const inputs = ['username', 'email', 'password', 'password-confirm'];
// const eachInput = inputs.map((eachInput) =>
//         document.getElementById(eachInput)
// );
// console.log(eachInput);
// const submitButton = document.getElementById('create-account');

const form = document.querySelector('.form');
const nameInput = document.getElementById('username');
const pwInput = document.getElementById('password');
const errorMsg = document.querySelector('.error-message')

function validateUsername(input) {
    if (!input.trim()) {
        errorMsg.textContent = 'Username is required';
        errorMsg.classList.remove('hidden');
    }
    else {
        return "correctt";
    }
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const result = validateUsername(nameInput.value);
    console.log(result);
});

function validatePassword(input) {
    if (input.trim().length < 3) {
        errorMsg.textContent = 'Password must have at least 3 characters';
        errorMsg.classList.remove('hidden');
    }
    else {
        return "correct";
    }
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const result = validatePassword(pwInput.value);
    console.log(result);
});
