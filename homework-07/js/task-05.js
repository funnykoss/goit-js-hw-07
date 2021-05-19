const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  nameOutput.innerText = nameInput.value ? nameInput.value : 'незнакомец';
});
