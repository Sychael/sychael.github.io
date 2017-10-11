const  hamburger = document.querySelector("nav img");
const  menu = document.querySelector("nav ul");
const  reveal = document.querySelector(".reveal");

dropdownMenu = () => menu.classList.toggle('reveal');

window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) {
    menu.classList.add('reveal');
  }
});

hamburger.addEventListener('click', dropdownMenu);
