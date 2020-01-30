var readlineSync = require('readline-sync');
console.log(
  ' Algorithm using Javascript to swap two numbers using temporary variables,using arithmetic operators, using logical operators'
);
do {
  var a = Number(readlineSync.question('Enter the first no.  '));
  var b = Number(readlineSync.question('Enter the second no. '));
  var N = Number(
    readlineSync.question(
      'Enter 1 to use temp. variable ,Enter 2 To use (+) operator,\n Enter 3 to use (*) operator ,Enter 4 to use XOR Operator or \n Enter 5 to use XNOR  '
    )
  );
  if (N == 1) {
    var c = a;
    a = b;
    b = c;
    console.log('First no = ', a);
    console.log('Second no= ', b);
  } else if (N == 2) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log('First no = ', a);
    console.log('Second no= ', b);
  } else if (N == 3) {
    a = a * b;
    b = a / b;
    a = a / b;
    console.log('First no = ', a);
    console.log('Second no= ', b);
  } else if (N == 4) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log('First no = ', a);
    console.log('Second no= ', b);
  } else if (N == 5) {
    a = ~a ^ ~b;
    b = ~a ^ ~b;
    a = ~a ^ ~b;
    console.log('First no = ', a);
    console.log('Second no= ', b);
  } else {
    console.log('Invalid Input');
  }
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
