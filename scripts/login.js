const formLogin = document.querySelector('.form-login');
const userLogin = document.querySelector('#username');
const passwordLogin = document.querySelector('#password');

//Function

function verifyLogin(login, password) {

  if (login.value === '') {

  } else if (password.value === localStorage.getItem(`${login.value}`)) {
    showSuccess(login);
    showSuccess(password);
  } else {
    showError(password, 'Usuário ou Senha incorretos');
  }
}

//Event Listener
formLogin.addEventListener('submit', e => {
  e.preventDefault();
  verifyLogin(userLogin, passwordLogin);

});