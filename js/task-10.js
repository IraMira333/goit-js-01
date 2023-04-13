function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  containerDivsEl: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  amountOfDiv: document.querySelector("#controls").firstElementChild,
};

refs.createBtn.addEventListener("click", createBoxes);

refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = refs.amountOfDiv.value;
  const arrayDivs = [];

  for (let index = 0; index < amount; index += 1) {
    const divEl = document.createElement("div");
    const newWidth = 30 + index * 10;
    const newHeight = 30 + index * 10;
    divEl.style.width = newWidth + "px";
    divEl.style.height = newHeight + "px";
    divEl.style.backgroundColor = getRandomHexColor();

    arrayDivs.push(divEl);
  }

  refs.containerDivsEl.append(...arrayDivs);
}

function destroyBoxes() {
  refs.containerDivsEl.innerHTML = "";
}
