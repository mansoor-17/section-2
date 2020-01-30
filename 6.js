var readlineSync = require('readline-sync');
do {
  var type = readlineSync
    .question(
      'Enter N to find N prime no. or Enter L to find prime no upto L   '
    )
    .toUpperCase();
  var inp = readlineSync.question('Enter the value of N/L   ');
  var list = [];
  function isPrime(f) {
    if (JSON.stringify(factors(f)) == JSON.stringify([1, f])) {
      list.push(f);
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

  if (type == 'N') {
    for (var i = 0; list.length < inp; i++) {
      isPrime(i);
    }
    console.log(list);
  } else if (type == 'L') {
    for (var i = 0; i <= inp; i++) {
      isPrime(i);
    }
    console.log(list);
  } else {
    console.log('Invalid Input');
  }
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
