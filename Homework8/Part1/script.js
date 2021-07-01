setLocalStorage();

var logInForm = document.getElementById('login');
var accountForm = document.getElementById('account');
var logInSubmit = document.querySelector('#login [value="Log-in"]');
var logOutSubmit = document.querySelector('#account [value="Log-out"]');
var header = document.querySelector('#account h3');
var userName;

logInSubmit.addEventListener('click', logInHandler);
logOutSubmit.addEventListener('click', logOutHandler);

function logInHandler() {
    if (!localStorage.getItem('user')) {
      setLocalStorage();
    }

    var adminNames = localStorage.getItem('user');
    userName = document.querySelector('#login [name="userName"]');
    var check = adminNames.includes(userName.value);

    if (check && userName.value !== '') {
        logInForm.style.display = 'none';
        accountForm.style.display = 'flex';
        header.innerHTML = `Пользоваетль ${userName.value} вошел в систему`;
        return;
    } alert('ERROR! Try again!'); 
  }

  function logOutHandler() {
    logInForm.style.display = 'flex';
    accountForm.style.display = 'none';
    userName.value = '';
  }

  function setLocalStorage() {
    localStorage.setItem('user', 'admin, Admin');
  }