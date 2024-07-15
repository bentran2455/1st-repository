const API_KEY = '7fa1b2c8f0c14deab7b33be471a66de3';
const recipeListEl = document.getElementById('recipe-list');

function displayRecipes(recipes) {
recipeListEl.innerHTML = '';
recipes.forEach((recipe) => {
    // Create item and add to item list
    const recipeItemEl = document.createElement('li');
    recipeItemEl.classList.add('recipe-item');
    recipeListEl.appendChild(recipeItemEl);
    // Create img and add to item
    const recipeImageEl = document.createElement('img');
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = 'Recipe image';
    recipeItemEl.appendChild(recipeImageEl);
    // Create title
    const recipeTitle = document.createElement('h2');
    recipeTitle.innerText = recipe.title;
    recipeItemEl.appendChild(recipeTitle);
    // Create incredient 
    const recipeIngredient = document.createElement('p');
    recipeIngredient.innerHTML = `
    <strong>Ingredients:</strong>${recipe.extendedIngredients
        .map((ingredient) => ingredient.original)
        .join(", ")}`;
    recipeItemEl.appendChild(recipeIngredient);
    // Create URL
    const recipeLink = document.createElement('a');
    recipeLink.href = recipe.sourceUrl;
    recipeLink.innerText = 'VIEW RECIPE';
    recipeItemEl.appendChild(recipeLink);
})
}
// function getRecipes() {
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
//     request.send();
//     request.onload = function() {
//         if (request.status >= 200 && request.status <400) {
//             const data = JSON.parse(this.responseText);
//             const recipes = data.recipes;
//             displayRecipes(recipes);
//         } else {
//             console.error('failed');
//         }
//     };
    
// }

// function init() {
//     getRecipes();
// }
async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
}
async function init() {
    const recipes = await getRecipes();
    console.log(recipes);
    displayRecipes(recipes);
}
init();


