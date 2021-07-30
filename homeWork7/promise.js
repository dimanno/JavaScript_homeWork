function myWorkDay(getUpTime) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Good morning чувак');
            if (getUpTime > 8) {
                console.log('Ти проспав!');
                reject ();
            } else {
                // console.log('На тебе чекає JavaScript');
                resolve ('На тебе чекає JavaScript');
            }
        },2000)
    })
};


function makeShower() {
        return new Promise (resolve => {
        setTimeout(() => {
            // console.log('Приймаю душ');
            resolve ('Приймаю душ');
        }, 1000);
    })
};

function prepareBreakfest() {
    return new Promise (resolve => {
        setTimeout(() => {
            // console.log('Снідаю');
            resolve('Снідаю');
        }, 500);
    })
}

function takeBicycle() {
    return new Promise( reselve => {
        setTimeout(() => {
            // console.log('Беру двоколісного друга');
            reselve ('Беру двоколісного друга');
        }, 1500);
    })
}

function goToWork() {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log('Оминаю львівські затори')
            resolve ('Оминаю львівські затори');
        }, 2500);
    })
}

function startWork() {
   return new Promise(resolve => {
       setTimeout(() => {
           // console.log('Hello JS');
           resolve('Hello JS');
       }, 800);
   })
}

function callBackHell() {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log('ох лайно! як багато роботи')
            resolve ('ох лайно! як багато роботи');
        }, 3000);
    })
}

function needBreak() {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log('Потребую перерви');
            resolve ('Потребую перерви');
        }, 400);
    })
}

function haveLanch() {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log('Іду на обід');
            resolve ('Іду на обід');
        }, 700);
    })
}

function finish() {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log('Робота успішно завершина - молодець');
            resolve('Робота успішно завершина - молодець');
        }, 1200);
    })
}

myWorkDay(7)
    .then((startDay) => {
        console.log(startDay);
        return makeShower();
    })
    .then((shower) => {
        console.log(shower);
        return prepareBreakfest();
    })
    .then((breakfest) => {
        console.log(breakfest)
        return takeBicycle();
    })
    .then((bicycle) => {
        console.log(bicycle);
        return goToWork();
    })
    .then((go)=> {
        console.log(go);
        return startWork();
    })
    .then((work)=> {
        console.log(work);
        return callBackHell();
    })
    .then((hardWork)=> {
        console.log(hardWork);
        return needBreak();
    })
    .then((breakW)=> {
        console.log(breakW);
        return haveLanch();
    })
    .then((lanch) => {
        console.log(lanch);
        return finish()
    })
    .catch((reason) => {
        console.log("********Проспав********");
        console.log(reason);
        console.log('********Проспав********');
    })
