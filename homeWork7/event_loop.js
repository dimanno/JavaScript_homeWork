

function myWorkDay(getUpTime,cb) {
    setTimeout(() => {
        console.log('Good morning чувак');
        if (getUpTime > 8) {
            console.log('Ти проспав!');
            cb ('Ти приїдеш не вчасно', null)
        } else {
            console.log('На тебе чекає JavaScript');
            cb (null, 'start');
        }
    },2000)
}

function makeShower(water, cb) {
    setTimeout(() => {
        if (water = true) {
            console.log('Прийми душ');
            cb (null, 'Dane');
        } else {
            console.log('mission inposible');
            cb ('continue', null);
        }
    }, 1000);
}

function prepareBreakfest(cb) {
    setTimeout(() => {
        console.log('Сніданок готовий');
        cb ('Dane');
    }, 500);
}

function takeBicycle(cb) {
    setTimeout(() => {
        console.log('беру двоколісного друга')
        cb ('Dane')
    }, 1500);
}

function goToWork(cb) {
    setTimeout(() => {
        console.log('оминаю львівські затори')
        cb ('Dane')
    }, 2500);
}

function startWork(cb) {
    setTimeout(() => {
        console.log('Hello JS');
        cb ('Dane');
    }, 800);
}

function callBackHell(cb) {
    setTimeout(() => {
        console.log('ох лайно! як багато роботи')
        cb ('Dane');
    }, 3000);
}

function needBreak(cb) {
    setTimeout(() => {
        console.log('Потребую перерви');
        cb ('Dane');
    }, 400);
}

function haveLanch(cb) {
    setTimeout(() => {
        console.log('Іду на обід');
        cb ('Dane');
    }, 700);
}

function finish() {
    setTimeout(() => {
        console.log('Робота успішно завершина - молодець')
    }, 1200);
}


myWorkDay(7, (err, startMyWorkDay) => {
    if (err) {
        console.error(err);
    } else {
        makeShower(true, (err, showerDone) => {
            if (err) {
                console.error(err);
            } else {
                prepareBreakfest((breakfest_dane) => {
                    takeBicycle((bicycleDane) => {
                        goToWork((goDane) => {
                            startWork((workDane) => {
                                callBackHell((cbDane) => {
                                    needBreak((breakDane) => {
                                        haveLanch((lanchDane) => {
                                            finish((done) => {
                                                console.log(done);
                                            })
                                            console.log(lanchDane);
                                        })
                                        console.log(breakDane);
                                    })
                                    console.log(cbDane);
                                })
                                console.log(workDane);
                            })
                            console.log(goDane);
                        })
                        console.log(bicycleDane);
                    })
                    console.log(breakfest_dane);
                })
            }
            console.log(showerDone);
        })
    };
    console.log(startMyWorkDay);
});


// makeShower();
// prepareBreakfest();
// takeBicycle();
// goToWork();
// startWork();
// callBackHell();
// needBreak();
// haveLanch();
// finish();










