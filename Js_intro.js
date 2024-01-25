//VARIABLES

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

//ARRAYS
//You can use arrays in variables to hold multiple items
let myArray = ["This", "holds", "multiple", "items"] ;
// Arrays have a length property which gives you the length of the array index, this can also be used with conditional statements
myArray.length //  This is the length syntax
/* ONE thing to remember it is standard practice to use -1 at the end of .length if you are using it, if you are using a fixed length that will never change .length
will be ok but standard practice make sure to always use the below */
myArr.length -1 // this is going to ensure you do not receive an out of bounds error
// If you are looking to check for a specific length you do not need to use -1

// DOM DOCUMENT OBJECT MODEL USE THIS TO LINK HTML ELEMENTS WITH JAVASCRIPT
//javascript interacts using DOM , document object model if you want to find specific elements in HTML you can use a query selector
//to find all the h1 in HTML do the below. You always have to start with "document" when interacting with HTML. There are also ther DOM objects you can use
let h1 = document.querySelector("h1"); // this will locate the h1 HTML selector
let button1 = document.querySelector("#button1"); // this is going to target button1 which is an HTML ID, if it was a class you would use the .button1 
// instead of the #. # to access and ID, . to access a class.

//Always place the script tag just above the </body> 

//FUNCTIONS

// Use functions allow you to run a set of code any any specific time use the following format
function (test) {
    //insert fuction text here
}

// To call a function use the function like the above, if the function has an argument which goes inside the parenthases add that in there.
myFunction (argument) {}

// To access a function that hasm more than one property you need to use bracket notation, values start at 0 and you need to include [0] with the number inside
// make sure when you are accessing part of an array to add the brackets outside the original array , example below
location["button text"][0]; // see how 0 is added after the array property

//COMMENTS

//Single line comments use //

/* Multi line 
commments can use */

//Javascript Properties

/*To attach a function to a javascript property like when someone clicks a mouse you can use the following format, need to use dot notation then the property*/
button1.onclick = goStore; // When button1 element is clicked it will run the onStore variable and output "Going to store."
// The javascript properties after dot notation is what I would use when i want something to run when an action is done to one of my elements like a button

/*innerText property , using the innerText this will change the text of an HTML element eg clicking a button that says Hello if i added the below after clicking it would say
say Hi how aer you */
const sayHello = document.querySelector("#hello"); //This is accessing the hello element from the HTML which is what will be edited through javascript
sayHello.innerText = "Hello Back";

//If you have a string that needs special characters that may cause issues you can use an escape which is \"texthere\" this will make sure the text remains a string

//OBJECTS
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

//IF STATEMENTS CONDITIONALS
//If you want to add a conditional you would use an IF statement
if ("condition") {
    "action condtion if conditon met"
}

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


// METHODS
// The push method will update an array to contain new information, it can also update other thing as well
myarr = [2,4,6,7];
mySecondArr = [34,22];
myarr.push(mySecondArr); // This is going to update myarr and add 34 and 22 on to it.
// The shift() method will take the first index/ element from an array and assign it to another variable. it returns the first element.

