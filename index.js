// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

//Solution1
// function reverseString(str) {
//     const strArr = str.split(''); //1: split string into an array using .split() which splits into arr and separate into its own charater so "" w/no space
//     strArr.reverse(); //this reverses the arr [ 'o', 'l', 'l', 'e', 'h' ]
//     return strArr.join('')  //this joins it together (no space btw '')

//     console.log(strArr)
//   }
//////////////////////////////////////////////////////////////
//  Solution 2 to prob 1
// function reverseString(str) {
//   return str.split('').reverse().join('');
//  }
    //////////////////////////////////////////////////////////////
  // solution 3 to prob 1 using for loop 
  
//   function reverseString(str){
//         let revString = '';
//         for(let i = str.length - 1; i >= 0; i-- ){  //decrease i by 1 if i >=0 AND str.length - 1 means we have 0-4 characters vs 0-5
//             revString = revString + str[i]; //str[i] is the current character that is added to revstring
//         } 
//         return revString;
//     }
    //////////////////////////////////////////////////////////////
    //solution 4 to prob 1 
    // function reverseString(str){
    //     let revString = '';
    //     for(let i = 0; i <= str.length - 1; i++ ){  
    //         revString = str[i] + revString;
    //     } 
    //     return revString;
    // }
    //////////////////////////////////////////////////////////////
    //Solution 5 to Problem 1 using (for-of loop) ES6 JS
    // function reverseString(str){
    // let revString = '';
    //     for(let char of str ){ //char could be anything  
    //         revString = char + revString;
    //     } 
    //     return revString;
    // }
    //////////////////////////////////////////////////////////////
     //Solution 6 to Problem 1 using for-each
     function reverseString(str){
        let revString = '';
        str.split('').forEach(function(char){  //to make str into arr use .split; then forEach takes a func & iterator (char)
            revString = char + revString;
        });
        return revString;
     }


 //---------------------------------------------------------------------------------------------------------------- 
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
   //steps: reverse the string and compare to the original string
  
  function isPalindrome(str) {
      //1: make var and convert to arr w/ .split('') then rev then .join('') to turn back into str
      const revString = str.split('').reverse().join('');
      //this will give true/false (boolean) 
    return revString === str;  
  }
  
  
  //----------------------------------------------------------------------------------------------------------------
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
 
  
  function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) * Math.sign(int); //math.sign with take into acct neg signs and include that in the apporpriate place
  }
  
  
  //----------------------------------------------------------------------------------------------------------------
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

  //Solution 1 to Prob 4 

//   function capitalizeLetters(str) {
//     //make string into arr (with space btw '' to make each WORD arr) and make all lower case
//     const strArr = str.toLowerCase().split(' ');

//     //substring will pluck the first letter of the each word in the arr i[0] & i[1] is NOT included
//     //concatanating the remaining words with substring will incl i[1] and so forth
//     for(i = 0; i < strArr.length; i++){
//         strArr[i] = strArr[i].substring(0,1).toUpperCase() + 
//         strArr[i].substring(1) 
//     }
//     //joing the word with a space
//     return strArr.join(' '); 
//   }

  //////////////////////////////////////////////////////////////////////////
    //Solution 2 to Prob 4 
    function capitalizeLetters(str) {
        return str
        .toLowerCase()
        .split(' ')
        //map manipul arr and return another arr from it; take in func with prameter we called it (word)
        .map(function(word){
            return word[0].toUpperCase() + word.substring(1) //OR USE word.substr(1)
        })
        .join(' ')
    }
  
    
  //------------------------------------------------------------------------------------------------------------------
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {
      //use obj as a map
      const charMap = {};
      let maxNum = 0; //gives us the max #
      let maxChar = ''; //gives us the max letter
      
      //loop through the arr as a str 
      str.split('').forEach(function(char) {
          if(charMap[char]){ //if it exists
              charMap[char]++; 
          }
          //charMap which will tell us how many times each letter appears
          else {
              charMap[char] = 1;
          }
      });
      // for-in loop will loop through obj rather than arr
      for(let char in charMap){
          if(charMap[char] > maxNum){
            maxNum = charMap[char]; //max # is the num of letter most common
            maxChar = char; //then most common letter = to that letter
          }
      }
      return maxChar;
  }
  
  
  //----------------------------------------------------------------------------------------------------------------
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {
      for(let i= 1; i <= 100; i++){
          if(i % 3 === 0 && i % 5 === 0){
              console.log("FizzBuzz") 
          }else if(i % 3 === 0){
            console.log("Fizz")
          }else if(i % 5 === 0){
            console.log("Buzz")
          }else { 
              console.log(i)
             }
        }
    }

 //---------------------------------------------------------------------------------------------------------------
  
 // CHALLENGE 1: ADD ALL NUMBERS 
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

//Solution 1 to Prob 1 ES6 
// ...rest takes #'s and put into arr // we can use spread operators and call rest w/e like ...numbers

// function addAll(...numbers) {
//     let total = 0;
//     numbers.forEach(function(num){
//         total += num 
//     });
//     return total;
// }

////////////////////////////////////////////
//Solution 2 to Prob 1 ES6 
function addAll(...numbers) {
    //reduce takes an accumulator and current value; arrow func then adds acc to curr; this adds it up and spits out total
   return numbers.reduce((acc, cur) => acc + cur )
}

//---------------------------------------------------------------------------------------------------------------

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes() {}

//---------------------------------------------------------------------------------------------------------------

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() {}

//---------------------------------------------------------------------------------------------------------------

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {}

//---------------------------------------------------------------------------------------------------------------

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() {}

//---------------------------------------------------------------------------------------------------------------

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {} 

  //----------------------------------------------------------------------------------------------------------------
  // Call Function
  const output = addAll(6,2,3);
  
  console.log(output);