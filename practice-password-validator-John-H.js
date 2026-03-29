// Make sure to install readline-sync first:
// 
//npm install readline-sync
const readlineSync = require("readline-sync");

let valid = false;

while (!valid) {
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

  // verify password has an uppercase and number
  if (hasUppercase && hasNumber) {
    console.log("Password accepted");
    valid = true;
  } else {
    console.log("Password must contain at least one uppercase letter and one number.\n");
  }
}