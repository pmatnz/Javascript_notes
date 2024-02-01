/$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ STRING INTERPOLATION $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
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
