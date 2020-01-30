var readlineSync = require('readline-sync');
do {
  console.log(
    'This program is to subtract two integers without using Minus (-) operator'
  );
  var inp1 = Number(readlineSync.question('Enter the first no.'));
  var inp2 = Number(readlineSync.question('Enter the second no.'));
  console.log(inp1 + ~inp2 + 1);
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
