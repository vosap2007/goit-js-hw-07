const inputEl = document.querySelector("#validation-input");
/*const dataLengthEl = document.querySelector("[data-length]");*/

inputEl.addEventListener("blur", onInputBlur);
/*inputEl.addEventListener("input", onInputChange);*/

/*function onInputChange(event) {
  console.log(event.currentTarget.value);
}*/
function onInputBlur() {
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
  if (inputEl.value.length != inputEl.dataset.length) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
  if (inputEl.value.length == 0) {
    inputEl.classList.remove("invalid");
  }
}

/*<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>;*/
