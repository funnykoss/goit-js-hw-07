let counterValue = 0;

const increment = () => counterValue  += 1;
const decrement = () => counterValue -= 1;

const counterEl = document.querySelector('#value');
const incrementBtnEL = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementBtnEL = document.querySelector(
  '#counter button[data-action="decrement"]',
);

incrementBtnEL.addEventListener('click', () => {
  counterEl.innerText = increment();
});

decrementBtnEL.addEventListener('click', () => {
  counterEl.innerText = decrement();
});

