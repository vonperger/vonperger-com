
// Ask user for input eg name
//var username = prompt("Whats your name?");

// Define new function to check username
function checkUser (input) {
  input = input.toUpperCase();
  // Check for strict equality
  if (input === "VONPERGER") {
    return "Hello " + username + "!";
  } else {
    return "Not logged in!";
  }
}

// Write into the HTML with the results of the previous function
//document.write(checkUser(username));

function randomGenerate (a,b) {
  if ( isNaN(a) || isNaN(b) ) {
    throw new Error("Wrong type of arguments");
  }
  var number = a + ( Math.floor(Math.random() * (b - a)) + 1);
  return number;
}

document.write(randomGenerate (10,100));
console.log(randomGenerate (10,20));
console.log(randomGenerate (10,20));
console.log(randomGenerate (10,20));
console.log(randomGenerate (10,20));
console.log(randomGenerate (10,20));
console.log(randomGenerate (10,20));
//console.log(randomGenerate (10,"twenty"));





// Some API testing stuff


//var xhr = new XMLHttpRequest();
//xhr.open("GET", "https://www.codecademy.com/", false);
// Add your code below!
//xhr.send();

//console.log(xhr.status);
//console.log(xhr.statusText);

// document.write(xhr.status + xhr.statusText);
