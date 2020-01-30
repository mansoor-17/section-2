var readlineSync = require('readline-sync');
do {
  var inp = readlineSync.question(
    'Enter the Number to check if it is even/odd  : '
  );
  if (inp % 2 == 0) {
    console.log('It is an even number');
  } else {
    console.log('It is an odd number');
  }
  var menu = Number(
    readlineSync.question(
      '\nDo you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
