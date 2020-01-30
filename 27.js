var readlineSync = require('readline-sync');
console.log(' program using Right Shift Operator');

do {
  var a = Number(readlineSync.question('Enter the decimal no.  '));
  var N = Number(readlineSync.question('Enter the no. bit to shift right  '));
  console.log(a >> N);
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
