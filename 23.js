var readlineSync = require('readline-sync');
do {
  console.log('Transpose of a matrix');
  var N = Number(readlineSync.question('Enter the order of matrix : '));
  var arr1 = [];
  var transpose = [];
  var temp = [];
  for (j = 0; j < N; j++) {
    temp.push(Array(N).fill(0));
  }
  // console.log(temp);

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
  console.log('Input Matrix', arr1);
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
      temp[j][i] = temp[j][i] + arr1[i][j];
    }
  }
  console.log('Transpose = ', temp);
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
