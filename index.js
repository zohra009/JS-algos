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

//   // Solution 2 to prob 1
//   function reverseString(str) {
//     return str.split('').reverse().join('');
//   }

  // solution 3 to prob 1 using for loop 
  
//   function reverseString(str){
//         let revString = '';
//         for(let i = str.length - 1; i >= 0; i-- ){  //decrease i by 1 if i >=0 AND str.length - 1 means we have 0-4 characters vs 0-5
//             revString = revString + str[i]; //str[i] is the current character that is added to revstring
//         } 
//         return revString;
//     }

    //solution 4 to prob 1 
    // function reverseString(str){
    //     let revString = '';
    //     for(let i = 0; i <= str.length - 1; i++ ){  
    //         revString = str[i] + revString;
    //     } 
    //     return revString;
    // }

    //Solution 5 to Problem 1 using (for-of loop) ES6 JS
    // function reverseString(str){
    // let revString = '';
    //     for(let char of str ){ //char could be anything  
    //         revString = char + revString;
    //     } 
    //     return revString;
    // }
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
  
  function isPalindrome(str) {}
  
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {}
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {}
  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {}
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {}
  
  
  
  // Call Function
  const output = reverseString('hello');
  
  console.log(output);