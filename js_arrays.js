///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ARRAYS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//You can use arrays in variables to hold multiple items
let myArray = ["This", "holds", "multiple", "items"] ;
// Arrays have a length property which gives you the length of the array index, this can also be used with conditional statements
myArray.length //  This is the length syntax
/* ONE thing to remember it is standard practice to use -1 at the end of .length if you are using it, if you are using a fixed length that will never change .length
will be ok but standard practice make sure to always use the below */
myArr.length -1 // this is going to ensure you do not receive an out of bounds error
// If you are looking to check for a specific length you do not need to use -1