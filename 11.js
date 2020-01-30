var readlineSync = require('readline-sync');
do {
  console.log(' program to find the largest number among three numbers');
  var inp1 = Number(readlineSync.question('Enter the 1st no  '));
  var inp2 = Number(readlineSync.question('Enter the 2nd no  '));
  var inp3 = Number(readlineSync.question('Enter the 3rd no  '));
  if (inp1 >> inp2 && inp1 >> inp3) {
    console.log('The greatest no. is ', inp1);
  } else if (inp2 >> inp1 && inp2 >> inp3) {
    console.log('The greatest no. is ', inp2);
  } else {
    console.log('The greatest no. is ', inp3);
  }
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
