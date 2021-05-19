const inputEl = document.querySelector('#validation-input');
const resetValidationСlasses = event =>
  event.currentTarget.classList.remove('invalid', 'valid');

const setValidationСlasses = event => {
  const el = event.currentTarget;
  const inputValidLength = Number(el.dataset.length);

  if (el.value.length !== inputValidLength) {
    el.classList.add('invalid');
    return;
  }

 el.classList.add('valid');
};

inputEl.addEventListener('focus', resetValidationСlasses);

inputEl.addEventListener('blur', setValidationСlasses);