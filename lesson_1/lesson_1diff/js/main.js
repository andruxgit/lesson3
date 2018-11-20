function main() {
  'use strict';

  function getMultNumber(num) {
    let sum = 0,
      tmp;
    while (num) {
      tmp = num % 10;
      num = (num - tmp) / 10;

      if (sum > 0) {
        sum *= tmp;
      }
      if (sum == 0) {
        sum = tmp;
      }
    }
    return sum;
  }
  let num = 33721;
  let multNum = getMultNumber(num);

  console.log(multNum);
  
  multNum = multNum ** 3;
  let res = "первое число: " + String(multNum)[0] + "; второе число: " + String(multNum)[1];


  console.log(res);
  alert(res);
}
main();