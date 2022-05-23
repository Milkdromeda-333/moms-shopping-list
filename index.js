// my global variables
let form = document.form
let input = document.form.input;
let submitBtn = document.form.submitBtn;
let fontResetBtn = document.getElementById("fontResetBtn");
let list = document.querySelector("ul");
let listItem = document.querySelector("li");
let myPlaceHolder = document.querySelector("#placeholder");

// my global event listeners

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  myPlaceHolder.remove();
  let inputValue = document.form.input.value;
  let newListItem = document.createElement("li");
  newListItem.textContent = inputValue;
  list.append(newListItem);
  form.reset();
  newListItem.addEventListener("click", (e) => e.target.remove());
});

fontResetBtn.addEventListener("click", function () {
  document.body.style.fontFamily = "var(--regular)";
  document.body.style.fontSize = "30px";
  input.style.fontFamily = "var(--regular)";
  input.style.fontSize = "25px";
});
