 // Arrow function
// const square = n => n * n;
 // console.log(square(5));

// Spread  Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);

// Spread  Objects
let obj1 = { name: "Vinod", age: 25 };
let obj2 = { city: "Pune", age: 30 };
let newObj = { ...obj1, ...obj2 };
console.log(newObj);

// Rest in Functions
function add(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(add(1, 2, 3, 4, 5));

// Rest in Array Destructuring
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); 

console.log(second);

console.log(rest); 
 