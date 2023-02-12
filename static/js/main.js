// Initialization

// Simple Validation of passwords
const formButton = document.querySelector("#formButton");
formButton.setAttribute("disabled", "disabled");
const inputPass = document.querySelector("#password");
const inputPassConfirm = document.querySelector("#passwordConfirm");

const passwordValidation = (inputFirst, inputSecond, button) => {
  inputSecond.addEventListener("keyup", () => {
    if (inputFirst.value === inputSecond.value && inputFirst.value !== "" && inputSecond.value !== "") {
      button.removeAttribute("disabled");
    } else if (inputFirst.value !== inputSecond.value) {
      button.setAttribute("disabled", "disabled");
    }
  });
};
passwordValidation(inputPass, inputPassConfirm, formButton);

const surprise = document.querySelector("#a12397389213");
const photo = document.querySelector(".calc__nothing-important-block-about-project-photo");
let surpriseSum = 0;

function surpriseFunc(surprise, photo) {
  surprise.addEventListener("click", () => {
    surpriseSum++;
    if (surpriseSum >= 5) {
      photo.classList.add("calc__nothing-important-block-about-project-photo--active");
      document.querySelector(".container").classList.add("container--hidden");
    }
  });
}
surpriseFunc(surprise, photo);
