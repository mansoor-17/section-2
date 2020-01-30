var readlineSync = require('readline-sync');
var testcases = readlineSync.question('Enter the number of test cases  : ');
for (var test = 0; test < testcases; test++) {
  var N = Number(readlineSync.question('Enter the order of matrix : '));
  var arr1 = [];
  var d1 = 0;
  var d2 = 0;
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
  for (var i = 0; i < N; i++) {
    d1 = d1 + arr1[i][i];
    d2 = d2 + arr1[i][N - i - 1];
    // console.log(arr1[i][i]);
  }

  console.log(Math.abs(d1 - d2));
}
