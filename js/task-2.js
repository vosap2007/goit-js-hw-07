const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const element = ingredients.map((num) => {
  const newLi = document.createElement("li");
  newLi.textContent = num;

  return newLi;
});

const navEl = document.querySelector("ul");
navEl.append(...element);
