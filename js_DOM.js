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