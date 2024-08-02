const fullDocument = document.getElementsByTagName('body')[0];
const countGameText = document.querySelector('.number-of-games');
const gameListing = document.querySelector('.games-list');
const searchIcon = document.querySelector('.toolbar .material-icons');
const searchToggleSection = document.querySelector('.search-toggle-section');
const closeIcon = searchToggleSection.querySelector('.material-icons.close');
const genreList = document.getElementById('genre-list');
const tagList = document.getElementById('tag-list');
const mainURL = 'https://steam-api-dot-cs-platform-306304.et.r.appspot.com';
const featureLink = document.getElementById('featured');
const searchInput = document.querySelector('.search-form input');
const searchButton = document.getElementById('Search');
const gameDetail = document.getElementById('game-details');

function updateNumberOfGames(num) {
    num = gameListing.querySelectorAll('.game-item').length;
    if (num !== 1) {
        countGameText.textContent = `${num} games`;
    } else countGameText.textContent = `${num} game`;
}

function closeSearch() {
    searchToggleSection.removeAttribute('open');
    fullDocument.classList.remove('fade');
}

searchIcon.addEventListener('click', () => {
    searchToggleSection.setAttribute('open', true);
    fullDocument.classList.add('fade');
});

closeIcon.addEventListener('click',closeSearch);

// Get all games 
const getAllGames = async () => {
    const res = await fetch(`${mainURL}/games?limit=30`);
    const result = (await res.json()).data;
    return result;
};


// Get genre list
const getGenreList = async () => {
    const res = await fetch(`${mainURL}/genres`);
    const result = (await res.json()).data;
    // console.log('Genre List Result', result);
    return result;
};

// Create genre list
const createGenreList = async () => {
    const list = await getGenreList();
    list.forEach((item) => {
        const genreItem = document.createElement('li');
        genreItem.innerHTML = `<a id="${item._id}" class="genre-name" href="#" name="${item.name}">${item.name}</a>`;
        genreList.appendChild(genreItem);
    });
    const genreCollection = genreList.querySelectorAll('li a');
    genreCollection.forEach((genre) => {
        genre.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            const genreName = genre.getAttribute('name');
            fetchGameByGenre(genreName);
        });
    });
};

// Show games by genres 
const fetchGameByGenre = async (genreName) => {
    const url = `${mainURL}/games?genres=${genreName}`;
    try {
        const response = await fetch(url);
        const games = (await response.json()).data;
        showGamesByGenre(games);
    } catch (err) {
        console.error('Error fetching games:', err);
    }
};

// Show games by tags 
const fetchGameByTags = async (tagName) => {
    const url = `${mainURL}/games?steamspy_tags=${tagName}`;
    try {
        const response = await fetch(url);
        const games = (await response.json()).data;
        showGamesByTags(games);
    } catch (err) {
        console.error('Error fetching games:', err);
    }
};


// Get tag list
const getTagList = async () => {
    const res = await fetch(`${mainURL}/steamspy-tags`);
    const result = (await res.json()).data;
    return result;
};

// Create tag list
const createTagList = async () => {
    const list = await getTagList();
    list.forEach((item) => {
        const tagItem = document.createElement('li');
        tagItem.innerHTML = `<a id="${item._id}" class="tag-name" href="#" name="${item.name}">${item.name}</a>`;
        tagList.appendChild(tagItem);
    });
    const tagCollection = tagList.querySelectorAll('li a');
    tagCollection.forEach((tag) => {
        tag.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            const tagName = tag.getAttribute('name');
            fetchGameByTags(tagName);
        });
    });
};

// Get featured games
const getFeatureGames = async () => {
    const res = await fetch(`${mainURL}/features`);
    const result = (await res.json()).data;
    return result;
};

// Search games
const searchGames = async (query) => {
    const url = `${mainURL}/games?q=${query}`;
    console.log(url);
    try {
        const response = await fetch(url);
        const games = (await response.json()).data;
        console.log(games);
        showSearchGames(games);
    } catch (err) {
        console.error('Error searching games:', err);
    }
};

