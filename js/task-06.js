const inputEl = document.querySelector("#validation-input");

const allowedAmountOfSymbols = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", onValidationInput);

function onValidationInput(event) {
  const amountSymbols = inputEl.value.length;
  amountSymbols === allowedAmountOfSymbols
    ? inputEl.classList.add("valid") & inputEl.classList.remove("invalid")
    : inputEl.classList.add("invalid") & inputEl.classList.remove("valid");

  console.log(allowedAmountOfSymbols);
  console.log(amountSymbols);
  console.log(inputEl);
}
