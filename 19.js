var readlineSync = require('readline-sync');
console.log('a program to add and subtract of given (NXN) Matrices');
do {
  var oper = Number(
    readlineSync.question('Enter 1 to add and Enter 0 to subt.')
  );
  var N = readlineSync.question('Enter the order of matrix : ');
  var arr1 = [];
  var arr2 = [];
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
    arr2.push(
      readlineSync
        .question(
          `Enter the ${j + 1} row elements of second array seperated by space  `
        )
        .split(' ')
        .map(Number)
    );
  }
  if (oper === 1) {
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        arr2[i][j] = arr2[i][j] + arr1[i][j];
      }
    }
    console.log(arr2);
  } else if (oper === 0) {
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        arr2[i][j] = arr1[i][j] - arr2[i][j];
      }
    }
    console.log(arr2);
  } else {
    console.log('Invalid Input');
  }
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
