// - створити функцію яка приймає масив та виводить його

// let array = [1,2,3,4,5,6];

// function doArr() {
//     console.log(array)
// }
//
// doArr();

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

// function min() {
//     let result = arguments[0];
//     for (let i in arguments) {
//         if (arguments[i]>result) {
//             result=arguments[i]
//         }
//     }
//     return result
// }
// console.log(min(23,87,28));

// - створити функцію яка повертає найбільше число з масиву


// function bigestNumArr(array) {
//     let max = array[0];
//     for (let maxElement of array) {
//        if (maxElement > max)
//            max = maxElement
//     }
//     return max;
// };
// let maxNumber = bigestNumArr([12,43,23,2,45,1,67,32]);
// console.log(maxNumber);

// - створити функцію яка повертає найменьше число з масиву

// function funMin(array) {
//     let min = array[0];
//     for (let minElement of array) {
//         if (minElement < min)
//             min = minElement
//     }
//     return min;
// };
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