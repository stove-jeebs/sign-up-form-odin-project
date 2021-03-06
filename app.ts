const password = document.querySelector("#password") as HTMLInputElement;
const repeat = document.querySelector("#confirm") as HTMLInputElement;
const submit = document.querySelector("#submit") as HTMLButtonElement;
const inputsContainer = document.querySelector(
  "#inputs-container"
) as HTMLDivElement;

const inputs = document.querySelectorAll(
  "input"
) as NodeListOf<HTMLInputElement>;

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    password.value != repeat.value ||
    password.value.length == 0 ||
    repeat!.value.length == 0
  ) {
    password.style.borderColor = "red";
    inputsContainer.classList.add("password-not-match");
    repeat.style.borderColor = "red";
  }
});
