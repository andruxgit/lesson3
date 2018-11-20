function main() {
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
    savings: true
  };

  function chooseExpenses() {

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
  }
  chooseExpenses();

  //вывод в консоль данных о основных статьях расхода
  console.log(appData.expenses);

  //расчет бюджета в день и вывод его в мод.окно 
  function detectDayBudget() {
    appData.moneyPerDay = (+appData.budget) / 30;
    alert("Ваш бюджет на день составляет" + " - " + appData.moneyPerDay);

    //Определение уровня достатка
    function detectLevel(valMoney) {
      if (valMoney < 100) {
        console.log("Минимальный уровень достатка");
      } else if (valMoney > 100 && valMoney < 2000) {
        console.log("Средний уровень достатка");
      } else if (valMoney > 2000) {
        console.log("Высокий уровень достатка");
      } else {
        console.log("Произошла ошибка");
      }
    }
    detectLevel(appData.moneyPerDay);
  }

  detectDayBudget();

  //Определение дохода с депозита в месяц
  function checkSavings() {
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
  }
  checkSavings();

  //определение необязательных расходов
  function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
      let answerStr = prompt("Статья необязательных расходов?", "");
      // answerNum = prompt("Во сколько обойдется?", "0");

      if ((typeof (answerStr)) === 'string' && (typeof (answerStr)) != null &&
        answerStr != '' && answerStr.length < 50) {
        console.log('done');
        appData.optionalExpenses[i + 1] = answerStr;
      } else {
        alert("Введите корректные данные");
        i = i - 1;
      }

    }
    //вывод в консоль данных о необязательных статьях расхода
    console.log(appData.optionalExpenses);

  }
  chooseOptExpenses();



}

main();