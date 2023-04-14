// const numberOfCategories = document.querySelectorAll(`.item`);
// console.log(`Number of categories: `, numberOfCategories.length);

// numberOfCategories.forEach((item, index) => {
//   console.log(`Category: `, item.querySelector(`h2`).textContent);
//   console.log(`Elements: `, item.querySelectorAll(`li`).length);
// });

const body = document.body;

const ul = body.children[1];
console.log(ul);
const numberOfCategories = Array.from(ul.children);

numberOfCategories.forEach((item, index) => {
  console.log(`Category: `, item.firstElementChild.textContent);
  console.log(`Elements: `, item.lastElementChild.children.length);
});
