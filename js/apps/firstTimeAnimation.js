const animation = document.querySelectorAll('.animate');


if (animation) {
  removeAnimation = () => animation.classList.remove(animation);
}

window.addEventListener('load', removeAnimation);

// if (typeof(Storage) !== "undefined") {
//                 // Code for localStorage/sessionStorage.
//                 if(localStorage.isFirstLoadComplete==="false"){
//
//                     localStorage.setItem("isFirstLoadComplete", "true");
//                   }
