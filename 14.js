var readlineSync = require('readline-sync');
do {
  console.log('A Program to check if the no is +ve or -ve');
  var inp = readlineSync.question('Enter the Number : ');
  const a =
    inp >= 0 ? console.log('Positive Number') : console.log('Negative Number');
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
