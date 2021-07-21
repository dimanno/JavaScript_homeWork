

console.log(document.getElementById("content"));
console.log(document.getElementById('rules'));

// -- замініть текст параграфа з id 'content' на будь-який інший

let content = document.getElementById('content');
content.innerHTML = '<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloribus facere laborum, minima numquam soluta voluptas. At explicabo iure saepe.</b>'
console.log(content)

// замініть текст параграфа з id 'rules' на будь-який інший

let rules = document.getElementById('rules');

rules.innerText =  'Змінив текст за ідентифікатором rules, у елементі div'
console.log(rules);

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на білий

let fonElements = document.body.children;
for (let fonElement of fonElements) {
    fonElement.style.background = 'red'
    fonElement.style.color = 'white'
}

// отримати весь список класів елемента з id=rules і вивести їх в console.log

let rules1 = document.getElementById('rules');
console.log(rules.classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь

let fc_rulesList = document.getElementsByClassName('fc_rules');
console.log(fc_rulesList);

// for (let fcRulesListElement of fc_rulesList) {
//     fcRulesListElement.addEventListener('click', (e)=> {
//         console.log(fcRulesListElement.textContent)
//     });
//     fcRulesListElement.addEventListener('click', (e)=> {
//         console.log(fcRulesListElement.style.background = 'silver')
//     });
//     }

// спосіб №2

// for (let fcRulesListElement of fc_rulesList) {
//     fcRulesListElement.onclick = () => {
//         console.log(fcRulesListElement.textContent)
//     }
//     fcRulesListElement.onclick = () => {
//         console.log(fcRulesListElement.style.background = 'silver')
//     }
// }

// поміняти колір тексту у всіх елементів fc_rules на червоний

for (let fcRulesListElement of fc_rulesList){
    console.log(fcRulesListElement.style.color = 'red')
}