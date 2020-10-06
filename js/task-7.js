/*<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>*/
const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", onInput);

function onInput() {
  const size = inputEl.value;
  document.body.style.fontSize = size + "px";
}
