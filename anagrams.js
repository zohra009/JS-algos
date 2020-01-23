// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //sort the string in alphabetical order and lowerCase
    //compare the lengths to yeild T/F (boolean)
    //.replace(/[^\w]/g) removal of all non-alphanumeric characters (punctuation, spaces and symbols)
    //.replace(/[^0-9a-z]/gi, '') is used for alphanumerical and case sensitive
    let string1 = stringA.replace(/[^\w]/g).toLowerCase().split('').sort().join('')
    let string2 = stringB.replace(/[^\w]/g).toLowerCase().split('').sort().join('')
    return string1.length === string2.length
}
console.log(anagrams("Hello There"))
