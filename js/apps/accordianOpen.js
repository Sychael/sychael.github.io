const display = document.querySelector(".display");
const caron = document.querySelector(".accordian");
const panel = document.querySelector(".panel");

accordianOpen = () => panel.classList.toggle('display');

caron.addEventListener('click', accordianOpen);
