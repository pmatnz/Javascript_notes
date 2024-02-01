//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ REGULAR EXPRESSIONS//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// regex - regular expressions is used to match specific data in a much shorter way than if statements and loops
const regex = /\+-/s/; /* this will match any + and - characters, an escape character had to be used on + because its a special charcter
using \ is shorthand which matches speciific characters eg \s will match ANY white spaces - NOTE this will only match in that order, if - comes first
it wont match it only + to avoid this you can use [] / [+\ -\ \s] / this will check for each of these, note \ is used becuase they are all special characters so it
is escaping them. */ 

// Using g (GLOBAL) will match ALL expressions not just stop at the first one use this after the closing /
const regex = /\+-/s/g;
// there is an i flag which makes your regex case sensitive so it will also pick up capitals. insensitive
const regex = /hello/i; 
// character class can be used to match numbers, any number between 0-9
let Myclass = /[0-9]/
// + modifier allows a match one or more times, add this after a class
// /d is shorthand which will match any digit this is used as \d
let Myclass =  /\d+e\d+/i;