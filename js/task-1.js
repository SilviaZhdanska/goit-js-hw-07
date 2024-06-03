const categorieList = document.querySelectorAll(".item");
console.log("Number of categories:", categorieList.length);

categorieList.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});
