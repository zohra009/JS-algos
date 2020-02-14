// // CHALLENGE 1: REVERSE A STRING
// // Return a string in reverse
// // ex. reverseString('hello') === 'olleh'

// //Solution1
// // function reverseString(str) {
// //     const strArr = str.split(''); //1: split string into an array using .split() which splits into arr and separate into its own charater so "" w/no space
// //     strArr.reverse(); //this reverses the arr [ 'o', 'l', 'l', 'e', 'h' ]
// //     return strArr.join('')  //this joins it together (no space btw '')

// //     console.log(strArr)
// //   }
// //////////////////////////////////////////////////////////////
// //  Solution 2 to prob 1 **BEST** 
// // function reverseString(str) {
// //   return str.split('').reverse().join('');
// //  }
//     //////////////////////////////////////////////////////////////
//   // solution 3 to prob 1 using for loop 
  
// //   function reverseString(str){
// //         let revString = '';
// //         for(let i = str.length - 1; i >= 0; i-- ){  //decrease i by 1 if i >=0 AND str.length - 1 means we have 0-4 characters vs 0-5
// //             revString = revString + str[i]; //str[i] is the current character that is added to revstring
// //         } 
// //         return revString;
// //     }
//     //////////////////////////////////////////////////////////////
//     //solution 4 to prob 1 
//     // function reverseString(str){
//     //     let revString = '';
//     //     for(let i = 0; i <= str.length - 1; i++ ){  
//     //         revString = str[i] + revString;
//     //     } 
//     //     return revString;
//     // }
//     //////////////////////////////////////////////////////////////
//     //Solution 5 to Problem 1 using (for-of loop) ES6 JS
//     // function reverseString(str){
//     // let revString = '';
//     //     for(let char of str ){ //char could be anything  
//     //         revString = char + revString;
//     //     } 
//     //     return revString;
//     // }
//     //////////////////////////////////////////////////////////////
//      //Solution 6 to Problem 1 using for-each
//      function reverseString(str){
//         let revString = '';
//         str.split('').forEach(function(char){  //to make str into arr use .split; then forEach takes a func & iterator (char)
//             revString = char + revString;
//         });
//         return revString;
//      }


//  //---------------------------------------------------------------------------------------------------------------- 
  
//   // CHALLENGE 2: VALIDATE A PALINDROME
//   // Return true if palindrome and false if not
//   // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
//    //steps: reverse the string and compare to the original string
  
//   function isPalindrome(str) {
//       //1: make var and convert to arr w/ .split('') then rev then .join('') to turn back into str
//       const revString = str.split('').reverse().join('');
//       //this will give true/false (boolean) 
//     return revString === str;  
//   }
  
  
//   //----------------------------------------------------------------------------------------------------------------
//   // CHALLENGE 3: REVERSE AN INTEGER
//   // Return an integer in reverse
//   // ex. reverseInt(521) === 125
 
  
//   function reverseInt(int) {
//     const revString = int.toString().split('').reverse().join('');
//     return parseInt(revString) * Math.sign(int); //math.sign with take into acct neg signs and include that in the apporpriate place
//   }
  
  
//   //----------------------------------------------------------------------------------------------------------------
//   // CHALLENGE 4: CAPITALIZE LETTERS
//   // Return a string with the first letter of every word capitalized
//   // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

//   //Solution 1 to Prob 4 

// //   function capitalizeLetters(str) {
// //     //make string into arr (with space btw '' to make each WORD arr) and make all lower case
// //     const strArr = str.toLowerCase().split(' ');

// //     //substring will pluck the first letter of the each word in the arr i[0] & i[1] is NOT included
// //     //concatanating the remaining words with substring will incl i[1] and so forth
// //     for(i = 0; i < strArr.length; i++){
// //         strArr[i] = strArr[i].substring(0,1).toUpperCase() + 
// //         strArr[i].substring(1) 
// //     }
// //     //joing the word with a space
// //     return strArr.join(' '); 
// //   }

//   //////////////////////////////////////////////////////////////////////////
//     //Solution 2 to Prob 4 
//     function capitalizeLetters(str) {
//         return str
//         .toLowerCase()
//         .split(' ')
//         //map manipul arr and return another arr from it; take in func with prameter we called it (word)
//         .map(function(word){
//             return word[0].toUpperCase() + word.substring(1) //OR USE word.substr(1)
//         })
//         .join(' ')
//     }
  
    
//   //------------------------------------------------------------------------------------------------------------------
  
