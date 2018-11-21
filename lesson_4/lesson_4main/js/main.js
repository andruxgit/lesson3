// function main() {

'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "2018-01-31");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let answerStr = prompt("Введите обязательную статью расходов вэтом месяце", ""),
        answerNum = prompt("Во сколько обойдется?", "0");

      if ((typeof (answerStr)) === 'string' && (typeof (answerStr)) != null &&
        (typeof (answerNum)) != null && answerStr != '' &&
        answerNum != '' && answerNum > 0 && answerStr.length < 50) {
        console.log('done');
        appData.expenses[answerStr] = answerNum;
      } else {
        alert("Введите корректные данные");
        i = i - 1;
      }
    }
    console.log(appData.expenses);
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget) / 30;
    alert("Ваш бюджет на день составляет" + " - " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
      //повтор вопроса в случае некоррктных данных
      while (isNaN(money) || money == "" || money == null) {
        save = +prompt("Какова сумма накоплений?");
        percent = +prompt("Под какой процент?");
      }
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 3; i++) {
      let answerStr = prompt("Статья необязательных расходов?", "");

      if ((typeof (answerStr)) === 'string' &&
        (typeof (answerStr)) != null && answerStr != '' && answerStr.length < 50) {

        appData.optionalExpenses[i] = answerStr;
      } else {

        alert("Введите корректные данные");
        i = i - 1;
      }

    }
    //вывод в консоль данных о необязательных статьях расхода
    console.log(appData.optionalExpenses);
  },

  chooseIncome: function () {

    let i = 0;
    while (i == 0) {
      let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', "");
      if (typeof (items) === 'string' && (typeof (items)) != null && items != '') {
        appData.income = items.split(',');
        // console.log(appData.income);
        appData.income.push(prompt('Может что-то ещё?', ''));

        if (typeof (items) === 'string' && (typeof (items)) != null && items != '') {
          appData.income.sort();
        }
        i++;

      } else {
        alert('Не корректные данные');
      }
    }

    console.log("appData.income:   " + appData.income);
    let strIncome = "Способы доп. заработка:";
    appData.income.forEach(function (item, i, arr) {
      strIncome += (i + 1) + ":  " + item + "; ";
    });

    alert(strIncome);

    for (let key in appData) {
      console.log('-' + key + ': ' + appData.key + '; ');
    }

  }
};

// }
//    main();