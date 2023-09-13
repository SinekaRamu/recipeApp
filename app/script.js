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

const cardBox = document.createElement("div");
cardBox.setAttribute("class", "recipe-card");
cardBody.appendChild(cardBox);

const imageBox = document.createElement("div");
imageBox.setAttribute("class", "imageBox");

const img = document.createElement("img");
img.setAttribute("class", "img");
imageBox.append(img);

const contentBox = document.createElement("div");
contentBox.setAttribute("class", "contentBox");
cardBox.append(imageBox, contentBox);

const headerBox = document.createElement("div"); //flex header division
headerBox.setAttribute("class", "flex-box");

const title = document.createElement("h2");
title.innerText = "Title";
const time = document.createElement("div"); //flex header division
time.setAttribute("class", "flex");
headerBox.append(title, time);

const labelTt = document.createElement("h3");
labelTt.innerText = "Time Taken :";
const min = document.createElement("p");
min.innerText = "minutes";
time.append(labelTt, min);

const stepsBox = document.createElement("div"); //flex header division
const labelSt = document.createElement("h3");
labelSt.innerText = "Steps Todo :";
const steps = document.createElement("p");
steps.setAttribute("class", "stepsTodo");

steps.innerText = "procedure";
stepsBox.append(labelSt, steps);

const DeleteBtn = document.createElement("button"); //button to delete card
DeleteBtn.textContent = "delete";
DeleteBtn.addEventListener("click", function () {
  //   remove(recipe["id"]);
  console.log("remove");
});
contentBox.append(headerBox, stepsBox, DeleteBtn);
