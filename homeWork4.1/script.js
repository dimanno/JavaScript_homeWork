// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

function User(id, name, username, email, street, suite, city, zipcode, lat, lng ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.
    this.address.street = street;
    this.address.suit = suite;
    this.address.zipcode = zipcode;
    this.address.geo.lat = lat;
    this.address.geo.lng = lng;
}

let users = [
    new User(1,'Leanne Graham','Bret','Sincere@april.biz',
        'Kulas Light','Apt. 556,', 'Gwenborough', '92998-3874', '-37.3159', '81.1496')
]

console.log(users)

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }name