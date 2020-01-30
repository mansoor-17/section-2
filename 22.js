var readlineSync = require('readline-sync');
console.log('Matrix Multiplication');
do {
  var N = Number(readlineSync.question('Enter the order of matrix : '));
  var arr1 = [];
  var trace = 0;
  for (var j = 0; j < N; j++) {
    arr1.push(
      readlineSync
        .question(
          `Enter the ${j + 1} row elements of first array seperated by space  `
        )
        .split(' ')
        .map(Number)
    );
  }
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
