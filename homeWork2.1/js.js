// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу


let num = [4, 3.33, 56, 77, 3.14];
for (let nam2 of num) {
    console.log(nam2);
}
let abr = ['a', 'script', '55', 'java', 'cool'];
for (let abr2 of abr) {
    console.log(abr2);
}
let bul = [35, 'auto', 'info', true, false];
for (let bul2 of bul) {
    console.log(bul2);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let empty = [];
empty[0] = true;
empty[2] = "marianna";
empty[1] = 55;
empty[3] = "ivan";
empty[5] = false;
empty[4] = "tadey"

console.log(empty)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let block = 0; block < 10; block++ ){
    document.write(`<div style="width: 200px; background: darkcyan; color: white; height: 30px; margin: 3px">вивести 10 блоків</div>`)
};

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let block = 0; block < 10; block++ ){
    document.write(`<div style="width: 60px; background: green; color: white; height: 30px; margin: 3px; text-align: center">index - ${block}</div>`)
};

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let box = 0;
while (box < 20) {
    document.write(`<div style="width: 300px; background: green; color: white; height: 50px; margin: 3px; text-align: center"><h1>JavaScripc</h1></div>`);
    box++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let box1 = 0;
while (box1 < 20) {
    document.write(`<div style="width: 300px; background: blue; color: white; height: 50px; margin: 3px; text-align: center"><h1>Index - ${box1}</h1></div>`);
    box1++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let number = [4, 3.33, 56, 77, 3.14, 54, 235578, 568, 135, 98,];
for (let namber2 of number) {
    console.log(namber2);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let abc = ['a', 'script', '55', 'java', 'cool', 'false', 'save', 'city', '0', 'box'];
for (let abc2 of abc) {
    console.log(abc2);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let bus = [35, 'auto', 'info', true, false, 'address', 'speak', 44, 9, 100];
for (b = 0; b < bus.length; b++) {
    console.log(bus[b]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let masyv1 = [12, 'car', 'bicicle', true, 44, 678, false, 'forest', 90, 'mountain']
for (let i = 0; i < masyv1.length; i++) {
    if (typeof masyv1[i] === 'boolean'){
        console.log(masyv1[i]);
    }
}
// За допомогою if та typeof вивести тільки числові елементи

for (let i = 0; i < masyv1.length; i++) {
    if (typeof masyv1[i] === 'number'){
        console.log(masyv1[i]);
    }
}

// За допомогою if та typeof вивести тільки сирічкові елементи

for (let i = 0; i < masyv1.length; i++) {
    if (typeof masyv1[i] === 'string'){
        console.log(masyv1[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let study = [];
study[0] = 'world';
study[1] = 'peaple';
study[2] = true;
study[3] = 100;
study[4] = 22;
study[5] = '0';
study[6] = 'country';
study[7] = 200;
study[8] = false;
study[9] = 300;

for (let i = 0; i < study.length; i++) {
    console.log(study[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log('Step -', i);
    document.write(`<ul>
                        <li>Step: ${i}</li>
                    </ul>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let a = 0; a < 100; a++) {
    console.log('Step -', a);
    document.write(`<ul>
                        <li style="background: silver">Step: ${a}</li>
                    </ul>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i = i+2) {
    console.log('Step -', i);
    document.write(`<ul>
                        <li style="background: lightblue">Step: ${i}</li>
                    </ul>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let a = 0; a < 100; a++) {
    if (a%2 === 0) {
        console.log('Step -', a);
        document.write(`<ul>
                        <li style="background: lightgray">Step: ${a}</li>
                    </ul>`);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    for (let a = 0; a < 100; a++){
    if (a%2 === 1){
        console.log(`step :`, a);
        document.write(`<ul>
                        <li style="background: lightgreen">Step: ${a}</li>
                    </ul>`);
    }
};

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            user.adress = city
        }
    }
}
console.log(usersWithId)
