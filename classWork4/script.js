// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientsList = [
    new Client(1, 'suzi', 'adams', 'suz@com', 97239586, ['milk', 'meat', 'water', 'juce']),
    new Client(2, 'lusi', 'pops', 'lus@com', 97694584, ['milk', 'meat', 'water',]),
    new Client(3, 'masha', 'luks', 'luk@com', 98374246, ['sossage', 'milk', 'meat', 'water', 'juce']),
    new Client(4, 'pavlo', 'lunic', 'pav@com', 96092938, ['milk']),
    new Client(5, 'obri', 'orbita', 'ob@com', 93667800, ['milk', 'meat']),
    new Client(6, 'luk', 'kruasan', 'kul@com', 97988884, ['milk', 'meat', 'bread', 'water', 'juce', 'soup', 'capuchino']),
    new Client(7, 'david', 'lomi', 'dav@com', 97112356, ['milk', 'meat', 'water', 'juce']),
    new Client(8, 'ivan', 'kartus', 'kar', 96743278, ['milk', 'meat', 'water', 'juce', 'cofe', 'papper', 'rice']),
    new Client(9, 'odri', 'baby', 'od@com', 95778744, ['milk', 'meat', 'water', 'juce']),
    new Client(10, 'robert', 'robin', 'rob@com', 97075558, ['milk', 'water', 'juce']),
];


let sort = clientsList.sort(function (client1, client2) {
    return client1.order.length - client2.order.length;
});
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, produce, year, maxSpeed, v,) {
    this.model = model;
    this.produce = produce;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.v = v;
    this.driver = function () {
        console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину');
    }
    this.info = function () {
        console.log(cars)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (newDriver) {
        this.driver = newDriver
    }
};

let driver = {
    name: "super driver",
    age: 30
}

let cars = new Car('X7', 'BMW', 2020, 280, 3.0,);

cars.driver();
cars.info();
cars.increaseMaxSpeed(50);
cars.changeYear(2021);
cars.addDriver('Tadey');
console.log(cars);


// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, produce, year, maxSpeed, v,) {
//         this.model = model;
//         this.produce = produce;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.v = v;
//         this.driver = function () {
//         console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину');
//     }
//     this.info = function () {
//         console.log(cars2)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (newDriver) {
//         this.driver = newDriver
//     }
// }
// }
//
// let cars2 = new Car('S', 'tesla', 2020, 280, 'electro',);
//
// cars2.driver();
// cars2.info();
// cars2.increaseMaxSpeed(50);
// cars2.changeYear(2021);
// cars2.addDriver('Tadey');
// console.log(cars2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popel {
        name;
        age;
        sizeLeg
    constructor(name, age, sizeLeg) {
        this.name = name;
        this.age = age;
        this.sizeLeg = sizeLeg;
    }
}

let popels = [
    new Popel('Suzi', 16, 36),
    new Popel('Julia', 17, 31),
    new Popel('Marta', 24, 32),
    new Popel('Odri', 42, 34),
    new Popel('Martela', 32, 37),
    new Popel('Sindi', 19, 38),
    new Popel('Nensi', 65, 39),
    new Popel('Faina', 20, 40),
    new Popel('Lusi', 28, 41),
    new Popel('Katrin', 34, 42),
]

class Prince extends Popel {

    constructor(name, age, sizeLeg) {
        super(name, age, sizeLeg);
    }
}
let men = new Prince('Don Juan', '22', 36);

for (let newPopel of popels) {
    if (newPopel.sizeLeg === men.sizeLeg) {
        console.log(newPopel.name + ' - ' + men.name)
    }
}

let findPopel = popels.find(function (correctSize){
   for (let newPopel of popels) {
        if (newPopel.sizeLeg === men.sizeLeg) {
            return newPopel
        }
    }
})
console.log(findPopel)