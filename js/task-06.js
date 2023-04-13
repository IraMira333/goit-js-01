const inputEl = document.querySelector("#validation-input");

const allowedAmountOfSymbols = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onValidationInput);

function onValidationInput(event) {
  const amountSymbols = Array.from(inputEl.value).length;
  amountSymbols < allowedAmountOfSymbols
    ? inputEl.classList.add("valid") & inputEl.classList.remove("invalid")
    : inputEl.classList.add("invalid") & inputEl.classList.remove("valid");

  console.log(allowedAmountOfSymbols);
  console.log(amountSymbols);
  console.log(inputEl);
}
