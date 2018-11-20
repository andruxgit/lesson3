function main() {

  'use strict';
  let money = '';
 do {
   money = prompt("Ваш бюджет на месяц?", "0");
  if (+money <= 0) {
    alert('Введите значение больше 0')
  } 
 } while (+money <= 0);
  
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

  //первый вариант 
  // for (let count = 0; count < 2;) {
  //   let answerStr = prompt("Введите обязательную статью расходов вэтом месяце", "");
  //   let answerNum = prompt("Во сколько обойдется?", "0");

  //   // в случае отмены ввода названия статьи бюджета - присваивается пустая строка
  //     answerStr = (typeof (answerNum) == 'string') ? answerStr : '';  
  //   // в случае отмены ввода числа - присваивается пустая строка 
  //     answerNum = ((typeof (answerNum)) == 'string') ? +answerNum : '' ; 

  //   // в случае пустой строки или строки больше 50 символов требуется повтор ввода
  //   if (answerStr != '' && answerStr.length < 50 && answerNum > 0) {
  //     appData.expenses[answerStr] = answerNum;
  //     count += 1;
  //   } else {
  //     alert("Введите корректные данные");
  //   }
  // }

  //Второй вариант  
  // let count = 0;
  // while (count < 2) {
  //   let answerStr = prompt("Введите обязательную статью расходов вэтом месяце", "");
  //   let answerNum = prompt("Во сколько обойдется?", "0");

  //   // в случае отмены ввода названия статьи бюджета - присваивается пустая строка
  //     answerStr = (typeof (answerNum) == 'string') ? answerStr : '';  
  //   // в случае отмены ввода числа - присваивается null 
  //     answerNum = ((typeof (answerNum)) == 'string') ? +answerNum : '' ; 
  //     console.log(answerNum) ;

  //   // в случае пустой строки или строки больше 50 символов требуется повтор ввода
  //   if (answerStr != '' && answerStr.length < 50 && answerNum > 0) {
  //     appData.expenses[answerStr] = answerNum;
  //     count += 1;
  //   } else {
  //     alert("Введите корректные данные");
  //   }
  // }

  //третий вариант
  let count = 0; 
  do {
    let answerStr = prompt("Введите обязательную статью расходов вэтом месяце", "");
    let answerNum = prompt("Во сколько обойдется?", "0");

    // в случае отмены ввода названия статьи бюджета - присваивается пустая строка
      answerStr = (typeof (answerNum) == 'string') ? answerStr : '';  
    // в случае отмены ввода числа - присваивается пустая строка
      answerNum = ((typeof (answerNum)) == 'string') ? +answerNum : '' ; 
    

    // в случае пустой строки или строки больше 50 символов требуется повтор ввода
    if (answerStr != '' && answerStr.length < 50 && answerNum > 0) {
      appData.expenses[answerStr] = answerNum;
      count += 1;
    } else {
      alert("Введите корректные данные");
    }

  } while (count < 2);
  
  //вывод в консоль данных о основных статьях расхода
  console.log(appData.expenses);

  //расчет бюджета в день и вывод его в мод.окно 
  let calcBalansDay = (+appData.balance) / 30; 
  alert("Ваш бюджет на день составляет" + " - " + calcBalansDay);

}
main();