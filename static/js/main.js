// Initialization

// Simple Validation of passwords
const formButton = document.querySelector("#formButton");
formButton.setAttribute("disabled", "disabled");
const inputPass = document.querySelector("#password");
const inputPassConfirm = document.querySelector("#passwordConfirm");

const passwordValidation = (inputFirst, inputSecond, button) => {
  inputSecond.addEventListener("keyup", () => {
    if (inputFirst.value === inputSecond.value) {
      button.removeAttribute("disabled");
    } else if (inputFirst.value !== inputSecond.value) {
      button.setAttribute("disabled", "disabled");
    }
  });
};
passwordValidation(inputPass, inputPassConfirm, formButton);
