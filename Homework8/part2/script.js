var logInForm = document.getElementById('login');
var accountForm = document.getElementById('account');
var logInSubmit = document.querySelector('#login [value="Log-in"]');
var logOutSubmit = document.querySelector('#account [value="Log-out"]');
var header = document.querySelector('#account h3');
var userName;

logInSubmit.addEventListener('click', logInHandler);
logOutSubmit.addEventListener('click', logOutHandler);

function setCookie() {
  document.cookie = 'user=admin, Admin';
}

function logInHandler() {
    setCookie();
    var adminNames = findCookieValue('user');
    userName = document.querySelector('#login [name="userName"]');
    var check = adminNames.includes(userName.value);

    if (check && userName.value !== '') {
        logInForm.style.display = 'none';
        accountForm.style.display = 'flex';
        header.innerHTML = `Пользоваетль ${userName.value} вошел в систему`;
        return;
    } alert('ERROR! Try again!'); 
  }

  function findCookieValue(cookieName) {
    var allcookies = document.cookie;
    var pos = allcookies.indexOf(cookieName + "=");

    if (pos != -1) {
        var start = pos + cookieName.length + 1;
        var end = allcookies.indexOf(";", start);
        if (end == -1) end = allcookies.length;
        var value = allcookies.substring(start, end);
        value = decodeURIComponent(value);
        return value;
    }
};

  function logOutHandler() {
    logInForm.style.display = 'flex';
    accountForm.style.display = 'none';
    userName.value = '';
  }