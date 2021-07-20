// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let randomArr = function (arraySize,) {
//     let array = []
//     for (let i = 0; i<arraySize; i++) {
//         array.push(Math.round(Math.random()*100))
//     }
// }
// randomArr(5);

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

let randomArr = function (arraySize, maxNumber, minNumber) {
    let array = []
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.round(Math.random() * (maxNumber-minNumber) + minNumber))
    }
    return array
}
array = randomArr(10, 200, 100);

console.log(array);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sort = array.sort(function (a, b){
    return a-b
})

console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

// let filter = array.filter(function (value) {
//     if (value % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// })

// Варіант 2 (оптимізований)
let filter = array.filter(function (value) {
    return value % 2 === 0
})

console.log(filter)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

let changeElement = array.map(function (value){
    return value + ''
})

console.log(changeElement)
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone){
    this.id = id
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    new User(33, 'Pavlo','Push', 'pav@com',39485753),
    new User(20, 'Juli','Robis', 'rob@com',39485753),
    new User(24, 'Kolya','Kokos', 'kok@com',39485753),
    new User(7, 'Rebeka','Karon', 'pakar@com',39485753),
    new User(9, 'Raul','Gonsales', 'gon@com',39485753),
    new User(12, 'Suzi','Rubin', 'rub@com',39485753),
    new User(1857, 'Katrin','Cat', 'cat@com',39485753),
    new User(564, 'Odri','Orbi', 'or@com',39485753),
    new User(2, 'Tom','Krus', 'kru@com',39485753),
    new User(45, 'David','Forest', 'for@com',39485753),
];

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню

let filterUser = users.filter(function (user) {
    return user.id % 2 === 0
}).sort(function (a,b) {
    return a.id-b.id
})
console.log(filterUser)