// Create a function square(num) that returns the square of a number. Call it with 5 and print the result.


function square(num) {
    return num * num;
}

var result = square(5);
console.log(result); 


// Write a program that checks whether a number is positive, negative, or zero using if/else statements.
// Eg. var a = 18


var a = 18;

if (a > 0) {
    console.log("The number is positive.");
} else if (a < 0) {
    console.log("The number is negative.");
} 
else {
    console.log("The number is zero.");
}


//  Create a button that changes the background color of the page when clicked using JavaScript DOM methods.


 function Background() {
            document.body.style.backgroundColor = "green"; // 
        }



        // Create a function isEven(num) that returns true if the number is even, otherwise false.


        function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); 
console.log(isEven(7)); 



// Write a program that takes a number and checks if it is divisible by 2 and 3.


var number = 12; 

if (number % 2 === 0 && number % 3 === 0) {
    console.log(number + " is divisible by both 2 and 3.");
} 
else {
    console.log(number + " is not divisible by both 2 and 3.");
}



// Create a program that checks if a number is between 10 and 50 and prints a message accordingly using logical operators.
 

var number = 25; 

if (number >= 10 && number <= 50) {
    console.log(number + " is between 10 and 50.");
} else {
    console.log(number + " is NOT between 10 and 50.");
}

