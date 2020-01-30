var readlineSync = require('readline-sync');
do {
  console.log(
    ' This program is to find remainder of two numbers without using modulus % operator'
  );
  var inp1 = Number(readlineSync.question('Enter the dividend'));
  var inp2 = Number(readlineSync.question('Enter the divisor'));
  var z = Math.floor(inp1 / inp2);
  console.log(inp1 - inp2 * z);
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