//   // CHALLENGE 5: MAX CHARACTER
//   // Return the character that is most common in a string
//   // ex. maxCharacter('javascript') == 'a'
//   function maxCharacter(str) {
//       //use obj as a map
//       const charMap = {};
//       let maxNum = 0; //gives us the max #
//       let maxChar = ''; //gives us the max letter
      
//       //loop through the arr as a str 
//       str.split('').forEach(function(char) {
//           if(charMap[char]){ //if it exists
//               charMap[char]++; 
//           }
//           //charMap which will tell us how many times each letter appears
//           else {
//               charMap[char] = 1;
//           }
//       });
//       // for-in loop will loop through obj rather than arr
//       for(let char in charMap){
//           if(charMap[char] > maxNum){
//             maxNum = charMap[char]; //max # is the num of letter most common
//             maxChar = char; //then most common letter = to that letter
//           }
//       }
//       return maxChar;
//   }
  
  
//   //----------------------------------------------------------------------------------------------------------------
//   // CHALLENGE 6: FIZZBUZZ
//   // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
//   function fizzBuzz() {
//       for(let i= 1; i <= 100; i++){
//           if(i % 3 === 0 && i % 5 === 0){
//               console.log("FizzBuzz") 
//           }else if(i % 3 === 0){
//             console.log("Fizz")
//           }else if(i % 5 === 0){
//             console.log("Buzz")
//           }else { 
//               console.log(i)
//              }
//         }
//     }

//  //---------------------------------------------------------------------------------------------------------------
  
//  // CHALLENGE 1: ADD ALL NUMBERS 
// // Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// // ex. addAll(2,5,6,7) === 20

// //Solution 1 to Prob 1 ES6 
// // ...rest takes #'s and put into arr // we can use spread operators and call rest w/e like ...numbers

// // function addAll(...numbers) {
// //     let total = 0;
// //     numbers.forEach(function(num){
// //         total += num 
// //     });
// //     return total;
// // }

// ////////////////////////////////////////////
// //Solution 2 to Prob 1 ES6 
// function addAll(...numbers) {
//     //reduce takes an accumulator and current value; arrow func then adds acc to curr; this adds it up and spits out total
//    return numbers.reduce((acc, cur) => acc + cur )
// }

// //---------------------------------------------------------------------------------------------------------------

// // CHALLENGE 2: SUM ALL PRIMES
// // Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole 
// //number greater than 1 whose only factors are 1 and itself
// // ex. sumAllPrimes(10) == 17

// /////////////////////////////////////////////
// //solution with explanations 

// // function sumAllPrimes(num) {
// //   let total = 0;

// //   function checkForPrime (i){
// //     //loop through whats passed in
// //     for(j = 2; j < i; j++) {
// //       //check for prime conditional needed to see if i is divisible by j
// //       if(i % j === 0){ //means divisble therefore NOT prime #
// //         return false;
// //       }
// //     }
// //     return true; // if NOT divisible its prime which is TRUE
// //   }
// //   //loop through up to 10
// //   for(let i = 2; i <= num; i++){
// //     //create func to check if i is prime
// //     if(checkForPrime(i)){
// //       //give total
// //       total += i;
// //     }
// //   }

// // }

// ///////////////////////////////////////////////////////////////////

// //Solution to problem 2
// function sumAllPrimes(num) {
//   let total = 0;

//   function checkForPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (checkForPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }


// //---------------------------------------------------------------------------------------------------------------

// // CHALLENGE 3: SEEK & DESTROY
// // Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// // ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// //Solution 1 of Prob 3 : use argument, indexOf, filter
// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);
//   function filterArr(arr){
//     //return True if NOT an arr; if no find = -1 for indexOf
//     return args.indexOf(arr) === -1;
//   } 
//   return arr.filter(filterArr);
// }
// //////////////////////////////////////////////////////
// /// Solution 2 of prob 3: ...rest, filter & includes
// function seekAndDestroy(arr, ...rest) {
//   return arr.filter(val => !rest.includes(val));
// }

// //---------------------------------------------------------------------------------------------------------------

// // CHALLENGE 4: SORT BY HEIGHT
// // Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// // ex.
// // a = [-1, 150, 190, 170, -1, -1, 160, 180]
// // sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

