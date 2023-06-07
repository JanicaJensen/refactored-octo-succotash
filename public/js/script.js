var app_id = "561e2cf2";

var app_key = "f15fdebb7fd1deccbf454477774e4461";
var foods = ["milk", "bread", "eggs"]; 
var responseData = []; // Array to store the responses from the API

for (var i = 0; i < foods.length; i++) {
  var food = foods[i];
var requestUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${food}&nutrition-type=cooking
`;

// store the response from the database in an array 

// put this in a for loop to get all the items in the array
 return fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        console.log("API CALL SUCCESSFUL");
      }
      return response.json();
    }).then(function (data) {
      console.log(data);
      console.log(data.hints[0].food.nutrients.ENERC_KCAL);
      document.querySelector("#calories").textContent = `calories:${data.hints[0].food.nutrients.ENERC_KCAL}`;
      console.log(data.hints[0].food.nutrients.CHOCDF);
      document.querySelector("#carbs").textContent = `carbs:${data.hints[0].food.nutrients.CHOCDF}`;
      console.log(data.hints[0].food.nutrients.PROCNT);
      document.querySelector("#protein").textContent = `protein:${data.hints[0].food.nutrients.PROCNT}`;
      responseData.push(data);
    });
  }
  // Access the stored responses outside the loop
console.log(responseData);

