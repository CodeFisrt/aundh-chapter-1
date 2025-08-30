// 1. Write a function to return the highest scoring student’s name.

// let students = [

// { name: "Amit", marks: 85 },
// { name: "Sneha", marks: 92 },
// { name: "Rohit", marks: 76 }
// ];

// let topStudent = students.reduce((prev , curr) =>
// {
//    return curr.marks > prev.marks ? curr:prev

// });

// console.log(topStudent.name);




// 2. Write a function to calculate the total bill amount.(reduce method)
// Given a shopping cart array: 
// let cart = [
// { item: "Shirt", price: 500, qty: 2 },
// { item: "Jeans", price: 1200, qty: 1 },
// { item: "Shoes", price: 2000, qty: 1 }
// ];
 
// let totalBillAmount = cart.reduce((sum, product) => {
//   return sum + (product.price * product.qty);
// }, 0);

// console.log(totalBillAmount);

// function totalBillAmount(Shoppingcart){
//     let total = 0;
//     for(let i=0; i<Shoppingcart.length; i++){
//         const item = Shoppingcart[i]
//         total += item.price * item.qty ;
//     }

//     return total

// }

// const result = totalBillAmount(cart);
// console.log(`total bill amount : ${result}`)


// useing filter or reduce
// let employees = [
// { name: "Raj", dept: "IT" },
// { name: "Priya", dept: "HR" },
// { name: "Amit", dept: "IT" },
// { name: "Sara", dept: "Finance" }
// ];


// let groupedby = employees.reduce((acc , emp) =>{
//     if(! acc[emp.dept]){
//         acc[emp.dept] = []
//     }
//     acc[emp.dept].push(emp.name)
//     return acc
// }, {})
//  console.log(groupedby)



// 4. Find Duplicate Emails

// let emails = ["a@gmail.com", "b@gmail.com", "a@gmail.com", "c@gmail.com"];
// let duplicate = emails.filter((email , index , arr) =>
//     arr.indexOf(email) !== index
// )
// let uniquiduplicate = [...new Set(duplicate)];
// console.log(uniquiduplicate);


// 5. Output: Sorted array by price (ascending).

// let products = [
// { name: "Laptop", price: 50000 },
// { name: "Mouse", price: 500 },
// { name: "Keyboard", price: 1500 }
// ];

// products.sort((a,b)=>a.price - b.price)

// console.log(products);


// 6. Write a function to return only the list of present students.
// let attendance = [
// { name: "Ravi", present: true },
// { name: "Neha", present: false },
// { name: "Kiran", present: true }
// ];

// function presentstudents(attendance){
//     return attendance.filter(student => student.present).map(student => student.name);
// }
// console.log(presentstudents(attendance));



// 7. Write a function to flatten the array.

// let arr = [1, [2, 3], [4, [5, 6]]];
// let flatten = arr.flat(Infinity);
// console.log(flatten);

// let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let worldcount = words.reduce((acc , word) =>{
//     acc[word] = (acc[word] || 0) +1
//     return acc
// },[])
// console.log(worldcount);



// 9. Write a function that takes id = 102 and returns "Sneha".
// let employees = [
// { id: 101, name: "Rahul" },
// { id: 102, name: "Sneha" },
// { id: 103, name: "Aman" }
// ];

// function  employeeName(id){
//     let emp = employees.find(e => e.id === id)
//     return emp ? emp.name : null
// }

// console.log(employeeName(102));

// 10. Merge Two Arrays of Objects (Remove Duplicates by ID) Input:

// let arr1 = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
// let arr2 = [{ id: 2, name: "B" }, { id: 3, name: "C" }];

// let mergearray = [...arr1, ...arr2]
// console.log(mergearray);

// let uniquearray = [...new Map(mergearray.map(obj => [obj.id ,obj])).values()]

// console.log(uniquearray)
