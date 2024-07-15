
const calcBtn = document.querySelector('#btn'); 
const birthday = document.querySelector('#birthday');

function ageCalculate() {
    const dateInput = birthday.value;
    if (dateInput === '') {
        alert('Please choose the fucking day');
    } else {
        const age = getAge(dateInput);
        const ageText = age < 2 ? 'year' : 'years';
        document.querySelector('#result').innerHTML = `Your age is ${age} ${ageText} old`;
    }};

function getAge(dateInput) {
    const birthDate = new Date(dateInput);
    const birthYear = birthDate.getFullYear();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    let age = currentYear - birthYear;

    if (birthDate.getDate() > currentDate.getDate() && (currentYear == birthYear)) {
        alert('The birth should not be later than today');
        return;
    }
    
    if (month < 0 || 
        (month == 0 && currentDate.getDate() < birthDate.getDate() )) {
        age--;
    } return age;
    } 

calcBtn.addEventListener('click', ageCalculate)