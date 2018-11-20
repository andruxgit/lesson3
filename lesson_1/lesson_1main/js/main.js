function main() {
  'use strict';

  let money = prompt("Ваш бюджет на месяц?", "0");
  let time = prompt("Введите дату в формате YYYY-MM-DD", "2018-01-31");

  let appData = {
    balance: 0,
    timeData: '',
    expenses: {},
    optionalExpenses: {},
    savings: false,
    income: []
  };

  appData.balance = money;
  appData.timeData = time;

  let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
  let numAnswer1 = prompt("Во сколько обойдется?", "0");

  let answer2 = prompt("Введите обязательную статью расходов в этом месяце", "");
  let numAnswer2 = prompt("Во сколько обойдется?", "0");

  appData.expenses = {
    [answer1]: numAnswer1,
    [answer2]: numAnswer1
  };
  console.log(appData.expenses);
  let calcBalansDay = (+appData.balance) / 30;

  alert("Ваш бюджет на день составляет" + " - " + calcBalansDay);
}
main();