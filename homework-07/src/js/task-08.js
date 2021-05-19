const refs = {
  input: document.querySelector('#controls input'),
  buttonRender: document.querySelector(
    '#controls button[data-action="render"]',
  ),
  buttonDestroy: document.querySelector(
    '#controls button[data-action="destroy"',
    ),
  bigBox: document.querySelector('#boxes')
};
let startWidth = 30;
let startHeight = 30;
const createBoxes = amount => {
    let num = refs.input.value;
    for (let i = 0; i < num; i += 1) {
        let addDiv = document.createElement("div");
        startWidth += 10;
        startHeight += 10;
        addDiv.style = 'background-color: ' + '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() + ';' + `width: ${startWidth}px; height: ${startHeight}px;`;
        refs.bigBox.appendChild(addDiv);
        console.log(refs.bigBox.children);
    }
}
 

const destroyBoxes = () => {
  divBoxesRef.innerHTML = '';
  refs.input.value = 0;
};
const divBoxesRef = document.querySelector('#boxes');
refs.buttonRender.addEventListener('click', () => {
  createBoxes(refs.input.value);
});

refs.buttonDestroy.addEventListener('click', destroyBoxes);



