// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
module.exports = maxChar;

function maxCharacter (str){
const charMap = {};
let max = 0;
let maxChar = "";

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

}