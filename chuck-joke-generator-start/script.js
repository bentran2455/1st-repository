
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');



const generateJoke = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const data = JSON.parse(this.responseText);
                // console.log(data);
                jokeEl.innerHTML = `${data.value}`;
            } else {
                jokeEl.innerHTML = `Something went wrong!`;
            }
        }
    }
    xhr.send();
}

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded',generateJoke);