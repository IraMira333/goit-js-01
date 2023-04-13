const refs = {
  decrementBtn: document.querySelector(`[data-action='decrement']`),
  incrementBtn: document.querySelector(`[data-action='increment']`),
  counterBtn: document.querySelector("#value"),
};
console.log(refs.counterBtn.textContent);
let couterValue = 0;
console.log(couterValue);
refs.decrementBtn.addEventListener("click", () => {
  console.log(`Minus one`);
  couterValue -= 1;
  refs.counterBtn.textContent = couterValue;
  console.log(couterValue);
});
refs.incrementBtn.addEventListener("click", () => {
  console.log(`Plus one`);
  couterValue += 1;
  refs.counterBtn.textContent = couterValue;
  console.log(couterValue);
});
