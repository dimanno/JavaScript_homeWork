// - створити функцію яка приймає масив та виводить його

// let array = [1,2,3,4,5,6];

function printArray(arr) {
    console.log(arr)
}
// printArray(array);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію. 

// let randomArr = function (arraySize, maxNumber) {
//     let array = []
//     for (let i = 0; i<arraySize; i++) {
//         array.push(Math.round(Math.random()*maxNumber))
//     }
//     printArray(array)
// }
// randomArr(5, 15);
// randomArr(7, 30);
// randomArr(20, 10);


// - створити функцію яка приймає три числа та виводить найменьше.

// спосіб 1

// function minNumb(n1,n2,n3) {
//     if (n1 < n2 && n1 < n3){
//         console.log(n1);
//         return n1;
//     }else if (n2 < n3 && n2 < n1){
//         console.log(n2);
//         return n2;
//     }else{
//         console.log(n3);
//         return n3;
//     };
// };
//
// minNumb(34,16,28);

// спосіб 2

// function min(a, b, c) {
//     let minNumber = arguments[0];
//     for (let numElement of arguments) {
//         if (numElement<minNumber) {
//             minNumber=numElement
//         }
//     }
//     return minNumber
// }
//
// console.log(min(23,56,59,))

// спосіб 3

// function min() {
//     let result = arguments[0];
//     for (let i in arguments) {
//         if (arguments[i]<result) {
//             result=arguments[i]
//         }
//     }
//     return result
// }
// console.log(min(23,87,28));

// - створити функцію яка приймає три числа та виводить найбільше.

// Спосіб 1

// function maxNumber(n1, n2, n3) {
//     if (n1>n2 && n1>n3) {
//         return n1
//     } else if (n2>n3 && n2>n1) {
//         return n2
//     } else {
//         return n3
//     }
// }
//  console.log(maxNumber(23,13,45))

// спосіб 2

// let max = function (num1, num2, num3) {
//     let result = arguments[0]
//     for (let number  of arguments) {
//         if (number>result){
//             result = number
//         }
//     }
//     return result
// }
// console.log(max(45,98,34));

// спосіб 3

// function max() {
//     let result = arguments[0];
//     for (let i in arguments) {
//         if (arguments[i]>result) {
//             result=arguments[i]
//         }
//     }
//     return result
// }
// console.log(max(23,87,28));

// - створити функцію яка повертає найбільше число з масиву

// function bigestNumArr(array) {
//     let max = array[0];
//     for (let maxElement of array) {
//        if (maxElement > max)
//            max = maxElement
//     }
//     return max;
// }
// let maxNumber = [12,43,23,2,45,1,67,32];
// console.log(bigestNumArr(maxNumber));

// - створити функцію яка повертає найменьше число з масиву

// function funMin(array) {
//     let min = array[0];
//     for (let minElement of array) {
//         if (minElement < min)
//             min = minElement
//     }
//     return min;
// }
// let minNumber = funMin([12,43,23,2,45,1,67,32]);
// console.log(minNumber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function plusNum(arr) {
//     let i = 0
//     for (let arrElement of arr) {
//         i += arrElement
//     }
//     return i
// }
//
// let result = plusNum([1,2,3,4]);
// console.log(result);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arMean = function (arr) {
//     let i = 0
//     for (let arrElement of arr) {
//         i += arrElement / arr.length
//     }
//     return i
// }
// printArray(arMean([1,2,3,4,5]))



// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function getKeys(dict)
// {
//     for (let i = 0; i < dict.length; i++) {
//         let dictElement = dict[i];
//        console.log(Object.keys(dictElement))
//     }
// }
// let object1 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// getKeys(object1)



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// function getValues(dict) {
//     for (let i = 0; i < dict.length; i++) {
//         const dictElement = dict[i];
//         console.log(Object.values(dictElement))
//     }
// }
// let object2 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// getValues(object2)


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// function plusIndex(in1, in2) {
//     let result = []
//     for (let i = 0; i < Math.min(in1.length, in2.length); i++) {
//         result.push(in1[i]+in2[i])
//     }
//     return result
// }
//
// let numbers1 = [22,14,2,5,10, 77, 34454, 1, 1, 111];
// let numbers2 = [1,2,3,4,5];
//
// printArray(plusIndex(numbers1, numbers2));

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.


// Спосіб 1

// let array1 = ['a', 'b', 'c'];
// for (let i = 0; i < 3; i++) {
//     array1.push(i+1)
// }

// console.log(array1)

// - Дан масив . Зробіть з нього новий масив [3, 2, 1].

// let numbers = [1, 2, 3];
// numbers.reverse();
// console.log(numbers);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let numb3 = ['a', 'b', 'c'];
// for (let i = 3; i < 6; i++){
//     numb3.push(i+1)
// }

// console.log(numb3);

// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let  array3 = [1,2,3];
// for (let i = 6; i >= 4; i--) {
//     array3.unshift(i)
// }

// printArray(array3)

// Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

let array4 = [1, 2, 3, 4, 5];

// array4.splice(0,3)
 // printArray(array4)

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// array4.splice(2,3)
// printArray(array4)

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

// array4.splice(3,2)
// array4.push('a', 'b', 'c')
// printArray(array4)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let array5 = [23,45,22,88,98,12,14,13,17,48];
// let newArray = []
// for (let number of array5) {
//     if (number%2 === 0) {
//         newArray.push(number)
//     }
// }
//  printArray(newArray)

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array5 = [23,45,22,88,98,12,14,13,17,48];
// let newArray = []
// for (let number of array5) {
//     newArray.push(number)
// }
// printArray(newArray)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let  array6 = [ 'a', 'b', 'c'];
// let word = ''
// for (let i = 0; i < array6.length; i++) {
//     word = word + array6[i]
// }
// printArray(word)

// За допомогою циклу while зібрати всі букви в слово.

// let i = 0;
// let word = ''
// while (i<array6.length) {
//     word = word + array6[i]
//     i++
// }
// printArray(word)

// За допомогою циклу for of зібрати всі букви в слово.
// let word =''
// for (let string of array6) {
//     word = word + string
// }
// printArray(word)


