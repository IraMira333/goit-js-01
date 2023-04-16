const numberOfCategories = document.querySelectorAll(`.item`);

numberOfCategories.forEach((item, index) => {
  console.log(`Category: `, item.firstElementChild.textContent);
  console.log(`Elements: `, item.lastElementChild.children.length);
});
