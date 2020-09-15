// // Freecodecamp,

//*------- reverse a string solution ----*/

// function reverseString(str) {
// note to make a for loop to work you need to use a decrementing loop so 'i' needs to start at the end of the str decrement to 0
//   let newString = '';
//   for (let i = str.length - 1; i > 0 - 1; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

// function reverseString(str) {
//   let stringArray = str.split('').reverse().join('');
//   return stringArray;
// }

// console.log(reverseString('jammyGit'));

/** ------- Factorialize a NumberPassed -------*/

// Factorialize a Number

// function factorialize(num) {
//   let array = [];
//   for (let i = 1; i <= num; i++) {
//     array.push(i);
//   }
//   num = array.reduce((acc, curr) => {
//     return acc * curr;
//   }, 1);
//   return num;
// }

// console.log(factorialize(5));

/**-------- Find the Longest Word in a String --------**/

// function findLongestWordLength(str) {
//   let letterArray = str.split(' ');
//   letterArray.reduce((acc, curr) => {
//     let longest = curr.length > acc.length ? curr : acc;
//     return (str = longest);
//   });
//   return str.length;
// }

// console.log(
//   findLongestWordLength('The quick brown fox jumped over the lazy dog')
// );

/*----- Return Largest Numbers in Arrays ----*/

// function largestOfFour(arr) {
//   let newArray = [];
//   arr.forEach((array) => {
//     let result = array.reduce((acc, curr) => {
//       return acc > curr ? acc : curr;
//     });
//     newArray.push(result);
//   });
//   console.log(newArray);
//   return newArray;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);

// /*----- Confirm the ending ------*/

// function confirmEnding(str, target) {
//   console.log(target.length);
//   let sameEnd = false;
//   let length = 1;
//   for (let i = 0; i < target.length; i++) {
//     let strLetter = str.substring(str.length - length, str.length - i);
//     let targetLetter = target.substring(
//       target.length - length,
//       target.length - i
//     );
//     if (strLetter === targetLetter) {
//       sameEnd = true;
//     } else {
//       return (sameEnd = false);
//     }
//     length++;
//   }

//   return sameEnd;
// }

// console.log(confirmEnding('Open sesame', 'sage'));

/*----- repeat a string -------*/

// function repeatStringNumTimes(str, num) {
//   let newString = '';
//   for (let i = 0; i < num; i++) {
//     newString += str;
//   }
//   return newString;
// }

// console.log(repeatStringNumTimes('abc', -2));

/*---- Truncate a string ----*/

// function truncateString(str, num) {
//   if (num >= str.length) {
//     return str;
//   }
//   let string = str.slice(0, num);
//   if (typeof num === 'number') {
//     return `${str.substring(0, num)}...`;
//   }
//   return string;
// }

// console.log(
//   truncateString(
//     'A-tisket a-tasket A green and yellow basket',
//     'A-tisket a-tasket A green and yellow basket'.length + 2
//   )
// );

/*------ Finders Keepers -------*/

// function findElement(arr, func) {
//   // you cant break early from a for each loop so i have used a for loop
//   let number1 = 0;
//   for (let number of arr) {
//     let result = func(number);
//     if (result) {
//       return (number1 = number);
//     } else {
//       number1 = undefined;
//     }
//   }
//   return number1;
// }

// console.log(
//   findElement([1, 3, 5, 8, 9, 10], function (num) {
//     return num % 2 === 0;
//   })
// );

// /*------- Boo who --------*/

// const booWho = (bool) => typeof bool === 'boolean';

// console.log(booWho(1));

/* -------- Title case a sentence ---------*/

// function titleCase(str) {
//   let array = str.split(' ');
//   let capitalised = '';
//   array.forEach((word) => {
//     let capLetter = word.substring(0, 1).toUpperCase();
//     let shorterWord = word.substring(1).toLowerCase();
//     capitalised += `${capLetter}${shorterWord} `;
//   });
//   // the line below removes the last white space in the string. slice returns a string
//   let finalString = capitalised.slice(0, -1);
//   return finalString;
// }

