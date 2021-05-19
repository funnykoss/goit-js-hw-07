const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsInsertEl = document.querySelector('#ingredients');
console.log(ingredientsInsertEl);

const makeIngredientsList = ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.innerText = ingredient;
    return ingredientEl;
};
const ingredientItemEl = ingredients.map(ingredient =>
    makeIngredientsList(ingredient),);


ingredientsInsertEl.append(...ingredientItemEl);
