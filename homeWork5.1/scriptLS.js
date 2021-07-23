// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

//створюю форму
let form = document.createElement('form');
form.classList.add('registForm');
let registForm = document.getElementsByClassName('registForm');
//створюю інпут
let inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'username');
//створюю події для інпута (для практики)
inputName.oninput = (ev) => {
    // console.log(ev.target.value);
    console.log(this.value)
}
//створюю кнопку
let buttonLogIn = document.createElement('button');
buttonLogIn.innerText = 'Log In';

//подія кнопки - передати значення з інпута у localStorage та одночасно перейти на сторінку index2.html, на якій виводиться інфо з
// localStorag

buttonLogIn.addEventListener('click', function () {
    localStorage.setItem('inputName.value', JSON.stringify(inputName.value))
})
buttonLogIn.addEventListener('click', function () {
    location.href = "http://localhost:63342/JavaScript_homeWork/homeWork5.1/index2.html?_ijt=gpaaek6g5v7i9bj8k3203a40nb"
})


//присвоюю формі атрибути (для практики)
form.setAttribute('name', 'userName');
form.setAttribute('id','registration');
//засовую інпут та кнопку у форму
form.appendChild(inputName);
form.appendChild(buttonLogIn);

// Присвоєння подіґ для форми (для практики)
form.onsubmit = (ev) => {
    console.log(ev);
    console.log(ev.target.username)
    ev.preventDefault()
}

//Додаю форму на сторінку у боді
document.body.appendChild(form);


let nameFromInput = localStorage.getItem('inputName.value')