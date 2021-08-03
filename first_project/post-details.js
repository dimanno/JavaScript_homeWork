console.log(location.href);

const url = new URL(location);
console.log(url);
const jsonPost = url.searchParams.get('post')
console.log(jsonPost);
const post = JSON.parse(jsonPost);
const wrap = document.getElementById('wrap-post');

const id = document.createElement('h2');
id.innerText = `Post Id - ${post.id}, User Id - ${post.userId}`;
wrap.appendChild(id);


// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printList(list) {
//
//     console.log((list.value)); // выводим текущий элемент
//
//     if (list.next) {
//         printList(list.next); // делаем то же самое для остальной части списка
//     }
//
//     printList(list)
// }