// console.log(titleCase("I'm a little tea pot"));

// split each word into a array using split
// create a new array
// iterate over the array with a loop, within in each iteration capitalise the first letter, and put them into the new array
// return the array */

/*------- slice and splice --------*/

// function frankenSplice(arr1, arr2, n) {
//   let secArr = [...arr2];
//   for (let i = 0; i < arr1.length; i++) {
//     secArr.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return secArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5], 1));

/*-------- Falsy bouncer --------*/

// i wasted alot of time on this because filter was not the right choice for this because ultimately I needed to filter based on the Boolean rather than the element which was a problem

// function bouncer(arr) {
//   let falseArray = [];
//   arr.forEach((element) => {
//     let x = new Boolean(element);
//     if (x == true) {
//       falseArray.push(element);
//     }
//   });
//   return falseArray;
// }

// console.log(bouncer([7, 'ate', '', false, 9]));

/* --------- Where do i belong -------*/

// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => {
//     return a - b;
//   });
//   let x = 0;
//   arr.forEach((element, index) => {
//     if (num > element) return (x = index + 1);
//   });
//   return x;
// }

// getIndexToIns([5, 3, 20, 3], 5, 30);

/*--------- Mutations ----------*/

// function mutation(arr) {
//   let result = true;
//   let arrTwo = arr[1].toLowerCase().split('');
//   for (let i = 0; i < arrTwo.length; i++) {
//     if (!arr[0].toLowerCase().includes(arrTwo[i])) return (result = false);
//   }
//   return result;
// }

// console.log(mutation(['ate', 'ate']));

/*------------- chunky Monkey -------------*/

// function chunkArrayInGroups(arr, size) {
//   let newArray = [];
//   let copiedArray = [...arr];
//   let noOfArrays = Math.floor(arr.length / size);

//   for (let i = 0; i < noOfArrays; i++) {
//     let arr1 = arr.splice(0, size);
//     newArray.push(arr1);
//   }
//   // this final part checks if there is any arrays leftovers and if so puts in a final array and adds it.
//   if (arr.length > 0) {
//     {
//       let finalArray = [...arr];
//       newArray.push(finalArray);
//     }
//   }

//   return newArray;
// }

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

/*-----Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
-----*/

// const squareList = (arr) => {
//   // Only change code below this line
//   return arr
//     .filter((num) => num > 0)
//     .filter((num) => num % parseInt(num) === 0)
//     .map((num) => Math.pow(num, 2));
//   // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

/*-----Sum all numbers in a range ------*/

// function sumAll(arr) {
//   let finalNumber = 0;
//   finalNumber = arr[0] + arr[1];

//   let number = 0;
//   arr.sort((a, b) => {
//     return a - b;
//   });
//   let numbersInBetween = arr[1] - arr[0] - 1;
//   for (let i = 1; i <= numbersInBetween; i++) {
//     number = arr[0] + i;
//     finalNumber = finalNumber + number;
// ;
//   }
//   return finalNumber;
// }

// console.log(sumAll([10, 5]));

/*------- Diff two arrays ---------*/

// function diffArray(arr1, arr2) {
//   let newArr;
//   let arrOne = [];
//   let arrTwo = [];
//   arrOne = arr1.filter((word) => !arr2.includes(word));
//   arrTwo = arr2.filter((word) => !arr1.includes(word));
//   newArr = arrOne.concat(arrTwo);
//   return newArr;
// }

// console.log(
//   diffArray(
//     ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//     ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
//   )
// );

/* -------  and destroy -------*/

// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);

//   // the above splits up arr so the numbers ot checks are in args and the arr now just consists of the array which is filtered below. It also splits the remaining numbers 2 and 3 into one array which means you can isue the includes on it all at once.

//   return arr.filter(function (val) {
//     return !args.includes(val);
//   });
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// function whatIsInAName(collection, source) {
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   var srcKeys = Object.keys(source);

//   // filter the collection
//   return collection.filter(function (obj) {
//     return srcKeys
//       .map(function (key) {
//         return obj.hasOwnProperty(key) && obj[key] === source[key];
//       })
//       .reduce(function (a, b) {
//         return a && b;
//       });
//   });
// }

