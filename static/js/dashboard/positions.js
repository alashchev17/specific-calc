// Preloader

(function () {
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("preloader--hidden");
      }, 1500);
    });
  }
})();

function createPosition() {
  let form = document.querySelector("#positions_form");
  let positionsBlock = document.querySelector(".positions__created");
  let position = document.querySelector(".positions__block-item");
  let input = document.querySelector(".positions__block-input");
  let value = "";

  form.addEventListener("submit", event => {
    event.preventDefault();
    // Проверка по всем элементам-должностям на уникальность имени
    let allPositions = document.querySelectorAll(".positions__block-item");
    let arrayAllPositions = Array.prototype.slice.call(allPositions);
    for (let i = 0; i < arrayAllPositions.length; i++) {
      if (input.value === arrayAllPositions[i].innerText) {
        alert("Введіть унікальну назву посади!");
        input.value = "";
        return;
      }
    }
    if (input.value.trim().length === 0 || input.value.trim() === "Посад немає") {
      alert("Введіть коректну назву посади!");
    } else {
      if (position.innerText === "Посад немає") {
        position.remove();
      }
      value = input.value;
      let newPosition = document.createElement("span");
      newPosition.classList.add("positions__block-item");
      newPosition.innerText = value;
      positionsBlock.appendChild(newPosition);
      input.value = "";
    }
  });
}

createPosition();
