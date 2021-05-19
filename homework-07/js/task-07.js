const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputChanges = event => {
    textEl.setAttribute('style', `font-size:${fontSizeControlEl.value}px`);
};
fontSizeControlEl.addEventListener('input', onInputChanges);
