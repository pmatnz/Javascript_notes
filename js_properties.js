////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ JAVASCRIPT PROPERTIES $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/*To attach a function to a javascript property like when someone clicks a mouse you can use the following format, need to use dot notation then the property*/
button1.onclick = goStore; // When button1 element is clicked it will run the onStore variable and output "Going to store."
// The javascript properties after dot notation is what I would use when i want something to run when an action is done to one of my elements like a button

/*innerText property , using the innerText this will change the text of an HTML element eg clicking a button that says Hello if i added the below after clicking it would say
say Hi how aer you */
const sayHello = document.querySelector("#hello"); //This is accessing the hello element from the HTML which is what will be edited through javascript
sayHello.innerText = "Hello Back";

//If you have a string that needs special characters that may cause issues you can use an escape which is \"texthere\" this will make sure the text remains a string



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ PROPERTIES $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// properties are what goes on the end using .notation, there are many properties so far but tracking them now
.innerHTML // this will append any HTML you have added in your javascript to the HTML that has already been written
// important not to use += or it may apend it

.value // this is getting the current value the user has entered, will relate to form data usually

.textContent
//This will display the current content that is assigned to the text element 
let text = document.getElementById("buttonText"); // if button text is "hello" it will say Hello

// the .value property will accept users input from an HTML text field, make sure to add this inside the eventlistener
const saveButton = document.getElementById("input-btn"); // using const never want the buttons to be ressaigned
const inputEl = document.getElementById("input-el");

let myLeads = [];

saveButton.addEventListener("click", function () {
	myLeads.push(inputEl.value); // just add the .value property to the inputel variable this will display the users input in this case its updating it into an array
	console.log(myLeads);
});

// added html using javascript two ways to do this, best way is using innerHTML property
ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" // this will add list element into the HTML and populate with whatever user input you have got

// 2nd way is using the following
document.createElement(li) // this will create the list elements
li.textContent = myArray
// use .append to append the data to the list elements
