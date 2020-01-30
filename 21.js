var readlineSync = require('readline-sync');
console.log('Transpose of Matrix');
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
  for (var j = 0; j < N; j++) {
    trace += arr1[j][j];
  }
  console.log(`The trace of the matrix is ${trace}`);
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
