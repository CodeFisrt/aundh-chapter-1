// // 1. String Method – Reverse a String 
// // Write a function to reverse a string without using the built-in reverse() method. 

// // 1. Reverse a String
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseString("hello")); // "olleh"

//     // 2. Count Vowels
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let ch of str) {
        if (vowels.includes(ch)) count++;
    }
    return count;
}
console.log(countVowels("CodeFirst Academy")); 


    
// // }

// // 3. String Method – Word Capitalization
// // function capitalizeWords(sentence) {
// //     return sentence.split(" ")
// //         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //         .join(" ");
// // }
// // console.log(capitalizeWords("javascript is fun"));


// // 4. localStorage – Save User Info 
// // Write code to store a user’s name and email in localStorage, and then retrieve and print it.

// localStorage.setItem("name","vinod",);
// localStorage.setItem("email","vinod@gnail.com");
// var user = localStorage.getItem('name');
// var email = localStorage.getItem('email');
// document.writeln(user," ",email);

// // 5. sessionStorage – Cart Example 

//  function saveSession(data){
//     sessionStorage.setItem("products", JSON.stringify(data))
// }
// saveSession(["Laptop", "Mouse", "Keyboard"]);

// function getSession(){
//     let products = JSON.parse(sessionStorage.getItem("products"))
//     console.log(products)
// }
 
// getSession();

// // 6. Sum of Numbers (1 to 50)
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     sum += i;
// }
// console.log("Sum:", sum); // 1275


// // 7. Multiplication Table of 7
// let num = 7, i = 1;
// while (i <= 10) {
//     console.log(`${num} x ${i} = ${num * i}`);
//     i++;
// }


// // 8. Data Types – Type Checker
// function typeChecker(value) {
//     return typeof value;
// }
// console.log(typeChecker(42));        // "number"
// console.log(typeChecker("CodeFirst"));// "string"


// // 9. Palindrome Check
// function isPalindrome(str) {
//     let reversed = str.split("").reverse().join("");
//     return str === reversed ? "Palindrome" : "Not Palindrome";
// }
// console.log(isPalindrome("madam")); // Palindrome


// // 10. Login Simulation
// localStorage.setItem("login", JSON.stringify({ username: "admin", password: "1234" }));

// function login(username, password) {
//     let stored = JSON.parse(localStorage.getItem("login"));
//     if (stored.username === username && stored.password === password) {
//         console.log("Login Successful");
//     } else {
//         console.log("Login Failed");
//     }
// }

// login("admin", "1234"); // Login Successful
// login("user", "0000");  // Login Failed