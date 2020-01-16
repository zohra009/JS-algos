function maxCharacter (str){
const charMap = {};
let max = 0;
let maxChar = "";

for(let char of str){
    if(charMap[char]){
        charMap++;
    }else {
        charMap[char] = 1;
    }
}

}