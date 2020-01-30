var readlineSync = require('readline-sync');
console.log(' a program to find area and circumference of circle');
do {
  var inp = readlineSync.question('Enter the radius : ');
  console.log(
    `The circumference = ${2 * 3.14 * inp} and the area = ${3.14 * inp ** 2}`
  );
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
