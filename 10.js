var readlineSync = require('readline-sync');

const arr = ['a', 'e', 'i', 'o', 'u'];
do {
  console.log(
    'This is program to check whether given character is vowel or consonant'
  );
  var inp = readlineSync.question('Enter the character  ').toLowerCase();
  for (var element = 0; element < 5; element++) {
    if (arr[element] == inp) {
      var found = true;
      break;
    }
  }
  if (found == true) {
    console.log('Its a vowel');
  } else {
    console.log('Its a consonant');
  }
  var menu = Number(
    readlineSync.question(
      '\n Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
