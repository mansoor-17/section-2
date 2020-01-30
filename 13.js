var readlineSync = require('readline-sync');
do {
  console.log('Program to find the given year is a leap/non leap year');
  var inp = readlineSync.question('Enter the year : ');
  const a =
    inp % 4 == 0 ? console.log('leap year') : console.log('Non leap year');
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
