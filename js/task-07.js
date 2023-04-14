const rangeInput = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");
textToChange.style.fontSize = rangeInput.value + "px";
console.log(rangeInput.value);

rangeInput.addEventListener("input", onRangeChange);
function onRangeChange(event) {
  textToChange.style.fontSize = `${event.currentTarget.value}px`;
}
