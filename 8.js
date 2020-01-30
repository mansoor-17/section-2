var readlineSync = require('readline-sync');
do {
  console.log('This program is find the Sum of Array Elements.');
  console.log(
    'Enter the array like the way it is shown here [1,2,3] mandatory to use [ ] and , '
  );
  var inp = readlineSync.question('Enter the Array  ');
  var arr = inp.slice(1, -1).split(',');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // 1 + 2 + 3 + 4
  console.log(arr.reduce(reducer));
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
