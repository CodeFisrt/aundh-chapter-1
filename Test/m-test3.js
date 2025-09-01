// 1. Product Discounts (Array & Objects)

// let product = [
//   {
//     name: "laptop",
//     price: 50000,
//   },
//   {
//     name: "mobile",
//     price: 20000,
//   },
//   {
//     name: "Tablet",
//     price: 30000,
//   },
// ];

// for (let i = 0; i < product.length; i++) {
//   if (product[i].price > 25000) {
//     let dict = (product[i].price * 10) / 100;
//     console.log(dict);
//  }
// }
// ex2

// const products = [
//   { id: 1, name: "Laptop", price: 55000},
//   { id: 2, name: "Mobile", price: 25000},
//   { id: 3, name: "Tablet", price: 3000},
  
// ];

// const proddiscount = products.filter(p => p.price>25000).map(p=>p.price*0.10);
// console.log(proddiscount);
// 2. Employee Attendance (Object Manipulation)
// Write a function markAttendance(employee, date) that adds the given date into the 
// employee’s attendance list. 

// let employee = { id: 101, name: "Ravi", attendance: [] };

// function markAttendance(emp, date) {
//   emp.attendance.push(date);
// }

// markAttendance(employee, "2025-08-25");
// console.log(employee);

// 3. Student Grades (Pass/Fail Separation)
// function separateStudents(students) {
//   let passed = students.filter(s => s.marks >= 50);
//   let failed = students.filter(s => s.marks < 50);
//   return { passed, failed };
// }

// let students = [
//   { name: "Asha", marks: 85 },
//   { name: "Rahul", marks: 40 },
//   { name: "Sneha", marks: 72 }
// ];
// console.log(separateStudents(students));



// 4. Remove Duplicate Orders

//  function removeDuplicates(orders) {
//     return orders.filter((order, index) => {
//         return orders.indexOf(order) === index;
//     });
// }
// let a = ["Order1", "Order2", "Order1", "Order3", "Order2"];
// console.log( removeDuplicates(a));


// 5. Find the Most Expensive Item 

// let items =[{ item: "Shoes", price: 3000 }, 
// { item: "Watch", price: 7000 }, 
// { item: "Bag", price: 2500 } ];

// let mostExpensive = items .reduce((max,curr) =>{
//      return (curr.price >max.price) ? curr : max;
// })
// console.log("Most Expensive Item:", mostExpensive.item, "-", mostExpensive.price);


// 6. Merge Two Inventories

// let store1 = { apples: 10, bananas: 5 }; 
// let store2 = { apples: 3, oranges: 7 };

// let merged = Object.entries(store2).reduce(
//     (acc, [item, qty]) => {
//         acc[item] = (acc[item] || 0) + qty; 
//         return acc;
//     },
//     { ...store1 }  
// );
// console.log(merged);


// 7. Check Palindrome Order ID
// function isPalindrome(id) {
//   return id === id.split("").reverse().join("");
// }

// console.log(isPalindrome("1221"));
// console.log(isPalindrome("1231"));



// 8. Shopping Cart Total

// let cart =[{ product: "Shoes", qty: 2, price: 2000 }, 
//            { product: "Belt", qty: 1, price: 500 } ];
// function calculateTotal (cart) {
//     return cart.reduce((total,product) =>{
//         return total +(product.price * product.qty);
//     },0)
// }
// console.log("Total Bill :",calculateTotal(cart));


// 9. Sort Students by Name

// let students =[ 
//     { name: "Zara", age: 21 }, 
//     { name: "Amit", age: 22 }, 
//     { name: "Meena", age: 20 }
//     ];
//     students.sort((a, b) => a.name.localeCompare(b.name));
//     console.log(students);


// 10. Find Missing Attendance Date
function findMissingDates(dates, start, end) {
  let result = [];
  let current = new Date(start);
  let last = new Date(end);
  let dateSet = new Set(dates);

  while (current <= last) {
    let d = current.toISOString().split("T")[0];
    if (!dateSet.has(d)) result.push(d);
    current.setDate(current.getDate() + 1);
  }
  return result;
}

let attendance = ["2025-08-20", "2025-08-21", "2025-08-23"];
console.log(findMissingDates(attendance, "2025-08-20", "2025-08-23"));   