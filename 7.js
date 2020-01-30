var readlineSync = require('readline-sync');

do {
  arr = [];
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      arr.push('Fizz');
    } else if (i % 5 == 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
