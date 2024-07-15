'use strict'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// XMLHttprequest

const request = new XMLHttpRequest();
request.open('GET','https://countries-api-836d.onrender.com/countries/name/portugal');
request.send();


request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const newHtml = 
    `<article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend',newHtml);
});

// ASync/Await

// async function fetchData() {
//     const response = await fetch(
//         'https://countries-api-836d.onrender.com/countries/name/portugal'
//     );
//     const data = await response.json();
//     console.log(data)
// }
// fetchData();