// function sortByHeight() {
//   function sortByHeight(a) {
//     //store all position in arr1; store values in arr2
//     const arr1 = [];
//     const arr2 = [];
    
//     //forEach use to loop thru each value, val(is what is being sorted)and (i for position of -1)
//     a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));
  
//     const sortArr = arr2.sort((a, b) => a - b);
  
//     arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
  
//     return sortArr;
//   }
// }

// //---------------------------------------------------------------------------------------------------------------

// // CHALLENGE 5: MISSING LETTERS
// // Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// // ex.
// // missingLetters("abce") == "d"
// // missingLetters("abcdefghjklmno") == "i"
// // missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

// function missingLetters(str) {
//   let compare = str.charCodeAt(0);
//   let missing;

//   str.split('').map((char, i) => {
//     if (str.charCodeAt(i) == compare) {
//       ++compare;
//     } else {
//       missing = String.fromCharCode(compare);
//     }
//   });

//   return missing;
// }

// //---------------------------------------------------------------------------------------------------------------

// // CHALLENGE 6: EVEN & ODD SUMS
// // Take in an array and return an array of the sums of even and odd numbers
// // ex.
// // evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

// //EASY 
// function evenOddSums(arr) {
//   let evenSum = 0;
//   let oddSum = 0;

//   arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

//   return [evenSum, oddSum];
// }

//   //----------------------------------------------------------------------------------------------------------------
//   // Call Function
//   // const output = seekAndDestroy(([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']);
  
//   // console.log(output);

// //-----------------------------------------------------------------------------------------------------------
// // CHALLENGE 1: LONGEST WORD
// // Return the longest word of a string
// // ex. longestWord('Hi there, my name is Brad') === 'there,'

// function longestWord(sen) {
//   // SOLUTION 1 - Return a single longest word
//   // SOLUTION 2 - Return an array and include multiple words if they have the same length
//   // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// }

// //------------------------------------------------------------------------------------------------------------

// // CHALLENGE 2: ARRAY CHUNKING
// // Split an array into chunked arrays of a specific length
// // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// function chunkArray(arr, len) {}

// //------------------------------------------------------------------------------------------------------------

// // CHALLENGE 3: FLATTEN ARRAY
// // Take an array of arrays and flatten to a single array
// // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// function flattenArray(arrays) {}

// //------------------------------------------------------------------------------------------------------------

// // CHALLENGE 4: ANAGRAM
// // Return true if anagram and false if not
// // ex. 'elbow' === 'below'
// // ex. 'Dormitory' === 'dirty room##'

// function isAnagram(str1, str2) {}

// //------------------------------------------------------------------------------------------------------------

// // CHALLENGE 5: LETTER CHANGES
// // Change every letter of the string to the one that follows it and capitalize the vowels
// // Z should turn to A
// // ex. 'hello there' === 'Ifmmp UIfsf'

// function letterChanges(str) {}

// // Call Function
// const output = longestWord('Hello, my name is Brad');

// console.log(output);


class Node {
  constructor(val) {
      this.val = val
      this.left = null
      this.right = null
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null
  }
  insert(val) {
      //declare new node
      let newNode = new Node(val)
      let current = this.root

      //if it's an empty tree then simply add
      if(!this.root) {
          this.root = newNode
          return this
      } 
      while (true) {
          // check to avoid duplicated entries
          if (newNode.val === current.val) return undefined
          if (val < current.val) {
              if (current.left === null) {
                  //traverse down the tree by setting the child to be the new current
                  current.left = newNode
                  return this
              } 
              current = current.left
          } 
          else if (newNode.val > current.val ) {
              if (current.right === null) {
                  current.right = newNode
                  return this
              }
              current = current.right
          }
      }
  }



//     find(val) {
//         let current = this.root
//         const findVal = (c) => {
//             //base cases to break out of the recursive calls
//             if (c === null) return false
//             if (c.val === val) {
//                 return true
//             }
//             if (val < c.val) {
//                 c = c.left
//                 return findVal(c)
//             } 
//             if (val > c.val) {
//                 c = c.right
//                 return findVal(c)
//             }
//         }
//         return findVal(current)
//     }
} //end BST


let BST = new BinarySearchTree();
BST.insert(10)
BST.insert(6)
BST.insert(15)
BST.insert(3)
BST.insert(8)
BST.insert(20)
