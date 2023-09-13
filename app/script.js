//Inialize the global vaiable
const cardBody = document.querySelector("#display-card");

let recipeItems = [];

const recipeCount = document.querySelector("#count");
recipeCount.innerText = "cardCount";
console.log("print");

// Main function
updateForm();
getFromLocalSorage();

function updateForm() {
  const form = document.querySelector("#recipe-form");
  form.addEventListener("submit", function (r) {
    r.preventDefault();
    updateFormElements();
    console.log("sumbit");
  });
}

function updateFormElements() {
  // fetch form data
  const title = document.querySelector("#recipeName").value;
  const time = document.querySelector("#timeTaken").value;
  const steps = document.querySelector("#stepsTodo").value;
  const image = document.querySelector("#recipeImg").value;

  const recipe = {
    id: new Date().getTime(),
    title: title,
    time: time,
    steps: steps,
    image: image,
  };
  addRecipe(recipe);
  console.log(recipe);
}

//function to add recipe
function addRecipe(recipe) {
  recipeItems.push(recipe);
  setToLocalStorage();
}

// function to save data in local storage
function setToLocalStorage() {
  const str = JSON.stringify(recipeItems);
  localStorage.setItem("Recipes", str);
  //   updateMovieUI();
}

// Function to get data from localStorage
function getFromLocalSorage() {
  const str = localStorage.getItem("Recipes");
  if (!str) {
    recipeItems = [];
  } else {
    recipeItems = JSON.parse(str);
  }
  // updateMovieUI();
  console.log(recipeItems);
}
