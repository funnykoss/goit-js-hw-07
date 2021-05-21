const inputEl = document.querySelector('#validation-input');
const resetValidationСlasses = event =>
  event.currentTarget.classList.remove('invalid', 'valid');


const setValidationСlasses = event => {
  const el = event.currentTarget;
  const inputValidLength = Number(el.dataset.length);

  if (el.value.length === inputValidLength) {
    el.classList.add('valid');
    return;
  } else if (el.value.length === 0) {
el.classList.remove('invalid');
    return;
  } 
    el.classList.add('invalid');
  };
  
inputEl.addEventListener('focus', resetValidationСlasses);

inputEl.addEventListener('blur', setValidationСlasses);

