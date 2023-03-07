console.log('Practicing my git commands');

//I am just testing

function minusOne(num) {
    console.log(num - 1);
  }
  minusOne(10);        // prints 9
  minusOne(100);       // prints 99
  minusOne(Infinity);  // prints Infinity

  function makeSentence(str1, str2, str3) {
    console.log(str1 + ' ' + str2 + ' ' + str3 + '.');
  }
makeSentence('I', 'want', 'to know github');  // prints "I want github."

function getLastElement(arr) {
    console.log(arr[arr.length - 1]);
  }

getLastElement([1, 2, 3, 4, 5, 6]);       // prints 6
getLastElement(['a', 'b', 'c']);          // prints 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // prints [4, 5, 6]