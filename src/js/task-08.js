const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElmts = event.currentTarget.elements;
  const email = formElmts.email.value;
  const password = formElmts.password.value;
  if (email === "" || password === "") {
    alert("All fields must be filled!");
  }
  const formData = {
    email,
    password,
  };
  console.log("Data: ", formData);
  event.target.reset();
  //const formData = new FormData(event.curentTarget);
}
