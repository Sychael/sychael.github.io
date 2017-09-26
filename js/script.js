function loadScript(url) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.src = url;
  head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function() {
  loadScript('js/apps/googleAnalytics.js')
  loadScript('js/apps/loader.js')
  loadScript('/js/apps/navDropdown.js');
  loadScript('/js/apps/footerDate.js');
  loadScript('/js/apps/formLogin.js');
  loadScript('js/apps/modal.js')
});
