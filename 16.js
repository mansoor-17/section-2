var readlineSync = require('readline-sync');
do {
  console.log(
    'Program to check whether the given character is a alphabet or not'
  );
  var inp = readlineSync.question('Enter the character  : ');
  const checkAlphabetOrNot = inp => {
    let containsLetter = /[a-z]/.test(inp);
    return containsLetter;
  };
  console.log(checkAlphabetOrNot(inp));
  var menu = Number(
    readlineSync.question(
      'Do you want to continue \n Press 1 to continue or 0 to stop : '
    )
  );
} while (menu === 1);