// test here
// whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' },
//   ],
//   { last: 'Capulet' }
// );

// function whatIsInAName(collection, source) {
//   let arr = [];

//   // iterate over the objects
//   collection.forEach((obj) => {
//     //make an array of keys from the source object
//     let pushObjToArray = false;
//     let sourceKeys = Object.keys(source);
//     let collectionKeys = Object.keys(obj);
//     let sourceKeyValuePairs = Object.entries(source);
//     let collectionKeyValuePairs = Object.entries(obj);
//     //iterate over the array of keys and use has own property to check if present, if false then return as we need to check the next object and not add this one.
//     for (let i = 0; i < sourceKeys.length; i++) {
//       let indexVal = collectionKeys.indexOf(sourceKeys[i]);
//       let collectionValue = null;
//       if (indexVal !== -1) {
//         collectionValue = collectionKeyValuePairs[indexVal][1];
//       }

//       let sourceValue = sourceKeyValuePairs[i][1];
//       let valueComparison = collectionValue == sourceValue;
//       if (indexVal === -1) {
//         return (pushObjToArray = false);
//       }
//       if (valueComparison == false) {
//         return (pushObjToArray = false);
//       } else {
//         pushObjToArray = true;
//       }
//     }

//     if (pushObjToArray == true) {
//       arr.push(obj);
//     }
//   });
//   return arr;
// }

// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, bat: 2 }
//   )
// );

// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);

/*--------- Spinal-Tap-Case -------------*/

// function spinalCase(str) {
//   // This first test below checks for any spaces, _ or - between words
//   const myTest = /\s+|_+|-+/g;
//   // This second test checks if there is a capital letter preceded by a small letter. A both are in brackets it means they have $1 and $2 variable value respectively. this means i can add a -between them in the space replace test below
//   const caseMatch = /([a-z])([A-Z])/g;

//   let result = str.replace(myTest, '-');
//   let spacer = result.replace(caseMatch, `$1-$2`);

//   return spacer.toLowerCase();
// }
// // find the matched letters and put them in a

// console.log(spinalCase('thisIsSpinalTap'));

// any spaces
// anywhere where lower and upper case meet
// anywhere with a lower and middle dash

/*------- Pig latin ---------*/

// function translatePigLatin(str) {
//   let pigLatinStr = null;
//   let consStart = str.match(/^[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|y]{1,}/gi);
//   if (consStart) {
//     let vowelTest = /[a|e|i|o|u]/gi.test(str);
//     console.log(vowelTest);
//     if (!vowelTest) {
//       pigLatinStr = str + 'way';
//     }
//     let array1 = str.split('');
//     let consLetters = array1.splice(0, consStart[0].length);
//     pigLatinStr = array1.concat(consLetters);
//     pigLatinStr = pigLatinStr.join('');
//     pigLatinStr = pigLatinStr + 'ay';
//   } else {
//     pigLatinStr = str + 'way';
//   }
//   return pigLatinStr;
// }

// console.log(translatePigLatin('rhythm'));

/*------- Search and replace --------*/

// function myReplace(str, before, after) {
//   let myAfter = '';
//   let myStr = '';
//   let myRex = new RegExp(`${before}`, 'g');
//   let capRegEx = RegExp('[A-Z]');
//   let capitalised = capRegEx.test(before);

//   if (capitalised) {
//     myAfter = after.charAt(0).toUpperCase() + after.slice(1);
//     myStr = str.replace(myRex, myAfter);
//   } else {
//     myAfter = after.toLowerCase();

//     myStr = str.replace(myRex, myAfter);
//   }

//   return myStr;
// }

// function myReplace(str, before, after) {
//   // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
//   if (/^[A-Z]/.test(before)) {
//     after = after[0].toUpperCase() + after.substring(1)
//   } else {
//     after = after[0].toLowerCase() + after.substring(1)
//   }

//   // return string with argument "before" replaced by argument "after" (with correct case)
//   return str.replace(before, after);
// }

