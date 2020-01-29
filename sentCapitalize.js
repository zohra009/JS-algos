// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //initialize word arr
    //loop through the arr & take first letter of every word and .toUpperCase() and concat with .slice()
    //split str into arr of words 
    //use .slice(beginIdex, endIndex) which means first letter(1) of first word(0) written .slice(0,1)
    //return the phrase
    let words = [];
    for(let word of str.split(' ')){
        //starts at index 0 and concats the rest of the word
        words.push(word[0].toUpperCase() + word.slice(1))
    }
     
    //join the phrase together 
    return words.join(' ')
   
   
}

module.exports = capitalize;