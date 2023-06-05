///DOESN'T WORK!!!!///

// JavaScript
const cuisineTypes = document.getElementsByClassName("cuisine-list-button");
const recipesContainer = document.getElementById('recipes-container');

for(let i  = 0; i < cuisineTypes.length; i++)
{
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
                const recipeList = recipes
                    .map((recipe) => `<li>${recipe.name}</li>`)
                    .join('');
    
                recipesContainer.innerHTML = `<ul>${recipeList}</ul>`;
            })
            .catch((error) => {
                console.error(error);
            });
    });
}
// Event listener for cuisine type click
