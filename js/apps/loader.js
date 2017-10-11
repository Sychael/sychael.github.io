const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const loader = document.querySelector('.loader');

loader.style.display= "block";
header.style.display = "flex";
main.style.display = "none";
footer.style.display = "none";

function showPage() {
  loader.style.display = "none";
  main.style.display = "block";
  footer.style.display = "block";
}

setTimeout(showPage, 600);
