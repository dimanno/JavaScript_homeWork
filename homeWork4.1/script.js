// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
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

function User(id, name, username, email, street, suite, city, zipcode, phone, companyName, catchPhrase, bs, lat, lng) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = new Address(street, suite, city,zipcode,lat,lng)
    this.phone = phone;
    this.company = new Company(companyName, catchPhrase, bs)

}

function Address(street, suite, city, zipcode, lat, lng){
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = new Geo(lat, lng);
}

function Geo(lat, lng) {
    this.lat = lat;
    this.lng = lng;
}

function Company (companyName, catchPhrase, bs) {
    this.companyName = companyName;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
}

let users = new User(1,'Leanne Graham','Bret','Sincere@april.biz', 'Kulas Light', 'Apt. 556,','Gwenborough','92998-3874', '1-770-736-8031 x56442',
     'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets', '-37.3159', '81.1496');

console.log(users)

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :

    class Tag {
        name
        actiot


        constructor(name, actiot, atrrName1, atrrAction1, attrName2, attrtAction2, atrrName3, atrrAction3) {
            this.name = name;
            this.actiot = actiot;
            this.attributs = [
                new Attribut1(atrrName1, atrrAction1),
                new Attribut2(attrName2, attrtAction2),
                new Attribut3(atrrName3, atrrAction3)
            ]
        }
    }

  class Attribut1 {
      atrrName1
      atrrAction1

      constructor(atrrName1, atrrAction1) {
          this.atrrName1 = atrrName1;
          this.atrrAction1 = atrrAction1;
      }
  }
class Attribut2 {
    attrName2
    attrtAction2

    constructor(attrName2, attrtAction2) {
        this.attrName2 = attrName2;
        this.attrtAction2 = attrtAction2;
    }
}

class Attribut3 {
    attrName3
    attrtAction3

    constructor(attrName3, attrtAction3) {
        this.attrName3 = attrName3;
        this.attrtAction3 = attrtAction3;
    }
}

const tag = new Tag('a', 'призначений для створення посилань', 'title', 'Додає підказку до тексту посилання', 'href',
    'Задає адресу документа, на який слід перейти', 'name', 'Встановлює імя якоря всередині документа');
console.log(tag);
// new Tags('span')



// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
//
//
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
