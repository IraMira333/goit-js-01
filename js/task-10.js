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
  const amount = Number(refs.amountOfDiv.value);
  const min = Number(refs.amountOfDiv.getAttribute("min"));
  const max = Number(refs.amountOfDiv.getAttribute("max"));

  if ((amount >= min) & (amount <= max)) {
  }
  const arrayDivs = [];

  for (let index = 0; index < amount; index += 1) {
    const divEl = document.createElement("div");
    const newSize = 30 + index * 10;

    divEl.style.width = newSize + "px";
    divEl.style.height = newSize + "px";
    divEl.style.backgroundColor = getRandomHexColor();

    arrayDivs.push(divEl);
  }

  refs.containerDivsEl.append(...arrayDivs);
}

function destroyBoxes() {
  refs.containerDivsEl.innerHTML = "";
  refs.amountOfDiv.value = "";
}
