const itemlist = document.querySelectorAll("li.item");
console.log(`В списке ${itemlist.length} категории.`);
itemlist.forEach((num) =>
  console.log(
    `Категория: ${num.firstElementChild.textContent}
      Количество элементов: ${num.querySelectorAll("li").length}`
  )
);
