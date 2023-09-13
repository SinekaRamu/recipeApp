# Recipe App

Recipe App contains a form and card of the recipe. Form have a input element for title block, prepration time, steps for the recipe, image of the recipe and button to add the recipe as a card.

## Form Submit

Display the form input data in the console, while clicking submit

## Card design structure in javaScipt

```
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
```

## create card using form

added card using form input content and sumbit button
