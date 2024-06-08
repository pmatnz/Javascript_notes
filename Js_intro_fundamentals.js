

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ METHODS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*

// The push method will update an array to contain new information, it can also update other thing as well
myarr = [2,4,6,7];
mySecondArr = [34,22];
myarr.push(mySecondArr); // This is going to update myarr and add 34 and 22 on to it.
// The shift() method will take the first index/ element from an array and assign it to another variable. it returns the first element.

// Javascript has math methods as well
Math.floor() // this rounds a given number down to the nearest INT whole number and will always give one less if used with math.random
Math.random()// this generates a random number from 0 to 1 inclusive
// to generate a random number and make sure it remains a whole number you can use
Math.floor(math.random() *5) + 1); // the reason + 1 is added is this will give a result of 1 and 5 not 1 and 4, if it was * 6 then it woud be 1 and 5, 
// it will never give the last number you multiply or add by.
// if nothing is specific it will always be 0 and 1 , if a variable is used first it will be that var and 1 and if 2nd it wil be 0 and that var
// Make sure to add + 1 if you are asked to multiple or add by a specific number so you get that number and it wont just round down and miss that.
Math.abs() // this will make sure that you are returning an absoulte number

inventory.pop() 
// This will return the last item in an array to the user so you can use this to take the last item and assign it to another variable or function

.include() 
// this checks if an element exists in an array and will return true or false
const numbersArray = [1, 2, 3, 4, 5] 
const number = 3

if (numbersArray.includes(number)) { // checking if number exists in numbersArray
  console.log("The number is in the array.")
}
insertAdjacentHTML(0)// This method will insert HTML using javascript and it will inser it around other HTML and won't over write it  
  // it takes 2 Parametres, 1. Where you want the HTML inserted and 2. what HTML to parse in.

//String split method, this will split a string into an array of substrings you can split on a specific character
const str = 'Hello World';
const strArray = str.split('');
// ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
// Any exmaple of using split with a for loop

for (let i = 0; i < strArray.length; i++) { //
  cleanStrArray.split(strArray[i]);
}

.replace()
// the replace method takes 2 agruments , first agrument add what you want it to find, 2nd what you want to replace it with
myNum.replace(/l/g,"1") // this is using regular expression to locate all L and replace with the string "1"

function cleanInputString(str) {
	const regex = /[\+\-\s]/g; // regex or regular expression is saved to regex variable
	return str.replace(regex, ""); // this will replace all the characters using .replace method with an empty character ""
}

.match() //NEED TO ADD DATA HERE

myVar.addEventListner(arg1,arg2)
/* event listener takes 2 arguments, first will be what you want it to monitor for, click, keystroke etc etc
second will be what you want to happen when this happens, this will usually be a function
The first argument has to be a string */

// When declaring variables that will use eventlistners if you need an argument its common pratice to use "e"

varName = "StrinG".toLocaleLowerCase() // this will make all your characters lower case using this method

Array.from() // this will convert a nodelist or array like objects into actual arrays




/

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


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ PROPERTIES $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// properties are what goes on the end using .notation, there are many properties so far but tracking them now
.innerHTML // this will append any HTML you have added in your javascript to the HTML that has already been written
// important not to use += or it may apend it

.value // this is getting the current value the user has entered, will relate to form data usually

Javascript will not accept CSS properties that have a - or other characters in it, you need to use camel casing, example below
elementID.style.backgroundColor will work, elementID.style-background-color will not work
