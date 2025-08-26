var cricket =['Dhoni','virat','rohit','jadeja','raina'];

// array :join = Adds all the elements of an array into a string, separated by the specified separator string.
var text = cricket.join();
// console.log(text);
  

// array : reverse = Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
var text = cricket.reverse();
console.log(text);

// array reverse String :

// var text = cricket.;
// console.log(text);


// Storage
// 1) localStorage :-
// Stores data in the browser with no expiration (until manually cleared).
// Data is saved even after closing/reopening the browser.
// Stores data in key-value pairs (both strings).

localStorage.setItem("username","Raina:");
var user = localStorage.getItem('username');
document.writeln(user);

localStorage.removeItem("username");
localStorage.clear();  
console.log(user);

// 2) sessionStorage:- 
// Similar to localStorage, but data is stored only for the session.
// Once the browser/tab is closed, the data is cleared.


sessionStorage.setItem("userID","1232");
var id = sessionStorage.getItem('userID');
document.writeln(id);   


// 3)cookies :-
// Small pieces of data stored in the browser.
// Can have an expiration date.
// Sent to the server with each HTTP request.
// Limited storage (~4KB).

document.cookie = "username=Vinod; expires=Fri, 31 Dec 2025 23:59:59 GMT";
console.log(document.cookie);
document.writeln(document.cookie);


