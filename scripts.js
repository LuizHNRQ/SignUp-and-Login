const form = document.querySelector('form');
const user = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//functions

function isEmpty(input) {
  input.forEach(entry => {
    if (entry.value === '') {
      showError(entry, 'Cannot be Empty');
    } else {
      showSuccess(entry);
    }
  });
}

//show success or error

function showSuccess(input) {
  const parentClass = input.parentElement.classList;
  if (parentClass.contains('error')) {
    parentClass.remove('error');
    parentClass.add('success');
  } else {
    parentClass.add('success');
  }
}

function showError(input, message) {
  input.parentElement.classList.add('error');
  input.parentElement.querySelector('small').innerText = `${message}`;
}

//add Event Listener
form.addEventListener('submit', e => {
  e.preventDefault();
  isEmpty([user, email, password, password2]);
});