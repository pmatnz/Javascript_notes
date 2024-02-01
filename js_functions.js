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