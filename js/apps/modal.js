const modalWindow = document.querySelector('#myModal');
const popupLink = document.querySelector(".modalPopup");
const closeButton = document.querySelector(".close");

// window.addEventListener('resize', () => {
//   if (window.innerWidth >= 900) {
//     menu.classList.add('reveal');
//   }
// });

popupLink.onclick = function() {
    modalWindow.style.display = "block";
}
closeButton.onclick = function() {
    modalWindow.style.display = "none";
}

window.addEventListener('click', (clickOffClose) => {
    if (clickOffClose.target == modalWindow) {
        modalWindow.style.display = "none";
    }
});
