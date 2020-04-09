const form = document.querySelector('form');
const user = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//functions

function isEmpty(input) {

  input.forEach(entry => {
    if (entry.value === '') {
      showError(entry, 'Campo não pode ser vazio');
    } else {
      showSuccess(entry);
    }
  });
}

// check if its in the correrct length

function checkLength(input, min, max) {
  const entry = input.value.length;
  if (entry == 0) {

  } else if (entry < min) {
    showError(input, `Tem que ter ao menos ${min} caracteres`);
  } else if (entry > max) {
    showError(input, `Tem que ter no maximo ${max} caracteres`);
  } else {
    showSuccess(input);
  }
}

//check email is valid

function checkEmail(input) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(input.value.toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, 'Email inválido');
  }

}

//check password is equal

function checkPassword(input1, input2) {
  if (input2.value === input1.value) {
    showSuccess([input1, input2]);
  } else {
    showError(input2, 'As senhas não são iguais')
  }
}
//show success 

function showSuccess(input) {
  if (input.parentElement !== undefined) {
    const parentClass = input.parentElement.classList;
    if (parentClass.contains('error')) {
      parentClass.remove('error');
      parentClass.add('success');
    } else {
      parentClass.add('success');
    }
  }
}

//show Error 
function showError(input, message) {
  input.parentElement.classList.add('error');
  input.parentElement.querySelector('small').innerText = `${message}`;
}