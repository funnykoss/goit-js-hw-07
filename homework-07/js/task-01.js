const categoriesItemEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesItemEl.length} категории.`);
const findCategoryesEl = category => {
    const itemTitleEl = category.querySelector('h2');
    const categoryTitel = itemTitleEl.textContent;
    const numberOfcategories = category.querySelectorAll('li').length;
    return `-Категория:${categoryTitel}
    - Количество элементов:${numberOfcategories}`;
};

categoriesItemEl.forEach(category => console.log(findCategoryesEl(category)));

  