// console.log(myReplace('I think we should look up there', 'up', 'Down'));

/* --------- DNA pairing --------*/

// function pairElement(str) {
//   return str.split('').map((letter) => {
//     switch (letter) {
//       case 'C':
//         return ['C', 'G'];
//       case 'T':
//         return ['T', 'A'];
//       case 'A':
//         return ['A', 'T'];
//       case 'G':
//         return ['G', 'C'];
//     }
//   });
// }

// console.log(pairElement('ATCGA'));

/*--------- missing letters ---------*/
// function fearNotLetter(str) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let letterPos = alphabet.indexOf(str.charAt(0));
//   let letterArray = alphabet.split('');

//   let s = letterArray.splice(letterPos, str.length + 1);
//   let paraArray = str.split('');
//   let result = s.filter((letter) => paraArray.includes(letter) == false);

//   if (result.length === 0) {
//     return undefined;
//   }
//   result = result[0].toString();
//   return result;
// }

// console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));

//Pseudo code for above

// Create a alphabet string
// turn the string into array
//search for the charat of the array
// slice the string into a new search array
// filter through the array comparing each letter with the parameter array and returning the
// array letter not present
// return this letter

/*------ sorted Union -------*/
// function uniteUnique(arr) {
//   let finalArray = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     arguments[i].reduce((acc, curr) => {
//       if (!finalArray.includes(curr)) finalArray.push(curr);
//     }, finalArray);
//   }
//   return finalArray;
// }

// console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

/*---------Convert HTML entities---------*/

// function convertHTML(str) {
//   function htmlChanger(specialChar) {
//     switch (specialChar[0]) {
//       case '&':
//         newChar = '&amp;';
//         break;
//       case '<':
//         newChar = '&lt;';
//         break;
//       case '>':
//         newChar = '&gt;';
//         break;
//       case '"':
//         newChar = '&quot;';
//         break;
//       case "'":
//         newChar = '&apos;';
//         break;
//     }
//     return newChar;
//   }
//   let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
//   let specialChar = str.match(regex);

//   let newChar = '';
//   let newStr = '';
//   let myRegExp = new RegExp(regex, 'g');
//   if (!specialChar) {
//     return str;
//   }
//   if (specialChar.length > 1 && specialChar[0] !== specialChar[1]) {
//     specialChar.forEach((char) => {
//       newChar = htmlChanger(char, newChar);
//       // let singleRegExp = new RegExp(/char/);
//       newStr += newChar;
//     });
//   } else {
//     newChar = htmlChanger(specialChar, newChar);

//     newStr = str.replace(myRegExp, newChar);
//   }

//   return newStr;
// }

// console.log(convertHTML('<>'));

// //Better solution

// function convertHTML(str) {
//   // Split by character to avoid problems.

//   var temp = str.split("");

//   // Since we are only checking for a few HTML elements, use a switch

//   for (var i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case "<":
//         temp[i] = "&lt;";
//         break;
//       case "&":
//         temp[i] = "&amp;";
//         break;
//       case ">":
//         temp[i] = "&gt;";
//         break;
//       case '"':
//         temp[i] = "&quot;";
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }

//   temp = temp.join("");
//   return temp;
// }

// //test here
// convertHTML("Dolce & Gabbana");

/*-------- Sum All Odd Fibonacci Numbers ---------*/

/* Simple fibonacci sequence */

function sumFibs(num) {
  let array = [0, 1];
  let no1 = 0;
  let no2 = 1;
  for (let i = 2; i <= num; i++) {
    let total = no1 + no2;
    if (total <= num) {
      array.push(total);
    }
    no1 = no2;
    no2 = total;
  }

  let newArray = array.reduce((acc, curr) => {
    if (curr % 2 !== 0) {
      return acc + curr;
    } else {
      return acc;
    }
  }, 0);
  return newArray;
}

console.log(sumFibs(75025));

// Solved using recursion //

/*-------- Sum all primes --------*/

// function sumPrimes(num) {

//   return array;
// }

// console.log(sumPrimes(10));
