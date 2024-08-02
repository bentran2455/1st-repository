// Define constants
const API_KEY = 'f53008c835da1efdde53bc4c';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;
const baseUnit = document.getElementById('base-unit');
const targetRate = document.getElementById('target-rate');
const baseCode = document.getElementById('base-code');
const inputBaseAmount = document.getElementById('base-amount');
const inputTargetAmount = document.getElementById('target-amount');
const targetCode = document.getElementById('target-code');
const errorMsg = document.querySelector('.error-message');

// Fetch supported codes 

const getSupportedCodes = async function() {
    try {
        const response = await fetch(`${BASE_URL}/codes`);
        if (response.ok) {
            const data = await response.json();
            return data.supported_codes;
            // console.log('Array List',codes.length, codes);
        }
    } catch (err) {
        console.error('ERROR OCCURS',err.stack);
        return [];
    }
};

// Fetch conversion rate 

const getConversionRate = async function(bc,tc) {
    try {
        const response = await fetch(`${BASE_URL}/pair/${bc}/${tc}`);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data.conversion_rate;
        }
    } catch (err) {
        console.error('ERROR OCCURS',err.stack);
        return [];
    }
}

// Update exchange rate display 

const updateExchangeRate = async () => {
    let bc = baseCode.value;
    let tc = targetCode.value;
    rate = await getConversionRate(bc,tc);
    baseUnit.textContent = `1 ${bc} equals`;
    targetRate.textContent = `${rate} ${tc}`;
}

// Initialize application 

async function initialize() {
    errorMsg.textContent = "Loading data";
    codes = await getSupportedCodes();
    if (!codes.length) {
        errorMsg.textContent = 'No code found';
        return;
    };
    errorMsg.textContent = "";
    codes.forEach((code) => {
        const optionBaseCode = document.createElement('option');
        optionBaseCode.value = code[0];
        optionBaseCode.textContent = `${code[0]} - ${code[1]}`;
        if (code[0] === 'USD') {
            optionBaseCode.selected = true;
        }
        baseCode.appendChild(optionBaseCode);
        const optionTargetCode = document.createElement('option');
        optionTargetCode.value = code[0];
        optionTargetCode.textContent = `${code[0]} - ${code[1]}`;
        if (code[0] === 'VND') {
            optionTargetCode.selected = true;
        }
        targetCode.appendChild(optionTargetCode);
    });
    await updateExchangeRate();
}

initialize();

// Add event listeners for user interaction

baseCode.addEventListener('change',updateExchangeRate);

inputBaseAmount.addEventListener('input', ()=>{
    inputTargetAmount.value = Math.round((inputBaseAmount.value * rate)*10**3) / 10**3;
})
inputTargetAmount.addEventListener('input', ()=>{
    inputBaseAmount.value = Math.round((inputTargetAmount.value / rate)*10**3) / 10**3;
})
