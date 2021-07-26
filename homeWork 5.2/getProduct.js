// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар



// 1. Дыстаємо інпути
// const f1 = document.forms.getProduct;
//
// const nameInput = f1.productName;
// const quantityInput = f1.quantityProduct;
// const priceInput = f1.price;
// const imgInput = f1.pictures;

     // Оптимізований варіант дістати інпути

const {productName, quantityProduct, price, pictures} = document.forms.getProduct;
// дістаємо кнопку
const btn = document.getElementById('btn');
// Для ключа у localstorage присвоюємо змінну
const key = 'key';

// кнопці присвоюємо подію при якій будуть зберігатись значення інпутів
// Для цього створимо функцію, яка буде зберігати значення введенні в інпути у localstorage

const save = (productName, quantityProduct, price, pictures) => {
     const store = JSON.parse(localStorage.getItem(key)) || [];
    // створили змінну store яка дорівнює пустому масиву у який ми будемо пушити значення з інпутів
    //  збережені у локал сторідж, або вже існуючим даним (ключам) у локал сторедж, які дістаємо і парсаємо через
    //  JSON для подальшої їх обробки через JS
     store.push({id:Math.random(), productName, quantityProduct, price, pictures})
    // Запушили введені обєкти інпутів, які берігаються у локал сторідж + рандомну id
    localStorage.setItem(key, JSON.stringify(store))
    // Зберігаємо дані у localStorage, який приймає два аргументи - ключ та значення (value)
}

btn.onclick = () => {
   save(productName.value, quantityProduct.value, price.value, pictures.value)
}

