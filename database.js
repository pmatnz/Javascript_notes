// import database
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// Create a object and assign it your database URL
import { getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; // import ref (reference) and push which will push to database

const appSettings = {
	databaseURL:
		"https://playground-1bf26-default-rtdb.asia-southeast1.firebasedatabase.app/",
}; // object created, this is the link to my test DB

const app = initializeApp(appSettings) // links database
const database = getDatabase(app) // has personal database link as well as external
const moviesInDB = ref(database, "movies") // creates a reference field in the database which input will get added too 

// 1. Add module to the HTML scropt src file
// 2. Import Database using "Import" {NAME} "from" then add link
// 3. create variable that links to your personal database link
// 4. creating variable that links to the import 
// 5. make sure to add ref an push to the import
// 6. to push data use push(moviesInDB, inputValue)

********Pulling Data from DB**********
// To pull data from DB we use onValue (Make sure this is added to the import)
onValue(moviesInDB), function(snapshot) {
	let moviesArray = Object.values(snapshot.val()) // This uses the onValue function which will pull our data from 
	// the DB, snapshow is what is used to pull the current info in the DB, use snapshot.val to get data
}
	
// To get items from the DB assign this value to a variable snapshot.val
let itemsInDB = Object.entries(snapshot.val()) // this will return all current items in the DB

// to delete items from DB use the the remove function, first add "remove" to the import
remove(myVar) // this will delete it , myVar has to be the location so use the following
myVar = ref(database, "tablename/ID" // tablename being the name of the DB takle and ID the key

// important to remember the onValue function will listen to any changes happening in the application, snapshot will take in any values in the DB
