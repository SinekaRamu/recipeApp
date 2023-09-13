//Inialize the global vaiable
const cardBody = document.querySelector("#display-card");

const recipeCount = document.querySelector("#count");
recipeCount.innerText = "cardCount";
console.log("print");

updateForm();

function updateForm() {
  const form = document.querySelector("#recipe-form");
  form.addEventListener("submit", function (r) {
    r.preventDefault();
    // createId();
    console.log(sumbit);
  });
}
