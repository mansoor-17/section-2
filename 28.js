var readlineSync = require('readline-sync');
do {
  var a = Number(readlineSync.question('Enter the no.  '));
  var z = a;
  console.log(z);
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
