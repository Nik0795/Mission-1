'use strict';

let money = prompt("Ваш бютжет на месяц?");
let time = prompt("Введите дату в формате","YYYY-MM-DD");
let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");
let question3 = prompt("Введите обязательную статью расходов в этом месяце");
let question4 = prompt("Во сколько обойдется?");

console.log(money);
console.log(time);

let appData = {
    balance: money,
    timeData: time,
    expenses: {
        question1 : question2
},

    optionalExpenses:{},
    income: [],
    savings: false

};
console.log(appData.expenses);

alert(appData.balance / 30);