// Show game after searching
const showSearchGames = async (games) => {
    gameListing.innerHTML = '';
    games.forEach((item) => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.setAttribute('appid',`${item.appid}`);
        gameItem.innerHTML = `
            <div class="game-image">
                <img src="${item.header_image}" width="300" alt="">
            </div>
            <a class="game-name" href="#" name="${item.name}">
                ${item.name}
            </a>`;
        gameListing.appendChild(gameItem);
    });
    updateNumberOfGames();
};
// Add event listener to the search button
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        searchGames(query);
    };
    closeSearch();
    updateNumberOfGames();
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            searchGames(query);
        }
        closeSearch();
        updateNumberOfGames();
        event.preventDefault();
    }
});

// Add event listener to the featured link
featureLink.addEventListener('click', (event) => {
    event.preventDefault();
    showFeatureGames();
});


const showAllGames = async () => {
    gameListing.innerHTML = '';
    gameDetail.innerHTML = '';
    const list = await getAllGames();
    list.forEach((item) => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.setAttribute('appid', `${item.appid}`);
        gameItem.innerHTML = `
            <div class="game-image">
                <img src="${item.header_image}" width="300" alt="">
            </div>
            <a class="game-name" href="#" name="${item.name}">
                ${item.name}
            </a>`;
        gameListing.appendChild(gameItem);
        addGameItemClickListener(gameItem);
    });
};

const showGamesByGenre = (games) => {
    gameListing.innerHTML = '';
    gameDetail.innerHTML = '';
    games.forEach((item) => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.setAttribute('appid', `${item.appid}`);
        gameItem.innerHTML = `
            <div class="game-image">
                <img src="${item.header_image}" width="300" alt="">
            </div>
            <a class="game-name" href="#" name="${item.name}">
                ${item.name}
            </a>`;
        gameListing.appendChild(gameItem);
        addGameItemClickListener(gameItem);
    });
    updateNumberOfGames();
};

const showGamesByTags = (games) => {
    gameListing.innerHTML = '';
    gameDetail.innerHTML = '';
    games.forEach((item) => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.setAttribute('appid', `${item.appid}`);
        gameItem.innerHTML = `
            <div class="game-image">
                <img src="${item.header_image}" width="300" alt="">
            </div>
            <a class="game-name" href="#" name="${item.name}">
                ${item.name}
            </a>`;
        gameListing.appendChild(gameItem);
        addGameItemClickListener(gameItem);
    });
    updateNumberOfGames();
};

const showFeatureGames = async () => {
    gameListing.innerHTML = '';
    gameDetail.innerHTML = '';
    const list = await getFeatureGames();
    list.forEach((item) => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.setAttribute('appid', `${item.appid}`);
        gameItem.innerHTML = `
            <div class="game-image">
                <img src="${item.header_image}" width="300" alt="">
            </div>
            <a class="game-name" href="#" name="${item.name}">
                ${item.name}
            </a>`;
        gameListing.appendChild(gameItem);
        addGameItemClickListener(gameItem);
    });
    updateNumberOfGames();
};

const showGameDetails = async (appid) => {
    const response = await fetch(`${mainURL}/single-game/${appid}`);
    const data = (await response.json()).data;
    console.log('Game Details:', data);
    let releaseDate = data.release_date;
    releaseDate = releaseDate.replace('T00:00:00.000Z','');
    gameDetail.innerHTML = `
        <div class="game-img">
        <img src="${data.header_image}" alt="${data.name}" width="400">
        </div>
        <div class="game-spec">
        <h2>${data.name}</h2>
        <p class="game-desc">${data.description}</p>
        <p class="game-release-date">Release Date: ${releaseDate}</p>
        </div>
    `;
};
const addGameItemClickListener = (gameItem) => {
    gameItem.addEventListener('click', (event) => {
        countGameText.textContent = `1 game`;
        gameListing.innerHTML = '';
        event.preventDefault();
        let getID = gameItem.getAttribute('appid');
        let appid = Number(getID);
        if (appid) {
            showGameDetails(appid);
        } else {
            console.error('Game item does not have an appid attribute');
        }
    });
};

createGenreList();
createTagList();
showAllGames();