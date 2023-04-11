const inputUsername = document.querySelector(".input-username");
const inputPassword = document.querySelector(".input-password");
const submitButton = document.querySelector(".submit-button");
const spanIncorrect = document.querySelectorAll(".wrong-submit");

const username = "megumi";
const password = "megumi123";

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    buttonClick();
  }
});

function buttonClick() {
  if (inputUsername.value == username && inputPassword.value == password) {
    alert("login berhasil!");
    remove();
    inputUsername.classList.remove("incorrect-form");
    inputPassword.classList.remove("incorrect-form");
    spanIncorrect.forEach((e) => {
      e.classList.add("d-none");
    });
  } else {
    showErrorIncorrect();
    setTimeout(() => {
      remove();
    }, 700);
  }
}

function showErrorIncorrect() {
  inputUsername.classList.add("incorrect-animation");
  inputPassword.classList.add("incorrect-animation");
  inputUsername.classList.add("incorrect-form");
  inputPassword.classList.add("incorrect-form");
  spanIncorrect.forEach((e) => {
    e.classList.remove("d-none");
  });
}

function remove() {
  inputUsername.classList.remove("incorrect-animation");
  inputPassword.classList.remove("incorrect-animation");
}
