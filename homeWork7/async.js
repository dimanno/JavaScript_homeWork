function myWorkDay(getUpTime) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Good morning чувак');
            if (getUpTime > 8) {
                console.log('Ти проспав!');
                reject ('Ти приїдеш не вчасно')
            } else {
                console.log('На тебе чекає JavaScript');
                resolve ();
            }
        },2000)
    })
};


function makeShower() {
    return new Promise (resolve => {
        setTimeout(() => {
            console.log('Прийми душ');
            resolve ();
        }, 1000);
    })
};

function prepareBreakfest() {
    return new Promise (resolve => {
        setTimeout(() => {
            console.log('Сніданок готовий');
            resolve();
        }, 500);
    })
}

function takeBicycle() {
    return new Promise( reselve => {
        setTimeout(() => {
            console.log('беру двоколісного друга');
            reselve ();
        }, 1500);
    })
}

function goToWork() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('оминаю львівські затори')
            resolve ();
        }, 2500);
    })
}

function startWork() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Hello JS');
            resolve();
        }, 800);
    })
}

function callBackHell() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('ох лайно! як багато роботи')
            resolve ();
        }, 3000);
    })
}

function needBreak() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Потребую перерви');
            resolve ();
        }, 400);
    })
}

function haveLanch() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Іду на обід');
            resolve ();
        }, 700);
    })
}

function finish() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Робота успішно завершина - молодець');
            resolve();
        }, 1200);
    })
}

async function workDay () {
    const day = myWorkDay(7);
    await makeShower();
    await prepareBreakfest();
}

workDay();