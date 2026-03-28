// Make sure to install readline-sync first:
// 
//npm install readline-sync
//const readline = require('readline-sync');




const readlineSync = require("readline-sync");

let isValid = false;

while (!isValid) {
  let password = readlineSync.question("Enter a password: ");

  let hasUppercase = false;
  let hasNumber = false;

  // Check length
  if (password.length < 8) {
    console.log("Password must be at least 8 characters long.\n");
    continue;
  }

  // Loop through each character
  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    }

    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }

  // Final validation
  if (hasUppercase && hasNumber) {
    console.log("Password accepted! You have been successful.");
    isValid = true;
  } else {
    console.log("Password must contain at least one uppercase letter and one number.\n");
  }
}