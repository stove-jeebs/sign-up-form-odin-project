"use strict";
const password = document.querySelector("#password");
const repeat = document.querySelector("#confirm");
const submit = document.querySelector("#submit");
const inputsContainer = document.querySelector("#inputs-container");
const inputs = document.querySelectorAll("input");
submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (password.value != repeat.value ||
        password.value.length == 0 ||
        repeat.value.length == 0) {
        password.style.borderColor = "red";
        inputsContainer.classList.add("password-not-match");
        repeat.style.borderColor = "red";
    }
});
