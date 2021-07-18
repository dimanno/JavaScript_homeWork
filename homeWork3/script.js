// - створити функцію яка обчислює та повертає площу прямокутника висотою

// function areaRect(a, b) {
//     return a*b;}
// console.log(areaRect(10, 10));

// - створити функцію яка обчислює та повертає площу кола

// function areaCir(r) {
//     return 3.14 * Math.pow(r,2)
// }
// console.log(areaCir(5));

// - створити функцію яка обчислює та повертає площу циліндру

// function areaCyl(r,h) {
//     return 2*3.14*r*h
// }
// console.log(areaCyl(5, 10));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMaxNumbers() {
//     let num = arguments[0]
//     for (let i of arguments) {
//         if (arguments[i] < num) {
//             num = arguments[i]
//             return num
//         } else if (arguments[i] > num) {
//             num = arguments[i]
//             console.log(num)
//         }
//     }
// }

// console.log(minMaxNumbers(1, 2, 3, 4, 5, 6));

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

// function writeDivWithText(text) {
//     document.write(`
//             <div>
//                 <h1>${text}</h1>
//             </div>`)
// }
// writeDivWithText('Hello World')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function writeList(text) {
//     document.write(`
//         <div>
//             <ul>
//                 <li>${text}</li>
//                 <li>${text}</li>
//                 <li>${text}</li>
//             </ul>
//         </div>`)
// }
// writeList('JS is amazing')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function writeList2(textLi, countLi) {
//     document.write(`<ul>`)
//     for (let li = 0; li < countLi ; li++){
//
//         document.write(`<li>${textLi}</li>`)
//     }
//     document.write(`</ul>`)
// }
// let skill = {name: 'dima', age: 34, cyty: 'lviv'};
// writeList2(Object.keys(skill), 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function elementsList(array) {
//     document.write(`<ul>`)
//             for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//         document.write(`</ul>`)
// }
//
// let elements = [true, 23, 5, 'name', 45, false, 'age']
// elementsList(elements)