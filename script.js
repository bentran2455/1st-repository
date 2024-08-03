const API_KEY = '1a982e30-b6ff-4e65-b330-24d23f0487a4';
const searchQuery = document.getElementById('search-query');
const yearQuery = document.getElementById('year-query');
const monthQuery = document.getElementById('month-query');
const dayQuery = document.getElementById('day-query');
const countryQuery = document.getElementById('country-query');
const languageQuery = document.getElementById('language-query');
const errorText = document.querySelector('#holidays-list p');
// Get Holidays
const getHolidays = async () => {
    try {
        let addString = '';
        if (searchQuery.value.length >= 5) {
            addString += `&search='${searchQuery.value}'`;
        }
        else if (searchQuery.value === '') {
            addString += '';
        } else {
            alert('This field requires at least 5 characters');
            return;
        }
        if (yearQuery.value) {
            addString += `&year=${yearQuery.value}`;
        } else {
            addString += `&year=2023`;
        }
        if (countryQuery.value) {
            addString += `&country=${countryQuery.value}`;
        } else if (searchQuery.value) {
            countryQuery.value = '';
        } else {
            addString += `&country=VN`;
        }
        if (monthQuery.value >= 1 && monthQuery.value <=12) {
            addString += `&month=${monthQuery.value}`;
        } else if (monthQuery.value === '') {
            addString += '';
        } else {
            alert('Month must from 1 to 12');
            return;
        }
        if (dayQuery.value >= 1 && dayQuery.value <= 31) {
            addString += `&day=${dayQuery.value}`;
        } else if (dayQuery.value === '') {
            addString += '';
        } else {
            alert('Date must from 1 to 31');
            return;
        }
        if (languageQuery.value.length <= 2 && languageQuery.value.length > 0) {
            addString += `&language=${languageQuery.value}`;
        } else if (languageQuery.value === '') {
            addString += '';
        } else {
            alert('Language code must have 2 characters');
            return;
        }
        let url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}${addString}`;
        console.log('fetch url is', url);
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        errorText.classList.add('hidden');
        errorText.textContent = '';
        return data.holidays;
    }
    catch (err) {
        console.error('Cannot get holiday information',err, err.stack);
        errorText.classList.remove('hidden');
        errorText.textContent = 'No holiday found';
    }
};
;
// Render holidays 
const renderHolidays = async () => {
    const holidayList = document.querySelector('#holidays-list ul');
    holidayList.innerHTML = "";
    try {
        const data = await getHolidays();
        console.log(data);
        data.forEach((c, index) => {
            const holidays = document.createElement('li');
            holidays.innerHTML =
            `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
            <div class="li-title">${c.name}</div>
            <div class="li-text">${c.weekday.date.name}: ${c.date}</div>
            </div>`;
            holidayList.appendChild(holidays);
            document.querySelector('#holidays-list h3').innerHTML = `Holidays of ${c.country}`;
        });
    }
    catch (err) {
        console.error(err, 'Cannot render holidays');
    }
}

// Get countries
const getCountries = async () => {
    try {
        const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log('countries',data.countries);
        return data.countries;
    }
    catch (err) {
        console.error('error',err, err.stack);
    }
};
// Render countries
const renderCountries = async () => {
    const countriesList = document.querySelector('#countries-list ul');
    countriesList.innerHTML = "";
    try {
        const data = await getCountries();
        console.log('data of render countries',data);
        data.forEach((c, index) => {
            const country = document.createElement('li');
            country.innerHTML =
            `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
            <div class="li-title">${c.name}</div>
            <div class="li-text">Code: ${c.code}</div>
            </div>`;
            countriesList.appendChild(country);
        });
    }
    catch (err) {
        console.error(err, 'Cannot render country');
    }
}
// Get languages
const getLanguages = async () => {
    try {
        const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        return data.languages;
    }
    catch (err) {
        console.error('error',err, err.stack);
    }
};
// Render languages
const renderLanguages = async () => {
    const languagesList = document.querySelector('#languages-list ul');
    languagesList.innerHTML = "";
    try {
        const data = await getLanguages();
        console.log('data of render languages',data);
        data.forEach((c, index) => {
            const country = document.createElement('li');
            country.innerHTML =
            `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
            <div class="li-title">${c.name}</div>
            <div class="li-text">Code: ${c.code}</div>
            </div>`;
            languagesList.appendChild(country);
        });
    }
    catch (err) {
        console.error(err, 'Cannot render country');
    }
}

document.getElementById('countries-list-btn').addEventListener('click',renderCountries);
document.getElementById('holidays-btn').addEventListener('click',renderHolidays);
document.getElementById('languages-list-btn').addEventListener('click',renderLanguages);