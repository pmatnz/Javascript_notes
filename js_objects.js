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

// To change an Object to an array you can use the following
Object.Values(myVar) // this will get the value which is the 2nd value in an object
Object.Keys(myVar) // this will get the key
Object.entries(myVar) // this will get both
