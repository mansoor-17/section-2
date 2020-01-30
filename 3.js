var readlineSync = require('readline-sync');
do {
  var inp = Number(
    readlineSync.question('Enter the number to check for prime  :  ')
  );
  function isPrime(f) {
    if (JSON.stringify(factors(f)) == JSON.stringify([1, f])) {
      return 'It is a prime no';
    } else {
      return 'It is not a prime no.';
    }
  }
  function factors(f) {
    arr = [];
    for (var i = 0; i <= f; i++) {
      if (f % i == 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  console.log(isPrime(inp));
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
