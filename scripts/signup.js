//add Event Listener
form.addEventListener('submit', e => {
  e.preventDefault();
  isEmpty([user, email, password, password2]);
  checkLength(user, 3, 12);
  checkLength(password, 6, 12);
  checkEmail(email);
  checkPassword(password, password2);
  localStorage.setItem(user.value, password.value);

});