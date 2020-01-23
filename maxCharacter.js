// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
module.exports = maxChar;

function maxCharacter (str){
const charMap = {};
//these two are initialized AFTER first for loop is done
let max = 0;
let maxChar = "";

//for of loop used to interate through arrays and strings
for(let char of str){
    //if charMap[char] "that characrter (char) of charMap already exists"
    if(charMap[char]){
        //add to the tally 
        charMap++;
    }else {
        //otherwise put it in the charMap with a tally of 1
        charMap[char] = 1;
    }
}
//for in loop is used for interating through objects
 for (let char in charMap){
     //if char of obj > 0 
     if(charMap[char] > max){
         //set new max to charMap[char] of that particular char
        max = charMap[char];
        //and make maxChar (string) to equal that char
        maxChar = char;
     } 
 }

}