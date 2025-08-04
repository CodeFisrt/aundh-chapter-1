// console.log('hello world');

/**
 * node -v => to node version.
 * Data type : 
 * primmative and non-primative
 * primative -> numner, boolean ,string, null, undefined -> it is directly assign to variable
 * non -primative -> object , array -> it is assigned to varaible with the refernce.
 * 
 * 
 * 
 * 
 */

// object 
var obj = {
    name : 'vinod',
    age : 25,
    isGraduated: true
}
console.log(typeof(obj));
// Array
// var num = [11,2,5,5,7];
// console.log(typeof(num))
// var albhabet = ['a','b','c','f','g'];
// console.log(typeof(albhabet))

// Day-2
/**
 * Operators : 
 * 1) airthmatic
 * 2) comparistion
 * 3) logical operator
 * 4) assigmnet  operator
 * 5) conditional
 * 
 * 
 * 
 * 
 * 
 */


// Airthamatic
var sum = 2+8;
console.log(sum);

var sub = 8-3;
console.log(sub);


// comparison (imp)
// == --> it will compare only value
// === --> it will compare value as well as data type
// ! -> not
// var a = 10;
// function list(a) {
// var x = [2,4,7,5,7,]
// var c = a-= 1;
// // var d = a+1;
//  console.log(c);
// //  console.log(d);

// }
// list(12);

// ternary oprator
// function test() {
//     var a  = 10;
//     var c = (a!==10)? 100 : 500;
//     console.log (typeof(c));
// }
// test();
let x = 10;
let y = 5;
let z = 0;

// Logical AND (&&)
console.log(x > y && y > z); // true (10 > 5 is true, and 5 > 0 is true)
console.log(x < y && y > z); // false (10 < 5 is false, second part not evaluated)

// Logical OR (||)
console.log(x < y || y > z); // true (10 < 5 is false, but 5 > 0 is true)
console.log(x < y || z === null); // false (10 < 5 is false, and 0 === null is false)

// Logical NOT (!)
console.log(!(x > y)); // false (x > y is true, !true is false)
console.log(!(z === 0)); // false (z === 0 is true, !true is false)