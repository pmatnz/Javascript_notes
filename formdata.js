// use formdata to get user inputs and store it in an object , store it in a contructure function syntax below
const myForm = new Formdata(insertFormHere)

// to access this object data need to use the .get method
const myname = myForm.get("name") // this will access the form that is taking the name input from the user
