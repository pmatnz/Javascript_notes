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

Accessing specific objects that are inside an array
To access a specific object inside an array first you need to specifiy the location of the Array eg 
 myarrywithObjects[0] // this will grab the object in position 0
// After you have accessed that object you can then just use . notation to access a specific Object, say you wanted the image object do the following
myarrywithObects[0].image // this is going to return only the object that is related to the image

FILTER
//Using the filter object in an array will return a new array with only the results that match the fitler example

const myArray = myArrayData.filter(function(NewArraywithFilterresults) {
  return comparingInfo === NewArraywithFilterresults
} [0] // IF YOU NEED TO ACCESS AN OBJECT IN THIS ARRAY USE INDEX 0 which will return an object , without it , it returns an array datatype.

// I now have access to the array values and can manipulate this anyway i want.                                   

***********.MAP method*************
// .map can be used on an array you can use this to manipulate the individual indexes in an array sytax below
const myArr = [1,3,4,6,3]
const myaddAdd = 1.2
const usingMap = myArr.map(function(mappedArray){
        return mappedArray * myaddAdd)
// this will check each index and * them by 1.2 and return this new value in the array usingMap
// if you want to display each index it also takes another parametre "index"
  const myArr = [1,3,4,6,3]
const myaddAdd = 1.2
const usingMap = myArr.map(function(mappedArray.index){ // this will now show each index
        return mappedArray * myaddAdd)
                                   
