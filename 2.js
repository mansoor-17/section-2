var readlineSync = require('readline-sync');
do {
  var inp = readlineSync.question(
    'Enter  e   the print even and  o   to print odd   '
  );
  var type = readlineSync.question(
    'Enter N to generate N even/odd number or enter L to generate even/odd upto N   '
  );
  var num = readlineSync.question('Enter the number   ');
  var arr = [];
  if (inp.toLowerCase() == 'e' && type.toUpperCase() == 'N') {
    console.log(evenN(num));
  } else if (inp.toLowerCase() == 'e' && type.toUpperCase() == 'L') {
    console.log(evenL(num));
  } else if (inp.toLowerCase() == 'o' && type.toUpperCase() == 'N') {
    console.log(oddN(num));
  } else if (inp.toLowerCase() == 'o' && type.toUpperCase() == 'L') {
    console.log(oddL(num));
  } else {
    console.log('Invalid Input');
  }

  function evenN(a) {
    for (var i = 0; arr.length < a; i++) {
      if (i % 2 == 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  function evenL(a) {
    for (var i = 0; i < a; i++) {
      if (i % 2 == 0) {
        arr.push(i);
      }
    }
    return arr;
  }

  function oddN(a) {
    for (var i = 0; arr.length < a; i++) {
      if (i % 2 != 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  function oddL(a) {
    for (var i = 0; i < a; i++) {
      if (i % 2 != 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
