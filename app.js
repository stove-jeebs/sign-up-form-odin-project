"use strict";
const password = document.querySelector("#password");
const repeat = document.querySelector("#confirm");
const submit = document.querySelector('#submit');
const inputsContainer = document.querySelector('#inputs-container');
submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (password.value != repeat.value) {
        password.style.borderColor = "red";
        inputsContainer.classList.add("password-not-match");
        repeat.style.borderColor = "red";
    }
});
