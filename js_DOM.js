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

//good example for eventlisteners and elemtByID
let count = 0
let increment = document.getElementById("increment-btn") //gives access to the button element
let myCount = document.getElementById("count-el") // gives access to the html value

function UpdateNum() {
    count ++
    myCount.textContent = count
}
increment.addEventListener("click",UpdateNum); // listening for clicks on button myCount once it's clicked will call UpdateNum function

// document.createElement this is used to create and insert elements into the HTML instead of using innerHTML or textContent
myVar = document.createElement("li") // this will create list items
myVar.textContent = "Text" // assign textContent to the variable which is what will be the list name
myParentListElement.append(myVar) // using append to push the list into the HTML with the values assigned to myVar

//Changing elements style this can be done through JS
document.getElementById('addHTMLIDinHERE').style.backgroundColor = red; // use HTML class or ID, style then what css property you want it changed too
// Can also do it without the elemtByID
style.backgroundColor = Red; / use if you already have event listeners setup

container.classlist.toggle('reverse") // this gives access to the containers class list that is indide it, it then assigns the reverse css selector to it
 // you can target HTML child elements as long as they have classes assigned to them  
 // classlist access all the child elements listed inside, using toggle('') make sure to add your css selector in here.

myFunction.addEventListner('click', function (event //or e//) {
       consonle.log(event.target.id)                     
} // Use this on an event listener and you can use 'click' or 'change" which will isten for any changes using the event.target.id will get you any id of a radio button clicked

Classlists - you can add or remove using classlists to a single class or the entire partent element, example below
    document.getElementById(e.target.id).parentElement.classList.remove('unread') // take control of the lement or the parent element and then make changes after the 
    // .parentElement.classList. addhere

Using eventlistner to get IDs etc, don't need to create lots of getElementbyIDs we can just use the following
    addEventListenr(function randomName (e)) {
        console.log(e.target.id)
    } // what this will do is uses a redefined function parametre which is e, this stands for event this will target any event , target.id this will log out the ID of the event it's self when used.

                           
                           
