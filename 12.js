var readlineSync = require('readline-sync');
do {
  console.log('a program to find the roots of a quadratic equation');
  var inp = readlineSync
    .question('Enter the co-eff seperated with space : ')
    .split(' ')
    .map(Number);
  console.log(inp);
  const discr = inp[1] ** 2 - 4 * inp[0] * inp[2];
  const r1 = (-inp[1] + discr ** 0.5) / (2 * inp[0]);
  const r2 = (-inp[1] - discr ** 0.5) / (2 * inp[0]);
  console.log('The roots are ' + r1 + ' & ' + r2);
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
