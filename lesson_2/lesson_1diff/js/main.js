function main() {
  'use strict';
  let week = ["Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота", "Воскресенье"
  ];

  let strDaysWeek = '';
  let currentDay = 5;
  let classDayWeek = '';

  for (let i = 0; i < 7; i++) {
    //определение дня и добавление соответствующего класса
    classDayWeek = 'day';
    classDayWeek += (i > 4) ? ' day-weekend' : '';
    classDayWeek += (i == currentDay) ? ' day-current' : '';
    // добавление дня к общей строке
    strDaysWeek += `<p class="${classDayWeek}">${week[i]}</p>`;
    //обнуление временной строки
    classDayWeek = '';
  }
  return strDaysWeek;
}

// вывод на экран дней недели



// document.body.innerHTML += '<div id = "content"></div>';

let mydiv = document.createElement('div');
mydiv.id = 'content';
mydiv.innerHTML = main();
document.body.appendChild(mydiv);

// let newDiv = document.getElementById('content');
// newDiv.innerHTML = main();





function main2() {
  let arr = ['3949798', '44874989', '778987498',
    '198798798', '849879898', '338798748', '197887987'
  ];
 
  for (let i = 0; i < 7; i++) {
    // console.log(arr[i]);

    if (arr[i][0] == 3 || arr[i][0] == 7){

      console.log(arr[i]);
    }

  }
}
main2();