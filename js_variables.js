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