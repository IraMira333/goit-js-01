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

const arrayIngredients = ingredients.map((ingredient) => {
  let liElem = document.createElement("li");
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  console.log(liElem);
  return liElem;
});
console.log(arrayIngredients);
const listIngredientsEl = document.querySelector("#ingredients");
console.log(listIngredientsEl);
listIngredientsEl.append(...arrayIngredients);
