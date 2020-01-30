var readlineSync = require('readline-sync');
console.log('a program to multiply given 2 (NXN) matrices');
do {
  var N = Number(readlineSync.question('Enter the order of matrix : '));
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  for (j = 0; j < N; j++) {
    arr3.push(Array(N).fill(0));
  }
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
  console.log(arr1, arr2, arr3);
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
      for (var k = 0; k < N; k++) {
        arr3[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  console.log(arr3);
  var menu = readlineSync.question(
    'Do you want to continue \n Press 1 to continue or 0 to stop'
  );
} while (menu === 1);
