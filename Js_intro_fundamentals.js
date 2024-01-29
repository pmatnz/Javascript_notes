//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$VARIABLES//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// use var to declare a variable 
var Name = "Paul"; // any name goes inside the name variable, i have selected Paul. Paul is a string. This is called initialization.
// Name is now equal to Paul

// When namin variables that have 2 words use camel casing, this just means the 2nd word uses a capitcal
var hello = "howAreYou";

// There are multiple ways to declare variables, var and let and const. It is best to use let if possible and const for anything that is ummutable
let Name = "paulMatthews"
const Name = "paulMatthews" // This will not be able to be changed in the future.

// variables can be assigned multiple data types, strings, nums. If declaring a variable with a string make sure to include "" or it will give an error

// If you need to add a variable to the end of a string you can use concatenation this is just adding a + after the string
text.innerText = "Hello my name is" + name + "how are you? what is your" + name +"?";
//Something to remember inner text just overwrites any current text, if you need to add anything on use the += or +
text.innerText =+ "hello this is adding more string data on";
// Using var make variables global can't be used twice, using let allows you to use the same variable name in different scopes
/* Something important to note, if you are using text.inner text twice where you want to append another variable or function to the already text.innerText
you do need to use += which will add the 2nd text on. If you failto do this the 2nd text.InnerText will overwrite the first. */
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";


  ////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ARRAYS//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//You can use arrays in variables to hold multiple items
let myArray = ["This", "holds", "multiple", "items"] ;
// Arrays have a length property which gives you the length of the array index, this can also be used with conditional statements
myArray.length //  This is the length syntax
/* ONE thing to remember it is standard practice to use -1 at the end of .length if you are using it, if you are using a fixed length that will never change .length
will be ok but standard practice make sure to always use the below */
myArr.length -1 // this is going to ensure you do not receive an out of bounds error
// If you are looking to check for a specific length you do not need to use -1

////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$DOM DOCUMENT OBJECT MODEL USE THIS TO LINK HTML ELEMENTS WITH JAVASCRIPT//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//javascript interacts using DOM , document object model if you want to find specific elements in HTML you can use a query selector
//to find all the h1 in HTML do the below. You always have to start with "document" when interacting with HTML. There are also ther DOM objects you can use
let h1 = document.querySelector("h1"); // this will locate the h1 HTML selector
let button1 = document.querySelector("#button1"); // this is going to target button1 which is an HTML ID, if it was a class you would use the .button1 
// instead of the #. # to access and ID, . to access a class.

let myVar = document.getElementById("element-id"); 
// getElementbyID you dont need to use # for it to target an element like querySelector, elememtby is better to use if you are only targetting an ID an that is all
// If you declare input element type=number javescript receives this as a string so a function is reqired to convert this to a num\

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Use querySelector to target classes and others and use getElementByID to target IDs
/*querySelector for Classes:

Use querySelector when you want to target elements based on classes, attributes, or other complex CSS selectors.
Example: */
document.querySelector(".example-class") or document.querySelector("#exampleId .example-class")
//getElementById for IDs:

//Use getElementById when you want to specifically target an element by its unique id.
Example: document.getElementById("exampleId")




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ACESSING CSS USING JAVASCRIPT//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//If you want to change a css property using javascript you can do so useing dot notation, use the variablename then style then the css property you want to edit
monsterStatus.style.display ="block"; /* This will the display from none to block when this is ran. A query selector has already been done which give access
/* to the monsterStatus css property*/

//Always place the script tag just above the </body> 

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


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ COMMENTS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//Single line comments use //

/* Multi line 
commments can use */

////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ JAVASCRIPT PROPERTIES $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/*To attach a function to a javascript property like when someone clicks a mouse you can use the following format, need to use dot notation then the property*/
button1.onclick = goStore; // When button1 element is clicked it will run the onStore variable and output "Going to store."
// The javascript properties after dot notation is what I would use when i want something to run when an action is done to one of my elements like a button

