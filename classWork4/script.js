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
        console.log('Їдемо зі швидкістю ' + this.maxSpid + ' на годину');
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
}

// let cars = new Car('X7', 'BMW', 2020, 280, 3.0,);
// cars.driver();
// cars.info();
// cars.increaseMaxSpeed(50);
// cars.changeYear(2021);
// cars.addDriver('Tadey');
// console.log(cars);


// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
    constructor(model, produce, year, maxSpeed, v,) {
        this.model = model;
        this.produce = produce;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.v = v;
    }
}