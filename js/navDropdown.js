// Generated by CoffeeScript 1.12.7
(function() {
  var dropdownMenu, hamburger, menu, reveal;

  hamburger = document.querySelector("nav img");

  menu = document.querySelector("nav ul");

  reveal = document.querySelector(".reveal");

  dropdownMenu = function() {
    return menu.classList.toggle('reveal');
  };

  hamburger.addEventListener('click', dropdownMenu);

}).call(this);
