function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const bodyEl = document.body;

changeColorBtn.addEventListener("click", onchangeColorBtn);

function onchangeColorBtn(event) {
  colorName.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorName.textContent;
}
