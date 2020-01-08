//repeat a given string a given set num of times 
//function will take 2 params (str, num)
// Step 1. Create an empty string that will host the repeated string
// Step 2. Set the While loop with (times > 0) as the condition to check
// Step 3. Return the repeated string

//Solution 1

function repeatString(str, times) = {
    //initialize empty str to hold repeat str
    let repStr = '';
    //while loop check to make sure it runs, so  if times > 0 the repStr is added in addition to original str
    while(times > 0){
    // Same as repeatedString = repeatedString + string;
        repStr += str 
        // if times was 3 times for "a" it would repeat a(2)+a(1)+a(0) so final result 'aaa' decrementing
        // Same as times = times - 1
        times --  
    }
}

/////////////////////////////////////////////
//solution 2 using recursion 
//Recursion is a technique for iterating over an operation by having a function call itself repeatedly 
//until it arrives at a result.
//first is a base case: this is a statement, usually within a conditional clause like if, that stops the recursion.
//2nd recursive case: this is the statement where the recursive function is called on itself.
function repeatStringNumTimes(string, times) {
    //if times is negative then return empty string
    if(times < 0) 
      return "";
    //if times is equal to 1 then return that str once
    if(times === 1) 
      return string;
      //otherwise return the str plus number of times that function is being called upon 
    else 
      return string + repeatStringNumTimes(string, times - 1);
  }
  repeatStringNumTimes("abc", 3);

  /////////////////////////////////////////////////
  //Solution 3 with .repeat() method 
  //The repeat() method constructs and returns a new string which contains the specified number 
  //of copies of the string on which it was called, concatenated together.
  function repeatStringNumTimes(string, times) {
    //Step 1. If times is positive, return the repeated string
    // i.e. (3 > 0) => true
    if (times > 0) { 
    // return "abc".repeat(3); => return "abcabcabc";
      return string.repeat(times); 
    }
    
    //Step 2. Else if times is negative, return an empty string 
    else {
      return "";
    }
  }
  
  repeatStringNumTimes("abc", 3);

