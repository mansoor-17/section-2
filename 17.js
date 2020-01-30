var readlineSync = require('readline-sync');
do {
  console.log(
    ' a program to classify the triangle as equilateral, isosceles and scalene to the given sides of triangle'
  );
  var inp = readlineSync
    .question('Enter the sides seperated with space : ')
    .split(' ')
    .map(Number)
    .sort();
  if (inp[0] == inp[1] && inp[1] == inp[2]) {
    console.log('Equilateral Triangle');
  } else if (inp[0] == inp[1] || inp[2] == inp[1]) {
    console.log('Isosceles Triangle');
  } else {
    console.log('Scalene Triangle');
  }
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
