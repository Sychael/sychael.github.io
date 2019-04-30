window.myFunction = function(event) {
  // reset all menu items
  document.querySelectorAll('ul li a.active-nav-link').forEach(function(item) {
  item.classList.remove('active-nav-link');
})
  // mark as active selected menu item
  event.target.classList.add("active-nav-link");
};
