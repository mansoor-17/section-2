var readlineSync = require('readline-sync');
do {
  console.log('Enter the program to find x^y');
  var inp = readlineSync.question('Enter the Number : ');
  var inp1 = readlineSync.question('Enter the power : ');
  console.log(power(inp, inp1));
  function power(a, b) {
    if (b <= 0) {
      return 1;
    } else {
      return a * power(a, b - 1);
    }
  }
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
