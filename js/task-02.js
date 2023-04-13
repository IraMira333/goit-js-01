const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const liElem = document.createElement("li");
// liElem.textContent = ingredients[1];
// liElem.classList.add("item");
// console.log(liElem);
const arrayIngredients = [];
ingredients.forEach((ingredient) => {
  let liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  // console.log(liElem);
  arrayIngredients.push(liElem);
});
// console.log(arrayIngredients);
const listIngredientsEl = document.querySelector("#ingredients");
console.log(listIngredientsEl);
listIngredientsEl.append(...arrayIngredients);
