function validateForm() {
  var un = document.loginform.usr.value;
  var pw = document.loginform.pword.value;
  var username = "Sychael";
  var password = "Jesus1019";
  var url = "http://sychael-lawinger.local:5757/index.html";
  if (un === username && pw === password) {
    window.location = url;
  }
}

validateForm();


