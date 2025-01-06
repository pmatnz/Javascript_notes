//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ FUNCTIONS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//Use functions allow you to run a set of code any any specific time use the following format
function (test) {
    //insert fuction text here
}

// To call a function use the function like the above, if the function has an argument which goes inside the parenthases add that in there.
myFunction (argument) {}

// To access a function that hasm more than one property you need to use bracket notation, values start at 0 and you need to include [0] with the number inside
// make sure when you are accessing part of an array to add the brackets outside the original array , example below
location["button text"][0]; // see how 0 is added after the array property

//functions can also return a value at the ned do so by using return
function myFucn(arg) {
  return arg;
}

// Browsers have built in functions called alert functions, this will send a pop up to the user, the arguement is the message
alert("Add message to pop up here);

// Number() function will convert a string usually to a number
      Number("8") // this will bring back 8, if it's not a number it will display NaN - Not a Number
	

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ COMMENTS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//Single line comments use //

/* Multi line 
commments can use */

// number function will convert all strings into numbers, by default javascript uses strings
number(addnumhere) // this will convert what inside number to a num

// Local storage use this so if someone refreshes browsers their saved data will remain
localStorage.setitem("KEY","VALIUE") 
localStorage.setitem("myVar", "www.item.com") // this will save this data into the browser local storage
localStorage.getitem("key") // this will get data from local storage
localStorage.clear() // clears the cache

// You can create functions from other files, use the following
export function myFunction(a,b) { // export this makes it avaliable to be used in other JS files
	return a + b }

import {myFunction} from "add file link here" // adding import enables us to use the function that is from another file, make sure import is inside {} curly brackets
// need to add the modul in the HTML inside the script, also need to add the link to the actual external file in script

<script src="functions.js" type="module"></script>
<script src="index.js" type="module"></script>

// function declarations are hoisted this means they can be accessed anywhere in the file , function expressions are only accessed when you add dad underneath it, they are not hoisted (global)

const exampleFunction = function(param) {
	return stuff here
}

//Arrow Functions

// The above function gets turned into the following

const exampleFunction = (param) => {
	return "data here"
}

//brackets are not required if there is only one parametre, if more than one they are required
//arrow functions also don't required a return statement so then above can be turned into the following

const examplefunctions = param => "data here"
const examplefunction = (param1,param2) => "data here"