/*innerText property , using the innerText this will change the text of an HTML element eg clicking a button that says Hello if i added the below after clicking it would say
say Hi how aer you */
const sayHello = document.querySelector("#hello"); //This is accessing the hello element from the HTML which is what will be edited through javascript
sayHello.innerText = "Hello Back";

//If you have a string that needs special characters that may cause issues you can use an escape which is \"texthere\" this will make sure the text remains a string

////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ OBJECTS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/* Objects are simliar to dictionarys from Python, they have key, value pairs. The format for an object is the following
the key is the name of the property and the value is the value that property holds */

let person = {
    name: "John",
    age: 25,
    city: "Example City"
};

/* There are 2 ways of adding a property, one is dot notation where you will use : as a seperator, the 2nd is using brakcet notation where you will wrap the property 
in commas "" use this when your property requires a space or special characters*/

// You can use dot notations to access the object property
weapons[currentWeapons].name; // using dot notation using .name is going to access the object and if you have some sort of counter going it will be based on 
// the name that matches the counter.

{
    name: "Naomi", // Dot notation
    "favorite color": "purple"// Bracket notation
  }

//You can access objects via dot notations 
person.name // person would be the function and name the object

// You can use short hand when using maths see below
gold = gold + 10// This is the long way
gold += 10 // this is the short hand way this is called compound assignment

////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ IF STATEMENTS CONDITIONALS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//If you want to add a conditional you would use an IF statement
if ("condition") {
    "action condtion if conditon met"
}

//REMEMBER THE CONDITION GOES INSIDE () IN THE IF STATEMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// If using a conditional add the code inside the function
function buyHealth() {
    if (gold >= 10) {
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
    } else {
      text.innerText = "Not enough gold to buy health!";
    }
  }

  // Another way of adding one on to a variable or function is just use ++
  myWeapon = 0; , myWeapon ++ // this will incrament myWeapon by 1
  // You can also decrement as well by using --
  myWeapon = 0; , myWeapon -- // this will remove 1

//You can add multipe else if statements if you have other conditions you want met now just the one  
if (health <= 0) {
  lose()
} else if (monsterHealth <= 0) {
  defeatMonster()
};

// If you need to be 100% you can use strict operator which is ===
if (dog === cat) { //strict operator in use here
  do something
};

// TERNARY OPERATOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// if else statements can be done in a different format 
condition ? true : false.
// example below
if (num > 5) {
  bigger()
} else {
  smaller()
}

//using Ternary it gets turned into the following

if num > 5 ? bigger() : smaller(); //the : replaces else
// Only use ternary for a simple if else, not if there are multiple conditions as it makes readability difficult

// or operator is || this is used if 2 conditions are included but only one needs to be met 
if (paul == 2 || 5){ // or operator will use the first value if truthy , if not then move to the 2nd.
  excuteCode()
}

// The and operator checks if two statements are true &&
if (firstName === "Quincy" && lastName === "Larson") {}
// the NOT equal to operator you will use !==
if (firstName === "Quincy" && lastName !== "Larson") {} // last name has a NOT equal too both of these conditions have to be met

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ LOOPS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//WHILE LOOPS!!!!!!!!!!!!!! accepts a condition an will run the condition until it is no longer true
while (i < 5) { // This while loop will keep running until i becomes 5 or more
  DoSomething
} 

/* for loops a created with 3 expressions each followed by a semi colon ;. for (a; b; c;)
a is the initialization express so the variable, b is the conditon and c is the counter or final expression*/

\n // This means new line you can add it inside a string

//FOR LOOPS!!!!!!!!!!!!!!!  
// for loops will run a specific amount of time until a certain condition. As long as the condition evalualtes to true.
for (let x = 1; x < 5; x++) {} // creates a variable x, when x is less than 5 add 1 more to x until x hits 5 then the loop terminates

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

inventory.pop() 
// This will return the last item in an array to the user so you can use this to take the last item and assign it to another variable or function

.include() 
// this checks if an element exists in an array and will return true or false
const numbersArray = [1, 2, 3, 4, 5] 
const number = 3

if (numbersArray.includes(number)) { // checking if number exists in numbersArray
  console.log("The number is in the array.")
}

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