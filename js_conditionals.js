////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ IF STATEMENTS CONDITIONALS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//If you want to add a conditional you would use an IF statement
if ("condition") {
    "action condtion if conditon met"
}

//REMEMBER THE CONDITION GOES INSIDE () IN THE IF STATEMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// If using a conditional add the code inside the function
function buyHealth() {
    if (gold >= 10) {
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
    } else {
      text.innerText = "Not enough gold to buy health!";
    }
  }

  // Another way of adding one on to a variable or function is just use ++
  myWeapon = 0; , myWeapon ++ // this will incrament myWeapon by 1
  // You can also decrement as well by using --
  myWeapon = 0; , myWeapon -- // this will remove 1

//You can add multipe else if statements if you have other conditions you want met now just the one  
if (health <= 0) {
  lose()
} else if (monsterHealth <= 0) {
  defeatMonster()
};

// If you need to be 100% you can use strict operator which is ===
if (dog === cat) { //strict operator in use here
  do something
};

// TERNARY OPERATOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// if else statements can be done in a different format 
condition ? true : false.
// example below
if (num > 5) {
  bigger()
} else {
  smaller()
}

//using Ternary it gets turned into the following

if num > 5 ? bigger() : smaller(); //the : replaces else
// Only use ternary for a simple if else, not if there are multiple conditions as it makes readability difficult

// or operator is || this is used if 2 conditions are included but only one needs to be met 
if (paul == 2 || 5){ // or operator will use the first value if truthy , if not then move to the 2nd.
  excuteCode()
}

// The and operator checks if two statements are true &&
if (firstName === "Quincy" && lastName === "Larson") {}
// the NOT equal to operator you will use !==
if (firstName === "Quincy" && lastName !== "Larson") {} // last name has a NOT equal too both of these conditions have to be met

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ LOOPS $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//WHILE LOOPS!!!!!!!!!!!!!! accepts a condition an will run the condition until it is no longer true
while (i < 5) { // This while loop will keep running until i becomes 5 or more
    DoSomething
  } 
  
  /* for loops a created with 3 expressions each followed by a semi colon ;. for (a; b; c;)
  a is the initialization express so the variable, b is the conditon and c is the counter or final expression*/
  
  \n // This means new line you can add it inside a string
  
  //FOR LOOPS!!!!!!!!!!!!!!!  
  // for loops will run a specific amount of time until a certain condition. As long as the condition evalualtes to true.
  for (let x = 1; x < 5; x++) {} // creates a variable x, when x is less than 5 add 1 more to x until x hits 5 then the loop terminates