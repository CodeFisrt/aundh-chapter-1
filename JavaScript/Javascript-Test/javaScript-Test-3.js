// Write a function that applies a 10% discount to products priced above 25,000 and returns the
// updated list.
// 1. Product Discounts (Array & Objects)
// You have a product list:
// let Product = [
// { name1: "Laptop", price: 55000 },
// { name1: "Mobile", price: 25000 },
// { name1: "Tablet", price: 3000 }
// ]

// for (let i = 0; i < Product.length; i++) {
//     let data = Product[i]
//   if (data.price > 25000) {
//     let dict = (data.price * 10) / 100;
//     let result =  data.price - dict
//     console.log(`${data.name1} = ${result}`);
//   }
// }

// function discount(product){

// for(i=0; i<product.length; i++){
//     let output = []
//     let data = product[i]
//     if(data.price >= 25000){
//         let result =  data.price - 0.10; 
//         output.push[name1 , price.result ]
//     }
    
// }
// // return result;
// }






// Create an object for an employee:
// Write a function markAttendance(employee, date) that adds the given date into the
// employee’s attendance list.
// let employee = {
// id: 101,
// name: "Ravi",
// attendance: []
// };
// function markAttendance(employee, date){
//    employee.attendance.push(date)
//    return employee;

// }

// let updatedEmp = markAttendance(employee, "2025-08-25");
// console.log(updatedEmp);




// Student Grades (Array of Objects) filter
// Write a function to separate passed and failed students (pass marks ≥ 50) into two arrays.

// let stud =  [
//     { name: "Asha", marks: 85 },
// { name: "Rahul", marks: 40 },
// { name: "Sneha", marks: 72 }
// ]

// function passedFailed(data){
//    let results = [];
//   for (let i = 0; i < data.length; i++){
//     let mark = data[i];
//     let status = mark.marks >= 50 ? "Pass" : "Fail";
//     results.push({ name: mark.name, result: status });
//   }
//   return results;
// }

// let result = passedFailed(stud);
// console.log(result)


// 4. Remove Duplicate Orders
// Input:
let data =  ["Order1", "Order2", "Order1", "Order3", "Order2"]
//  let Duplicate = data.filter((iten , index) =>{
//     return data.indexOf(iten) === index;
//  })
//  console.log(Duplicate)
// let result = [...new Set(data)]
// console.log(result)




// 5. Find the Most Expensive Item
// Input:
// let arr =  [
// { item: "Shoes", price: 3000 },
// { item: "Watch", price: 7000 },
// { item: "Bag", price: 2500 }
// ]

// function expensive(arr){
    
// const expensiveItem = arr.reduce((prev , curr) =>{
//      return curr.price > prev.price ? curr:prev
// } )

// }


// console.log(expensiveItem.item)


// 6. Merge Two Inventories
//  let store1 = { apples: 10, bananas: 5 };
// let store2 = { apples: 3, oranges: 7 };

// let Inventories = {...store1, ...store2};
// console.log(Inventories);


// 7. Check Palindrome Order ID
// Input: "1221" → Output: true
// Input: "1231" → Output: false

// function Palindrome(number){
//   const numstr = String(number)
//     const reverse = numstr.split("").reverse().join("");
//     return numstr == reverse
// }
// let input1 = 1221
// let input2 = 1231
// let result = Palindrome(input1)
// console.log(result)

// let n = 1221
// let sum =0 ;
// while(n>0){
//     let rem = n %10;
//     sum = sum *10 + rem;
//     n = n/10
// }
// if(n == sum){
//     console.log(true)
// }else{
//     console.log(false);
    
// }