const inputEl = document.querySelector("#name-input");
const titleSpanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  titleSpanEl.textContent = event.currentTarget.value;

  if (inputEl.value.length  === 0) {
    titleSpanEl.textContent  = 'незнакомец';
  }
};
