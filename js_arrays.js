///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ARRAYS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//You can use arrays in variables to hold multiple items
let myArray = ["This", "holds", "multiple", "items"] ;
// Arrays have a length property which gives you the length of the array index, this can also be used with conditional statements
myArray.length //  This is the length syntax
/* ONE thing to remember it is standard practice to use -1 at the end of .length if you are using it, if you are using a fixed length that will never change .length
will be ok but standard practice make sure to always use the below */
myArr.length -1 // this is going to ensure you do not receive an out of bounds error
// If you are looking to check for a specific length you do not need to use -1

The filter method can be used to filter our true or false, below is an example
const myarry = [1,4,7,12,435,454]
const myArrayFilter = myarry.filter(function(myArr) {
  if (myArr >= 20) {
    return true
})
// This will return all values that are true so in the above case this is 2, this can be shortend down using tenary

const myarry = [1,4,7,12,435,454]
const myArryfilterTenary = myarry.filter(function(myarrtern){
  return myarrTern >= 18 // this shortens the if statement it will return myArrTern results that are greater or equal to 18
  })
