function loadScript(url) {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.src = url;
  head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  loadScript('js/utilities/googleAnalytics.js');
  loadScript('js/utilities/time.js');
  loadScript('js/apps/loader.js');
  loadScript('/js/apps/navDropdown.js');
  loadScript('js/apps/accordianOpen.js');
  loadScript('/js/apps/footerDate.js');
  loadScript('js/apps/modal.js')
});
