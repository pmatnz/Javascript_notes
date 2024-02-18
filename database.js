// import database
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// Create a object and assign it your database URL
import { getDatabase, ref, push, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; // import ref (reference) and push which will push to database

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
