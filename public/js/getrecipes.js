///DOESN'T WORK!!!!///

// JavaScript
const cuisineList = document.getElementById('cuisine-list');
const recipesContainer = document.getElementById('recipes-container');

// Event listener for cuisine type click
cuisineList.addEventListener('click', (event) => {
    console.log('cuisine clicked');
    event.preventDefault();
    const cuisineType = event.target.dataset.cuisine;

    // Send AJAX request to the server
    fetch(`/recipes/${cuisineType}`)
        .then((response) => response.json())
        .then((data) => {
            // Process the response and update the UI
            const recipes = data.recipes;
            const recipeList = recipes
                .map((recipe) => `<li>${recipe.name}</li>`)
                .join('');

            recipesContainer.innerHTML = `<ul>${recipeList}</ul>`;
        })
        .catch((error) => {
            console.error(error);
        });
});

module.exports = router;