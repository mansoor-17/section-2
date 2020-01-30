var readlineSync = require('readline-sync');
do {
  console.log('This program is for swapping of two arrays');
  console.log(
    'Enter the array like the way it is shown here [1,2,3] mandatory to use [ ] and , '
  );
  var inp = readlineSync
    .question('Enter the Array 1 =  ')
    .slice(1, -1)
    .split(',')
    .map(Number);
  var inp1 = readlineSync
    .question('Enter the Array 2 =  ')
    .slice(1, -1)
    .split(',')
    .map(Number);

  var temp = inp1;
  inp1 = inp;
  inp = temp;
  console.log('The Array 1 = ', inp);
  console.log('The Array 2 = ', inp1);
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
