///DOESN'T WORK!!!!///

// JavaScript
const cuisineTypes = document.getElementsByClassName("cuisine-list-button");

const recipesContainer = document.getElementById('recipes-container');
const ingredientsContainer = document.getElementById('ingredients-container');
for (let i = 0; i < cuisineTypes.length; i++) {
    cuisineTypes[i].addEventListener('click', (event) => {
        console.log('cuisine clicked');
        event.preventDefault();
        const cuisineType = event.target.dataset.cuisine;

        // Send AJAX request to the server
        fetch(`/api/recipes/${cuisineType}`)
            .then((response) => response.json())
            .then((data) => {
                // Process the response and update the UI
                const recipes = data.recipes;
                console.log(data);
                const recipeList = recipes
                    .map((recipe) => `<li><a id="${recipe.id}" onclick="showIngredients(this.id)"class="recipe-list-button" id="recipe-li">${recipe.name}</a></li>`)
                    .join('');



                recipesContainer.innerHTML = `<ul>${recipeList}</ul>`;
            })
            .catch((error) => {
                console.error(error);
            });
    });
}
// Event listener for cuisine type click


function showIngredients(id) {
    const recipeTypes = document.getElementsByClassName("recipe-list-button");
    console.log('recipe clicked');
    event.preventDefault();

    // Send AJAX request to the server
    fetch(`/api/ingredients/`+id)
        .then((response) => response.json())
        .then((data) => {
            console.log("ingredients: " + data);


        });





}
