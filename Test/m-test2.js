// 1.  Write a function to return the highest scoring student’s name. 

 let students = [ 
  { name: "Amit", marks: 85 }, 
  { name: "Sneha", marks: 92 }, 
  { name: "Rohit", marks: 76 } 
]; 
function getTopStudent(students){
   let topStudent = students.reduce((prev, current) =>{
    return (current.marks >prev.marks) ? current : prev;
   });
   return topStudent.name;
}

console.log(getTopStudent(students));


// Q 2.  Write a function to calculate the total bill amount.

 let cart = [ 
  { item: "Shirt", price: 500, qty: 2 }, 
  { item: "Jeans", price: 1200, qty: 1 }, 
  { item: "Shoes", price: 2000, qty: 1 } 
]; 

function calculateTotal (cart) {
    return cart.reduce((total,product) =>{
        return total +(product.price * product.qty);
    },0)
}
console.log("Total Bill :",calculateTotal(cart));


// 10. Merge Two Arrays of Objects (Remove Duplicates by ID)

let arr1 = [{ id: 1, name: "A" }, { id: 2, name: "B" }]; 
let arr2 = [{ id: 2, name: "B" }, { id: 3, name: "C" }];

let merged = [...arr1, ...arr2];

let uni = Array.from( 
  new Map(merged.map(item => [item.id,item])).values()
)
console.log(uni);



