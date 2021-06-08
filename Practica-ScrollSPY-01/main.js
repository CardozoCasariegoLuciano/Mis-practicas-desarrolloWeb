const menuItems = document.querySelectorAll(".list-element");

const articulo1 = document.getElementById("a1");
const articulo2 = document.getElementById("a2");
const articulo3 = document.getElementById("a3");
const articulo4 = document.getElementById("a4");
const articulo5 = document.getElementById("a5");

const checkElement = (element) =>
  element.getBoundingClientRect().top > -10 &&
  element.getBoundingClientRect().top < 150;

const changeActive = (index) => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
  menuItems[index - 1].classList.add("active");
};

window.addEventListener("scroll", () => {
  if (checkElement(articulo1)) {
    changeActive(articulo1.dataset.index);
  }

  if (checkElement(articulo2)) {
    changeActive(articulo2.dataset.index);
  }

  if (checkElement(articulo3)) {
    changeActive(articulo3.dataset.index);
  }
  if (checkElement(articulo4)) {
    changeActive(articulo4.dataset.index);
  }

  if (checkElement(articulo5)) {
    changeActive(articulo5.dataset.index);
  }
});
