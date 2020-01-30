var readlineSync = require('readline-sync');
console.log('program to Convert Decimal to Binary');
do {
  var a = Number(readlineSync.question('Enter the decimal no.  '));
  s = '';
  function f(n) {
    if (Math.floor(n / 2)) {
      f(Math.floor(n / 2));
    }
    return (s += n % 2);
  }
  console.log(f(a));
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
