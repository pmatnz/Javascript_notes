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




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ STRING INTERPOLATION $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// instead of using string concatenation you can do the following directly into a string, it uses back ticks far left on keyboard ` next to 1.
const name = "John";
const age = 25;

// Using template literals
const message = `Hello, my name is ${name} and I am ${age} years old.`;

//Function example with loop and if statement and methods
function cleanInputString(str) {
	let strArray = str.split(""); // this will split str by ""
	let cleanStrArray = [];

	for (let i = 0; i < strArray.length; i++) {
		// creating the loop condition
		if (!["+", "-", " "].includes(strArray[i])) { //split turns strArray into an array so have to use []
			/*checking if  +,- or space does NOT exist in strArray using .includes method, 
            adding in [i] so it keeps checking with the loop*/
			cleanStrArray.push(strArray[i]);
			//if they do NOT have the characters it pushes the string to the cleanstrArray variable using push method.
		}
	}
}