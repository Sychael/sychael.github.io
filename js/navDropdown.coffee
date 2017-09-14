hamburger = document.querySelector("nav img")
menu = document.querySelector("nav ul")
reveal = document.querySelector(".reveal")

dropdownMenu = ->
  menu.classList.toggle('reveal')

hamburger.addEventListener('click', dropdownMenu)
